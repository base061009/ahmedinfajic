import type { Lang } from "./site";

export type PortalFeature = {
  title: string;
  text: string;
};

export type PortalGroup = {
  title: string;
  items: PortalFeature[];
};

export type PortalCopy = {
  meta: { title: string; description: string };
  schemaName: string;
  ogAlt: string;
  back: string;
  heroTitle: string;
  heroSub: string;
  primary: string;
  secondary: string;
  overview: string;
  basisLabel: string;
  groups: PortalGroup[];
  basisNote: string;
  play: string;
  pause: string;
  firmVideoLabel: string;
};

export const portalCopy = {
  de: {
    meta: {
      title: "Mandantenportal für Steuerberater | Ahmedin Fajic",
      description:
        "Individuelles Mandantenportal für Ihre Kanzlei: Mandanten laden Belege per Handy hoch, die Kanzlei prüft, ordnet und exportiert sie im Web, etwa für BMD oder RZL.",
    },
    schemaName: "Mandantenportal für Steuerberatungskanzleien",
    ogAlt: "Mandantenportal für Steuerberatungskanzleien",
    back: "Zurück",
    heroTitle: "Mandantenportal für Steuerberatungskanzleien",
    heroSub:
      "Belege kommen geordnet an statt verstreut über E-Mail, WhatsApp und Papierstapel. Individuell für Ihre Kanzlei entwickelt.",
    primary: "Erstgespräch vereinbaren",
    secondary: "Demo ansehen",
    overview: "Übersicht",
    basisLabel: "Basis",
    groups: [
      {
        title: "Mandanten",
        items: [
          { title: "Ohne App", text: "Ein persönlicher Link. Kein Passwort." },
          { title: "Foto oder PDF", text: "Ein Beleg oder mehrere Dateien auf einmal." },
          { title: "Der richtige Monat", text: "Jeder Beleg gehört zu einer Periode." },
        ],
      },
      {
        title: "Kanzlei",
        items: [
          { title: "Eine Liste", text: "Suche und Status, statt E-Mail und Papier." },
          { title: "Beleg prüfen", text: "Datum, Richtung und Status auf einen Blick." },
          { title: "Die Akte", text: "Stammdaten und jeder Monat auf einer Seite." },
          { title: "Export", text: "ZIP, CSV, BMD oder RZL." },
          { title: "Das Team", text: "Rolle und zugewiesene Mandanten." },
          { title: "Das Protokoll", text: "Jede Änderung bleibt nachvollziehbar." },
        ],
      },
    ],
    basisNote:
      "Verschlüsselte Übertragung, Hosting in der EU, auf die DSGVO ausgerichtet. Jede Kanzlei erhält ein eigenes Portal.",
    play: "Abspielen",
    pause: "Pause",
    firmVideoLabel: "Kurzer Ablauf der Kanzleiansicht",
  },
  en: {
    meta: {
      title: "Client Portal for Tax Advisors | Ahmedin Fajic",
      description:
        "A custom client portal for your firm: clients upload receipts from their phone, your firm reviews, sorts and exports them in the browser, e.g. for BMD or RZL.",
    },
    schemaName: "Client portal for tax advisory firms",
    ogAlt: "Client portal for tax advisory firms",
    back: "Back",
    heroTitle: "Client portal for tax advisory firms",
    heroSub:
      "Receipts arrive in order, instead of being scattered across email, WhatsApp and piles of paper. Built individually for your firm.",
    primary: "Book initial consultation",
    secondary: "View the demo",
    overview: "Overview",
    basisLabel: "Base",
    groups: [
      {
        title: "Clients",
        items: [
          { title: "No app", text: "A personal link. No password." },
          { title: "Photo or PDF", text: "One receipt, or several files at once." },
          { title: "The right month", text: "Every receipt belongs to a period." },
        ],
      },
      {
        title: "Firm",
        items: [
          { title: "One list", text: "Search and status, instead of email and paper." },
          { title: "Review a receipt", text: "Date, direction and status at a glance." },
          { title: "The client file", text: "Master data and every month on one page." },
          { title: "Export", text: "ZIP, CSV, BMD or RZL." },
          { title: "The team", text: "A role and assigned clients." },
          { title: "The log", text: "Every change stays traceable." },
        ],
      },
    ],
    basisNote:
      "Encrypted transfer, hosting in the EU, set up with the GDPR in mind. Each firm receives its own portal.",
    play: "Play",
    pause: "Pause",
    firmVideoLabel: "Short walkthrough of the firm view",
  },
  bs: {
    meta: {
      title: "Portal za klijente poreskih savjetnika | Ahmedin Fajić",
      description:
        "Portal po mjeri za vašu kancelariju: klijenti šalju račune s mobitela, kancelarija ih pregleda, sortira i izvozi u pregledniku, npr. za BMD ili RZL.",
    },
    schemaName: "Portal za klijente poreskih savjetnika",
    ogAlt: "Portal za klijente poreskih savjetnika",
    back: "Nazad",
    heroTitle: "Portal za klijente poreskih savjetnika",
    heroSub:
      "Računi stižu sređeni, umjesto da se gube po e-mailu, WhatsAppu i hrpama papira. Razvijen posebno za vašu kancelariju.",
    primary: "Zakažite uvodni razgovor",
    secondary: "Pogledajte demo",
    overview: "Pregled",
    basisLabel: "Osnova",
    groups: [
      {
        title: "Klijenti",
        items: [
          { title: "Bez aplikacije", text: "Lični link. Bez lozinke." },
          { title: "Fotografija ili PDF", text: "Jedan račun ili više datoteka odjednom." },
          { title: "Prava perioda", text: "Svaki račun pripada jednom mjesecu." },
        ],
      },
      {
        title: "Kancelarija",
        items: [
          { title: "Jedna lista", text: "Pretraga i status, umjesto e-maila i papira." },
          { title: "Pregled računa", text: "Datum, smjer i status na jednom mjestu." },
          { title: "Dosije", text: "Osnovni podaci i svaki mjesec na jednoj stranici." },
          { title: "Izvoz", text: "ZIP, CSV, BMD ili RZL." },
          { title: "Tim", text: "Uloga i dodijeljeni klijenti." },
          { title: "Protokol", text: "Svaka izmjena ostaje vidljiva." },
        ],
      },
    ],
    basisNote:
      "Šifrovan prenos, hosting u EU, usklađeno s GDPR-om. Svaka kancelarija dobija sopstveni portal.",
    play: "Pokreni",
    pause: "Pauza",
    firmVideoLabel: "Kratak tok prikaza za kancelariju",
  },
} satisfies Record<Lang, PortalCopy>;
