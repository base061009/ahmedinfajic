import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const latin = readFileSync(
  join(root, "node_modules/@fontsource/cardo/files/cardo-latin-400-normal.woff"),
);
const latinExt = readFileSync(
  join(root, "node_modules/@fontsource/cardo/files/cardo-latin-ext-400-normal.woff"),
);

const fonts = [
  { name: "Cardo", data: latin, weight: 400, style: "normal" },
  { name: "Cardo", data: latinExt, weight: 400, style: "normal" },
];

const cards = [
  {
    file: "og-de.jpg",
    title: "Software-Entwicklung für Unternehmen und Organisationen",
    width: 470,
    size: 46,
  },
  {
    file: "og-en.jpg",
    title: "Software development for businesses and organisations",
    width: 470,
    size: 46,
  },
  {
    file: "og-bs.jpg",
    title: "Razvoj softvera za preduzeća i organizacije",
    width: 470,
    size: 46,
  },
  {
    file: "og-portal-de.jpg",
    title: "Mandantenportal für Steuerberatungskanzleien",
    width: 760,
    size: 42,
  },
  {
    file: "og-portal-en.jpg",
    title: "Client portal for tax advisory firms",
    width: 760,
    size: 42,
  },
  {
    file: "og-portal-bs.jpg",
    title: "Portal za klijente poreskih savjetnika",
    width: 760,
    size: 42,
  },
];

for (const card of cards) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          background: "#fffefc",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Cardo",
          position: "relative",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                width: `${card.width}px`,
                justifyContent: "center",
                textAlign: "center",
                fontSize: `${card.size}px`,
                lineHeight: 1.18,
                letterSpacing: "-0.8px",
              },
              children: card.title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "80px",
                left: "365px",
                width: "470px",
                display: "flex",
                justifyContent: "center",
                fontSize: "22px",
                lineHeight: 1,
                letterSpacing: "-0.2px",
              },
              children: "ahmedinfajic.com",
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts },
  );

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(root, "public", card.file));
}

const portrait = join(root, "public/portrait.png");
await sharp(portrait).webp({ quality: 80 }).toFile(join(root, "public/portrait.webp"));
await sharp(portrait).avif({ quality: 45 }).toFile(join(root, "public/portrait.avif"));

for (const width of [216, 324]) {
  const resized = sharp(portrait).resize({ width, withoutEnlargement: true });
  await resized.clone().webp({ quality: 80 }).toFile(join(root, "public", `portrait-${width}.webp`));
  await resized.clone().avif({ quality: 45 }).toFile(join(root, "public", `portrait-${width}.avif`));
}
