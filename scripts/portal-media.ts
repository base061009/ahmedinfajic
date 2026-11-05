import { spawn } from "node:child_process";
import { mkdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { chromium, type Locator, type Page } from "playwright";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const ffmpegBin = process.env.FFMPEG || (require("ffmpeg-static") as string) || "ffmpeg";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetDir = join(root, "src/assets/mandantenportal");
const publicDir = join(root, "public/mandantenportal");
const base = (process.env.DEMO_URL ?? "https://stbportal-demo.netlify.app").replace(/\/$/, "");
const email = process.env.DEMO_EMAIL ?? "admin@berger-steuer.at";
const password = process.env.DEMO_PASSWORD ?? "";

type Mark = { n: number; x: number; y: number };
type ShotNote = { notes: string[]; marks: Mark[] };

if (!password) {
  console.error("DEMO_PASSWORD fehlt. Abbruch, es werden keine Aufnahmen erzeugt.");
  process.exit(1);
}

const notes: Record<string, ShotNote> = {};
const report: string[] = [];

function log(message: string) {
  report.push(message);
  console.log(message);
}

function abort(message: string): never {
  throw new Error(message);
}

async function guard(page: Page) {
  await page.route("**/*", async (route) => {
    const request = route.request();
    const method = request.method();
    if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
      await route.continue();
      return;
    }
    const url = request.url();
    const body = request.postData() ?? "";
    const auth = method === "POST" && url.includes("/api/auth/");
    const loginAudit = method === "POST" && url.includes("/api/audit/login");
    const preview = method === "POST" && url.includes("/api/export") && body.includes('"preview":true');
    if (auth || loginAudit || preview) {
      await route.continue();
      return;
    }
    console.error(`Blockiert (kein Schreibzugriff): ${method} ${new URL(url).pathname}`);
    await route.abort("blockedbyclient");
  });
  page.on("download", () => abort("Ein Download wurde ausgelöst. Abbruch."));
  page.on("dialog", (dialog) => {
    void dialog.dismiss();
  });
}

async function dress(page: Page, cursor: boolean) {
  await page.addStyleTag({
    content: `
      nextjs-portal, [data-nextjs-dialog-overlay], [data-nextjs-toast], #__next-build-watcher { display: none !important; }
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
      ${
        cursor
          ? `html, body, * { cursor: none !important; }
             #pw-cursor { position: fixed; z-index: 2147483647; width: 16px; height: 16px; margin: -3px 0 0 -3px;
               border: 2px solid #000; border-radius: 50%; background: #fff; pointer-events: none; }`
          : ""
      }
    `,
  });
  await page.evaluate(
    ({ loginEmail, showCursor }) => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const texts: Text[] = [];
      while (walker.nextNode()) texts.push(walker.currentNode as Text);
      for (const node of texts) {
        if (node.nodeValue?.includes(loginEmail)) {
          node.nodeValue = node.nodeValue.replaceAll(loginEmail, "kanzlei@beispiel.at");
        }
      }
      document.querySelectorAll<HTMLElement>("li, tr, [role='button'], span, a").forEach((el) => {
        const text = el.textContent ?? "";
        if (/TESTTAG/i.test(text) && text.length < 500) el.style.setProperty("display", "none", "important");
      });
      document.querySelectorAll("a").forEach((el) => {
        if (el.textContent?.includes("Zurück zum Mandanten")) el.style.setProperty("display", "none", "important");
      });
      document.querySelectorAll("p").forEach((el) => {
        if (el.textContent?.includes("So sieht der Mandant")) {
          el.textContent =
            "Fotos oder PDFs auswählen, optional eine Kategorie und die Periode angeben, dann hochladen. Mehrere Dateien auf einmal sind möglich.";
        }
      });
      document.querySelectorAll("span, div").forEach((el) => {
        if (el.childElementCount === 0 && el.textContent?.trim() === "Vorschau") {
          el.style.setProperty("display", "none", "important");
        }
      });
      if (!showCursor) return;
      const cursor = document.getElementById("pw-cursor") ?? document.createElement("div");
      cursor.id = "pw-cursor";
      if (!cursor.isConnected) document.body.appendChild(cursor);
      if (!cursor.dataset.bound) {
        document.addEventListener(
          "mousemove",
          (event) => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
          },
          true,
        );
        cursor.dataset.bound = "1";
      }
    },
    { loginEmail: email, showCursor: cursor },
  );
}

async function settle(page: Page, cursor = false) {
  await page.waitForLoadState("networkidle", { timeout: 12000 }).catch(() => undefined);
  await page.waitForTimeout(600);
  await dress(page, cursor);
}

async function assertHealthy(page: Page, label: string) {
  const heading = (await page.locator("h1").first().textContent().catch(() => "")) ?? "";
  const title = await page.title();
  if (/application error|internal server error|this page could not be found|seite nicht gefunden/i.test(`${title}\n${heading}`)) {
    abort(`${label}: Seite zeigt einen Fehler. Keine improvisierte Aufnahme.`);
  }
}

async function point(page: Page, locator: Locator, label: string) {
  const box = await locator.boundingBox();
  const viewport = page.viewportSize();
  if (!box || !viewport) abort(`Markierung nicht messbar: ${label}`);
  const x = box.width > viewport.width * 0.45 ? box.x + Math.min(96, box.width * 0.22) : box.x + box.width / 2;
  const y = box.y + box.height / 2;
  return {
    x: Math.round((x / viewport.width) * 1000) / 10,
    y: Math.round((y / viewport.height) * 1000) / 10,
  };
}

async function saveShot(page: Page, id: string, kind: "phone" | "desk", shot: ShotNote) {
  await dress(page, false);
  const png = await page.screenshot({ type: "png", animations: "disabled" });
  const image = sharp(png);
  const meta = await image.metadata();
  await image.clone().png({ compressionLevel: 9 }).toFile(join(assetDir, `${id}.png`));
  if (kind === "phone") {
    await image.clone().webp({ quality: 70 }).toFile(join(assetDir, `${id}.webp`));
    await image.clone().avif({ quality: 48 }).toFile(join(assetDir, `${id}.avif`));
    await image.clone().resize({ width: 390 }).webp({ quality: 72 }).toFile(join(assetDir, `${id}-390.webp`));
    await image.clone().resize({ width: 390 }).avif({ quality: 50 }).toFile(join(assetDir, `${id}-390.avif`));
  } else {
    await image.clone().resize({ width: 1920 }).webp({ quality: 64 }).toFile(join(assetDir, `${id}.webp`));
    await image.clone().resize({ width: 1920 }).avif({ quality: 42 }).toFile(join(assetDir, `${id}.avif`));
    await image.clone().resize({ width: 1440 }).webp({ quality: 68 }).toFile(join(assetDir, `${id}-1440.webp`));
    await image.clone().resize({ width: 1440 }).avif({ quality: 45 }).toFile(join(assetDir, `${id}-1440.avif`));
  }
  notes[id] = shot;
  log(`${id}: ${meta.width}×${meta.height}`);
}

async function login(page: Page) {
  await page.goto(`${base}/login`, { waitUntil: "domcontentloaded" });
  await page.getByLabel("E-Mail").fill(email);
  await page.getByLabel("Passwort").fill(password);
  await page.getByRole("button", { name: "Anmelden" }).click();
  try {
    await page.waitForURL(/\/dashboard/, { timeout: 25000 });
  } catch {
    abort("Login oder Route /dashboard nicht erreicht. Abbruch, keine Aufnahmen.");
  }
  await settle(page);
  await assertHealthy(page, "Dashboard");
  log("Login erreicht, Dashboard sichtbar.");
}

async function contextFor(browser: Awaited<ReturnType<typeof chromium.launch>>, kind: "phone" | "desk", storage: string, videoDir?: string) {
  return browser.newContext({
    viewport: kind === "phone" ? { width: 390, height: 844 } : { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    isMobile: kind === "phone",
    hasTouch: kind === "phone",
    storageState: storage,
    reducedMotion: "reduce",
    recordVideo: videoDir
      ? { dir: videoDir, size: kind === "phone" ? { width: 390, height: 844 } : { width: 1440, height: 900 } }
      : undefined,
  });
}

async function mandantPath(page: Page) {
  await page.goto(`${base}/dashboard/mandanten`, { waitUntil: "domcontentloaded" });
  await settle(page);
  await assertHealthy(page, "Mandanten");
  const links = page.locator('a[href*="/dashboard/mandanten/"]');
  const count = await links.count();
  const hrefs: string[] = [];
  for (let index = 0; index < count; index += 1) {
    const href = await links.nth(index).getAttribute("href");
    const text = (await links.nth(index).innerText()).trim();
    if (!href || !/\/dashboard\/mandanten\/[^/?#]+/.test(href) || /TEST/i.test(text)) continue;
    if (!hrefs.includes(href)) hrefs.push(href);
  }
  if (hrefs.length === 0) abort("Kein Mandant unter /dashboard/mandanten gefunden. Abbruch.");
  let best = "";
  let bestScore = -1;
  for (const href of hrefs) {
    await page.goto(new URL(href, base).toString(), { waitUntil: "domcontentloaded" });
    await settle(page);
    if (!(await page.getByRole("heading", { name: "Perioden" }).count())) continue;
    const text = await page.locator("body").innerText();
    const score = (text.match(/Vollständig/g) ?? []).length * 3 + (text.match(/Unvollständig/g) ?? []).length * 2;
    if (score > bestScore) {
      best = new URL(href, base).pathname;
      bestScore = score;
    }
  }
  if (!best) abort("Kein Mandant mit Monatsübersicht gefunden. Abbruch.");
  log(`Monatsübersicht mit ${bestScore} gewichteten Perioden.`);
  return best;
}

async function hidePreviewChrome(page: Page) {
  await dress(page, false);
}

async function openPeriod(page: Page) {
  const combo = page.getByRole("combobox");
  if ((await combo.count()) < 2) abort("Periodenauswahl auf der Upload-Seite nicht gefunden. Abbruch.");
  await combo.nth(1).click();
  await page.getByRole("listbox").waitFor({ timeout: 5000 });
}

async function phoneShots(browser: Awaited<ReturnType<typeof chromium.launch>>, storage: string, mandant: string) {
  const context = await contextFor(browser, "phone", storage);
  const page = await context.newPage();
  await guard(page);
  const id = mandant.split("/").pop();
  const preview = `${base}/u/vorschau?mandant=${id}`;
  const response = await page.goto(preview, { waitUntil: "domcontentloaded" });
  if (!response || response.status() >= 400) abort(`Mandantenansicht ${preview} nicht erreichbar (${response?.status() ?? "ohne Status"}). Abbruch.`);
  await settle(page);
  await assertHealthy(page, "Mandantenansicht");
  if (!(await page.getByRole("heading", { name: /Hallo/ }).count())) {
    abort("Upload-Seite ohne Begrüßung. Abbruch, keine improvisierte Mandantenansicht.");
  }
  await hidePreviewChrome(page);
  await page.getByText("Periode", { exact: true }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  const firm = await point(page, page.locator("p").filter({ hasText: /steuer|kanzlei|berger/i }).first(), "Kanzleiname");
  const upload = await point(page, page.getByText("Foto aufnehmen"), "Foto aufnehmen");
  await saveShot(page, "mandant-upload", "phone", {
    notes: ["Upload-Seite im Handyformat", "Kanzleiname über der Begrüßung", "Foto aufnehmen und Periode sichtbar"],
    marks: [
      { n: 1, ...firm },
      { n: 2, ...upload },
    ],
  });
  await openPeriod(page);
  await page.waitForTimeout(400);
  const list = await point(page, page.getByRole("listbox"), "Periodenliste");
  const choose = await point(page, page.getByText("Dateien auswählen"), "Dateien auswählen");
  await saveShot(page, "mandant-zeitraum", "phone", {
    notes: ["Geöffnete Periodenauswahl", "Monate zum Zuordnen des Belegs", "Datei oder Foto bleibt darüber sichtbar"],
    marks: [
      { n: 1, ...choose },
      { n: 2, ...list },
    ],
  });
  await page.keyboard.press("Escape");
  await context.close();
  log("Mandantenansicht über /u/vorschau?mandant=… (Vorschau braucht eine Anmeldung und eine Mandanten-ID).");
}

async function firmShots(browser: Awaited<ReturnType<typeof chromium.launch>>, storage: string, mandant: string) {
  const context = await contextFor(browser, "desk", storage);
  const page = await context.newPage();
  await guard(page);
  await page.goto(`${base}/dashboard`, { waitUntil: "domcontentloaded" });
  await settle(page);
  await assertHealthy(page, "Belegliste");
  let rows = page.locator("[role='button']").filter({ hasText: /\.(pdf|png|jpe?g|webp)/i });
  if ((await rows.count()) < 2) {
    await page.getByRole("combobox").first().click();
    await page.getByRole("option", { name: "Alle", exact: true }).click();
    await page.waitForTimeout(400);
    await dress(page, false);
    rows = page.locator("[role='button']").filter({ hasText: /\.(pdf|png|jpe?g|webp)/i });
    log("Statusfilter lokal auf Alle gestellt, damit die Liste nicht leer ist.");
  }
  if ((await rows.count()) < 1) abort("Belegliste ohne Einträge. Abbruch.");
  const list = await point(page, rows.first(), "Belegliste");
  const filter = await point(page, page.getByRole("combobox").first(), "Statusfilter");
  await saveShot(page, "kanzlei-belege", "desk", {
    notes: ["Belegliste mit Suche und Statusfilter", "Mehrere Belege in einer Liste", "Auswahlkästchen vor jedem Beleg"],
    marks: [
      { n: 1, ...list },
      { n: 2, ...filter },
    ],
  });

  const imageRow = page.locator("[role='button']").filter({ hasText: /\.png/i }).first();
  await (await imageRow.count() ? imageRow : rows.first()).click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor({ timeout: 8000 });
  await page.waitForFunction(() => {
    const img = document.querySelector("[role='dialog'] img");
    return img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0;
  }, { timeout: 10000 }).catch(() => undefined);
  await page.waitForTimeout(300);
  await dress(page, false);
  const date = await point(page, dialog.locator("#beleg-datum"), "Datum");
  const direction = await point(page, dialog.getByText("Richtung", { exact: true }), "Richtung");
  const status = await point(page, dialog.getByText("Status", { exact: true }), "Status");
  await saveShot(page, "kanzlei-beleg-detail", "desk", {
    notes: ["Geöffneter Belegdialog", "Datum, Richtung und Status ohne Änderung", "Dialog danach geschlossen"],
    marks: [
      { n: 1, ...date },
      { n: 2, ...direction },
      { n: 3, ...status },
    ],
  });
  await dialog.getByRole("button", { name: "Schließen" }).last().click();
  await dialog.waitFor({ state: "hidden", timeout: 5000 });

  await page.goto(`${base}${mandant}`, { waitUntil: "domcontentloaded" });
  await settle(page);
  await assertHealthy(page, "Mandant");
  const periods = page.getByRole("heading", { name: "Perioden" });
  await periods.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await dress(page, false);
  const overview = await point(
    page,
    page.getByText(/Unvollständig|Vollständig/).first(),
    "Periodenstatus",
  );
  await saveShot(page, "kanzlei-mandant", "desk", {
    notes: ["Mandantenakte mit Stammdaten", "Monatsübersicht unter Perioden", "Fehlende und vorhandene Unterlagen nebeneinander"],
    marks: [{ n: 1, ...overview }],
  });

  await page.getByRole("button", { name: "Exportieren" }).first().click();
  await dialog.waitFor({ timeout: 8000 });
  await page.getByText(/exportiert|gezählt/).first().waitFor({ timeout: 8000 }).catch(() => undefined);
  const statusCombo = dialog.getByRole("combobox").nth(2);
  await statusCombo.click();
  await page.getByRole("option", { name: "Alle", exact: true }).click();
  const counted = () =>
    page.waitForFunction(() => {
      const text = document.querySelector("[role='dialog']")?.textContent ?? "";
      return /[1-9]\d* Belege werden exportiert|1 Beleg wird exportiert/.test(text);
    }, { timeout: 8000 }).then(() => true).catch(() => false);
  if (!(await counted())) {
    await dialog.getByRole("combobox").nth(1).click();
    const september = page.getByRole("option", { name: /September|August/ });
    if (await september.count()) await september.first().click();
    else await page.keyboard.press("Escape");
  }
  if (!(await counted())) {
    await dialog.getByRole("combobox").first().click();
    const year = page.getByRole("option", { name: "Wirtschaftsjahr" });
    if (await year.count()) await year.click();
    else await page.keyboard.press("Escape");
    await counted();
  }
  await dress(page, false);
  const title = await point(page, dialog.getByRole("heading", { name: "Belege exportieren" }), "Exporttitel");
  const format = await point(page, dialog.getByText("Format", { exact: true }), "Format");
  await saveShot(page, "kanzlei-export", "desk", {
    notes: ["Export-Dialog ohne Download", "Formate ZIP, CSV, BMD und RZL", "Mit Abbrechen geschlossen"],
    marks: [
      { n: 1, ...title },
      { n: 2, ...format },
    ],
  });
  await dialog.getByRole("button", { name: "Abbrechen" }).click();
  await dialog.waitFor({ state: "hidden", timeout: 5000 });

  await page.goto(`${base}/dashboard/audit?aktion=UPLOAD`, { waitUntil: "domcontentloaded" });
  await settle(page);
  await assertHealthy(page, "Protokoll");
  if (await page.getByText("Keine Treffer").count() || await page.getByText("Noch keine").count()) {
    await page.goto(`${base}/dashboard/audit?aktion=DOCUMENT_EDIT`, { waitUntil: "domcontentloaded" });
    await settle(page);
  }
  if (await page.getByText("Keine Treffer").count() || await page.getByText("Noch keine").count()) {
    await page.goto(`${base}/dashboard/audit`, { waitUntil: "domcontentloaded" });
    await settle(page);
    log("Protokollfilter ohne Einträge, ungefilterte Ansicht verwendet.");
  }
  const audit = await point(page, page.locator("li, tr, article").filter({ hasText: /Kanzlei|Mandant|Beleg/ }).first(), "Protokolleintrag");
  await saveShot(page, "kanzlei-protokoll", "desk", {
    notes: ["Protokoll der Änderungen", "Zeitpunkt und Person am Eintrag", "Keine Änderung ausgelöst"],
    marks: [{ n: 1, ...audit }],
  });

  await page.goto(`${base}/dashboard/benutzer`, { waitUntil: "domcontentloaded" });
  await settle(page);
  await assertHealthy(page, "Benutzer");
  if (await page.getByText("Noch keine Mitarbeiter").count()) abort("Benutzerseite ist leer. Abbruch.");
  const users = await point(page, page.getByText("Admin", { exact: true }).first(), "Mitarbeiter");
  await saveShot(page, "kanzlei-benutzer", "desk", {
    notes: ["Benutzerverwaltung des Kanzleiteams", "Rolle und zugewiesene Mandanten", "Keine Benutzer angelegt oder geändert"],
    marks: [{ n: 1, ...users }],
  });
  await context.close();
}

async function pause(page: Page, ms = 1200) {
  await page.waitForTimeout(ms);
}

async function glide(page: Page, x: number, y: number) {
  await page.mouse.move(x, y, { steps: 18 });
  await pause(page, 250);
}

function run(command: string, args: string[]) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "ignore", "inherit"] });
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${command} beendet mit ${code}`))));
  });
}

async function underLimit(file: string) {
  const info = await stat(file);
  return info.size < 3 * 1024 * 1024;
}

async function convertVideo(source: string, name: string) {
  const mp4 = join(publicDir, `${name}.mp4`);
  const webm = join(publicDir, `${name}.webm`);
  const jpg = join(publicDir, `${name}.jpg`);
  let crf = 30;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    await run(ffmpegBin, ["-y", "-i", source, "-an", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", String(crf), "-movflags", "+faststart", mp4]);
    if (await underLimit(mp4)) break;
    crf += 4;
  }
  crf = 40;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    await run(ffmpegBin, ["-y", "-i", source, "-an", "-c:v", "libvpx-vp9", "-crf", String(crf), "-b:v", "0", webm]);
    if (await underLimit(webm)) break;
    crf += 6;
  }
  if (!(await underLimit(mp4)) || !(await underLimit(webm))) abort(`${name} bleibt über 3 MB.`);
  await run(ffmpegBin, ["-y", "-ss", "2.5", "-i", source, "-frames:v", "1", "-update", "1", "-q:v", "3", jpg]);
  const jpgInfo = await stat(jpg);
  if (jpgInfo.size > 300 * 1024) {
    await sharp(jpg).jpeg({ quality: 60 }).toFile(`${jpg}.tmp`);
    await rename(`${jpg}.tmp`, jpg);
  }
  log(`${name}: Video und Poster geschrieben.`);
}

async function record(browser: Awaited<ReturnType<typeof chromium.launch>>, storage: string, kind: "phone" | "desk", name: string, play: (page: Page) => Promise<void>) {
  const dir = join(tmpdir(), `portal-${name}`);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  const context = await contextFor(browser, kind, storage, dir);
  const page = await context.newPage();
  await guard(page);
  await play(page);
  const video = page.video();
  await context.close();
  const source = await video?.path();
  if (!source) abort(`Keine Videoaufnahme für ${name}.`);
  await convertVideo(source, name);
  await rm(dir, { recursive: true, force: true });
}

async function phoneVideo(page: Page, mandant: string) {
  const id = mandant.split("/").pop();
  await page.goto(`${base}/u/vorschau?mandant=${id}`, { waitUntil: "domcontentloaded" });
  await settle(page, true);
  await assertHealthy(page, "Video Mandant");
  await glide(page, 180, 420);
  await pause(page, 1200);
  for (let step = 0; step < 3; step += 1) {
    await page.mouse.wheel(0, 120);
    await pause(page, 700);
  }
  await page.mouse.wheel(0, -80);
  await pause(page, 800);
  await openPeriod(page);
  await glide(page, 200, 560);
  await pause(page, 1400);
  await page.keyboard.press("Escape");
  await pause(page, 1000);
}

async function firmVideo(page: Page, mandant: string) {
  await page.goto(`${base}/dashboard`, { waitUntil: "domcontentloaded" });
  await settle(page, true);
  await glide(page, 720, 420);
  await pause(page, 1200);
  const filter = page.getByRole("combobox").first();
  const filterBox = await filter.boundingBox();
  if (filterBox) await glide(page, filterBox.x + 40, filterBox.y + 16);
  await filter.click();
  await page.getByRole("listbox").waitFor({ timeout: 5000 });
  await pause(page, 1300);
  await page.keyboard.press("Escape");
  await pause(page, 1000);
  const row = page.locator("[role='button']").filter({ hasText: /\.(pdf|png|jpe?g|webp)/i }).first();
  const rowBox = await row.boundingBox();
  if (rowBox) await glide(page, rowBox.x + 180, rowBox.y + 24);
  await row.click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor({ timeout: 8000 });
  await page.waitForFunction(() => {
    const img = document.querySelector("[role='dialog'] img");
    return img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0;
  }, { timeout: 8000 }).catch(() => undefined);
  await pause(page, 1400);
  await dialog.getByRole("button", { name: "Schließen" }).last().click();
  await dialog.waitFor({ state: "hidden" });
  await pause(page, 1000);
  await page.goto(`${base}${mandant}`, { waitUntil: "domcontentloaded" });
  await settle(page, true);
  await glide(page, 700, 400);
  await pause(page, 800);
  for (let step = 0; step < 4; step += 1) {
    const box = await page.getByRole("heading", { name: "Perioden" }).boundingBox();
    if (box && box.y > 80 && box.y < 640) break;
    await page.mouse.wheel(0, 160);
    await pause(page, 500);
  }
  await pause(page, 1200);
  const exportButton = page.getByRole("button", { name: "Exportieren" }).first();
  const exportBox = await exportButton.boundingBox();
  if (exportBox) await glide(page, exportBox.x + 30, exportBox.y + 16);
  await exportButton.click();
  await dialog.waitFor({ timeout: 8000 });
  await pause(page, 700);
  await dialog.getByRole("combobox").nth(2).click();
  await pause(page, 500);
  await page.getByRole("option", { name: "Alle", exact: true }).click();
  await pause(page, 900);
  if (/liefert nichts|0 Belege/.test(await dialog.innerText())) {
    const range = dialog.getByRole("combobox").first();
    const rangeBox = await range.boundingBox();
    if (rangeBox) await glide(page, rangeBox.x + 40, rangeBox.y + 12);
    await range.click();
    await pause(page, 500);
    await page.getByRole("option", { name: "Wirtschaftsjahr" }).click();
    await pause(page, 1100);
  }
  await dialog.getByRole("button", { name: "Abbrechen" }).click();
  await pause(page, 800);
}

async function main() {
  await mkdir(assetDir, { recursive: true });
  await mkdir(publicDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const storage = join(tmpdir(), `portal-session-${Date.now()}.json`);
  try {
    const setup = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await setup.newPage();
    await guard(page);
    await login(page);
    const mandant = await mandantPath(page);
    log(`Mandant für Übersicht: ${mandant}`);
    await setup.storageState({ path: storage });
    await setup.close();

    await phoneShots(browser, storage, mandant);
    await firmShots(browser, storage, mandant);
    await writeFile(join(assetDir, "beschreibung.json"), `${JSON.stringify(notes, null, 2)}\n`);
    await record(browser, storage, "phone", "mandant-ablauf", (videoPage) => phoneVideo(videoPage, mandant));
    await record(browser, storage, "desk", "kanzlei-ablauf", (videoPage) => firmVideo(videoPage, mandant));
    log("Aufnahmen abgeschlossen.");
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  } finally {
    await rm(storage, { force: true });
    await browser.close();
  }
}

await main();
