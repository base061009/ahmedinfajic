import type { Lang } from "./site";

export type PrivacySection = {
  title: string;
  body: string;
  appendEmail?: boolean;
  link?: { href: string; label: string };
  after?: string;
};

export type Copy = {
  meta: Record<"home" | "cv" | "impressum" | "datenschutz", { title: string; description: string }>;
  ogAlt: string;
  name: string;
  jobTitle: string;
  skip: string;
  navLabel: string;
  language: string;
  languageChoose: string;
  menu: string;
  closeMenu: string;
  newTab: string;
  legalNav: string;
  imprint: string;
  privacy: string;
  nav: { services: string; about: string; contact: string };
  hero: { eyebrow: string; title: string; sub: string; primary: string; secondary: string };
  trustYears: string;
  trustYearsLabel: string;
  trustBefore: string;
  trustNameA: string;
  trustMid: string;
  trustNameB: string;
  servicesTitle: string;
  services: { title: string; text: string }[];
  situationTitle: string;
  situation: string;
  aboutTitle: string;
  about: string;
  aboutCv: string;
  aboutPortraitAlt: string;
  contactTitle: string;
  contactButton: string;
  contactNote: string;
  mail: string;
  phone: string;
  phoneScan: string;
  cv: {
    eyebrow: string;
    experience: string;
    education: string;
    languagesTitle: string;
    languagesText: string;
    portraitAlt: string;
    entries: { years: string; place: string; note: string }[];
    facts: { label: string; text: string; years?: string }[];
  };
  imp: {
    name: string;
    address: string;
    addressText: string;
    email: string;
    purpose: string;
    purposeText: string;
    authority: string;
    authorityText: string;
    law: string;
    lawText: string;
    member: string;
    memberText: string;
    gisa: string;
    gisaText: string;
  };
  privacySections: PrivacySection[];
};

const authority =
  "Magistrat der Stadt Wien, Magistratisches Bezirksamt für den 2./20. Bezirk";

const dsb = { href: "https://www.dsb.gv.at", label: "www.dsb.gv.at" };

export const copy = {
  de: {
    meta: {
      home: {
        title: "Software-Entwicklung für Unternehmen | Ahmedin Fajic",
        description:
          "Digitalisierung von Arbeitsabläufen, Webdesign und Entwicklung auf Stundenbasis für Unternehmen und Organisationen. Mit Erfahrung aus Projekten für Siemens und den öffentlichen Sektor.",
      },
      cv: {
        title: "Lebenslauf | Ahmedin Fajic",
        description:
          "Lebenslauf von Ahmedin Fajic. Softwareentwicklung, unter anderem bei Siemens und beim Bundesrechenzentrum.",
      },
      impressum: {
        title: "Impressum | Ahmedin Fajic",
        description:
          "Impressum von Ahmedin Fajic, Softwareentwicklung in Wien. Anschrift, Kontakt und gesetzliche Angaben.",
      },
      datenschutz: {
        title: "Datenschutz | Ahmedin Fajic",
        description:
          "Datenschutzhinweise für ahmedinfajic.com. Keine Cookies, kein Tracking. Schriftarten werden selbst bereitgestellt.",
      },
    },
    ogAlt: "Software-Entwicklung für Unternehmen und Organisationen",
    name: "Ahmedin Fajic",
    jobTitle: "Softwareentwickler",
    skip: "Zum Inhalt",
    navLabel: "Navigation",
    language: "Sprache",
    languageChoose: "Sprache wählen",
    menu: "menü",
    closeMenu: "Schließen",
    newTab: "öffnet in neuem Tab",
    legalNav: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    nav: {
      services: "leistungen",
      about: "über",
      contact: "kontakt",
    },
    hero: {
      eyebrow: "Software-Entwicklung",
      title: "Software für die Verwaltung Ihrer Arbeitsprozesse",
      sub: "Individuell entwickelte Software, die Ihre Abläufe digital abbildet und an einem Ort zusammenführt. Mit Erfahrung aus Großprojekten für internationale Konzerne und den öffentlichen Sektor.",
      primary: "Erstgespräch vereinbaren",
      secondary: "Leistungen ansehen",
    },
    trustYears: "6+",
    trustYearsLabel: "Jahre Erfahrung",
    trustBefore: "Erfahrung bei Projekten für ",
    trustNameA: "Siemens",
    trustMid: " und das ",
    trustNameB: "Bundesrechenzentrum",
    servicesTitle: "Leistungen",
    services: [
      {
        title: "Digitalisierung von Arbeitsabläufen",
        text: "Abläufe, die heute über Excel-Listen, Papierformulare und E-Mails laufen, werden in einer durchgängigen Anwendung zusammengeführt, abgestimmt auf Ihre Arbeitsweise.",
      },
      {
        title: "Webdesign",
        text: "Klare, schnelle Websites, die Vertrauen schaffen und auf jedem Gerät funktionieren. Auf Wunsch landen Anfragen und Buchungen direkt in Ihren bestehenden Systemen.",
      },
      {
        title: "Entwicklung auf Stundenbasis",
        text: "Zusätzliche Entwicklerkapazität für Agenturen und Unternehmen, abgerechnet nach tatsächlichem Aufwand. Teamverstärkung ohne Neueinstellung und ohne lange Bindung.",
      },
    ],
    situationTitle: "Warum individuelle Software",
    situation:
      "Standardlösungen verlangen, dass Sie Ihre Abläufe anpassen. Individuelle Software folgt Ihren Prozessen, statt umgekehrt. Der aktuelle Stand liegt an einem Ort, ohne doppelte Eingaben. Jedes Projekt beginnt mit einem unverbindlichen Gespräch. Abgerechnet wird je nach Vorhaben zum Fixpreis oder nach Aufwand.",
    aboutTitle: "Über mich",
    about:
      "Ich bin Softwareentwickler mit über sechs Jahren Erfahrung in Großprojekten, unter anderem für Siemens und das Bundesrechenzentrum. Die Selbstständigkeit besteht seit 2026. Jedes Projekt wird direkt von mir betreut, ohne Umweg über Vertrieb oder Projektmanagement.",
    aboutCv: "Lebenslauf ansehen",
    aboutPortraitAlt: "Ahmedin Fajic",
    contactTitle: "Unverbindliches Erstgespräch vereinbaren",
    contactButton: "Termin anfragen",
    contactNote:
      "Antwort innerhalb von 24 Stunden. Zusammenarbeit ortsunabhängig, persönlich oder remote.",
    mail: "E-Mail",
    phone: "Telefon",
    phoneScan: "Scannen zum Anrufen",
    cv: {
      eyebrow: "Lebenslauf",
      experience: "Werdegang",
      education: "Ausbildung",
      languagesTitle: "Sprachen",
      languagesText: "Deutsch, Bosnisch, Englisch",
      portraitAlt: "Schwarzweißes Porträt von Ahmedin Fajic",
      entries: [
        { years: "2026–heute", place: "Selbstständig", note: "Softwareentwicklung für Unternehmen und Organisationen." },
        {
          years: "2025–heute",
          place: "Siemens",
          note: "Entwicklung modularer Software für Gridscale X, Teil der Siemens-Xcelerator-Plattform für autonomes Netzmanagement.",
        },
        {
          years: "2024",
          place: "Bundesrechenzentrum",
          note: "Projektbasierte Weiterentwicklung einer Verwaltungssoftware für das österreichische Sozialministerium.",
        },
        {
          years: "2022–2024",
          place: "IBB Adaptive Solutions",
          note: "Entwicklung von ERP- und CRM-Systemen für das Konditionsmanagement.",
        },
        {
          years: "2020–2022",
          place: "Focus Market Research",
          note: "Entwicklung von Software zur Datenerfassung und Umbau einer monolithischen Anwendung in mehrere Microservices.",
        },
      ],
      facts: [
        {
          label: "Studium",
          text: "Bachelor of Science in Engineering, FH Campus Wien,",
          years: "2019–2023",
        },
      ],
    },
    imp: {
      name: "Name",
      address: "Anschrift",
      addressText: "Lorenz-Müller-Gasse 2/4/24, 1200 Wien, Österreich",
      email: "E-Mail",
      purpose: "Unternehmensgegenstand",
      purposeText:
        "Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik",
      authority: "Gewerbebehörde",
      authorityText: authority,
      law: "Anzuwendende Rechtsvorschriften",
      lawText: "Gewerbeordnung:",
      member: "Mitgliedschaft",
      memberText: "Wirtschaftskammer Wien",
      gisa: "GISA-Zahl",
      gisaText: "39944122",
    },
    privacySections: [
      {
        title: "Verantwortlicher",
        body: "Ahmedin Fajić, Lorenz-Müller-Gasse 2/4/24, 1200 Wien, Österreich.",
        appendEmail: true,
      },
      {
        title: "Hosting",
        body: "Diese Website wird bei Netlify Inc. (USA) gehostet. Beim Aufruf der Seite können Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit, angeforderte Datei, Browserinformationen) in Server-Logfiles verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb). Die Übermittlung in die USA erfolgt auf Basis des EU-US Data Privacy Framework.",
      },
      {
        title: "Cookies und Tracking",
        body: "Auf dieser Website werden keine Cookies gesetzt und keine Analyse- oder Tracking-Tools eingesetzt.",
      },
      {
        title: "Kontaktaufnahme",
        body: "Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden die übermittelten Daten nur zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. lit. f DSGVO.",
      },
      {
        title: "Schriftarten und externe Links",
        body: "Die Schriftarten werden auf dieser Website selbst bereitgestellt. Es besteht keine Verbindung zu Google Fonts oder anderen Schriftanbietern. Links zu LinkedIn führen zu Angeboten der LinkedIn Ireland Unlimited Company; dort gilt deren Datenschutzerklärung.",
      },
      {
        title: "Ihre Rechte",
        body: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch, soweit die gesetzlichen Voraussetzungen vorliegen. Außerdem können Sie sich bei der Österreichischen Datenschutzbehörde beschweren (",
        link: dsb,
        after: ").",
      },
    ],
  },
  en: {
    meta: {
      home: {
        title: "Software Development for Businesses | Ahmedin Fajic",
        description:
          "Workflow digitisation, web design and hourly development for businesses and organisations. Built with experience from projects for Siemens and the public sector.",
      },
      cv: {
        title: "CV | Ahmedin Fajic",
        description:
          "CV of Ahmedin Fajic. Software development, including work at Siemens and at the Bundesrechenzentrum.",
      },
      impressum: {
        title: "Imprint | Ahmedin Fajic",
        description:
          "Legal notice for Ahmedin Fajic, software development in Vienna. Address, contact and statutory details.",
      },
      datenschutz: {
        title: "Privacy | Ahmedin Fajic",
        description:
          "Privacy notice for ahmedinfajic.com. No cookies and no tracking. Fonts are self-hosted.",
      },
    },
    ogAlt: "Software development for businesses and organisations",
    name: "Ahmedin Fajic",
    jobTitle: "Software developer",
    skip: "Skip to content",
    navLabel: "Navigation",
    language: "Language",
    languageChoose: "Choose language",
    menu: "menu",
    closeMenu: "Close",
    newTab: "opens in a new tab",
    legalNav: "Legal",
    imprint: "Imprint",
    privacy: "Privacy",
    nav: {
      services: "services",
      about: "about me",
      contact: "contact",
    },
    hero: {
      eyebrow: "Software development",
      title: "Software for managing your work processes",
      sub: "Custom-built software that maps your processes digitally and brings them together in one place. With experience from large projects for international corporations and the public sector.",
      primary: "Book initial consultation",
      secondary: "View services",
    },
    trustYears: "6+",
    trustYearsLabel: "years of experience",
    trustBefore: "Experience on projects for ",
    trustNameA: "Siemens",
    trustMid: " and the ",
    trustNameB: "Bundesrechenzentrum",
    servicesTitle: "Services",
    services: [
      {
        title: "Digitising workflows",
        text: "Processes that currently run through spreadsheets, paper forms and email are brought together in one continuous application, aligned with the way you work.",
      },
      {
        title: "Web design",
        text: "Clear, fast websites that build trust and work on every device. If needed, enquiries and bookings go straight into your existing systems.",
      },
      {
        title: "Hourly development",
        text: "Additional developer capacity for agencies and companies, billed by actual effort. Extra hands for your team without hiring or long commitments.",
      },
    ],
    situationTitle: "Why custom software",
    situation:
      "Off-the-shelf products ask you to adapt your processes. Custom software follows the way you work. The current status sits in one place, without entering the same data twice. Every project starts with a no-obligation conversation. Depending on the project, billing is fixed-price or by effort.",
    aboutTitle: "About me",
    about:
      "I am a software developer with more than six years of experience on large projects, including for Siemens and the Bundesrechenzentrum. Self-employment has been in place since 2026. Each project is handled directly by me, without a detour through sales or project management.",
    aboutCv: "View CV",
    aboutPortraitAlt: "Ahmedin Fajic",
    contactTitle: "Book a free initial consultation",
    contactButton: "Request an appointment",
    contactNote: "Reply within 24 hours. Working with clients anywhere, in person or remotely.",
    mail: "Email",
    phone: "Phone",
    phoneScan: "Scan to call",
    cv: {
      eyebrow: "CV",
      experience: "Experience",
      education: "Education",
      languagesTitle: "Languages",
      languagesText: "German, Bosnian, English",
      portraitAlt: "Black-and-white portrait of Ahmedin Fajic",
      entries: [
        { years: "2026–present", place: "Self-employed", note: "Software development for businesses and organisations." },
        {
          years: "2025–present",
          place: "Siemens",
          note: "Development of modular software for Gridscale X, part of the Siemens Xcelerator platform for autonomous grid management.",
        },
        {
          years: "2024",
          place: "Bundesrechenzentrum",
          note: "Project-based further development of administrative software for the Austrian Ministry of Social Affairs.",
        },
        {
          years: "2022–2024",
          place: "IBB Adaptive Solutions",
          note: "Development of ERP and CRM systems for managing commercial terms.",
        },
        {
          years: "2020–2022",
          place: "Focus Market Research",
          note: "Development of data-collection software, and the split of a monolithic application into several microservices.",
        },
      ],
      facts: [
        {
          label: "Degree",
          text: "Bachelor of Science in Engineering, FH Campus Wien,",
          years: "2019–2023",
        },
      ],
    },
    imp: {
      name: "Name",
      address: "Address",
      addressText: "Lorenz-Müller-Gasse 2/4/24, 1200 Vienna, Austria",
      email: "Email",
      purpose: "Business purpose",
      purposeText: "Services in automatic data processing and information technology",
      authority: "Trade authority",
      authorityText: authority,
      law: "Applicable regulations",
      lawText: "Trade regulation:",
      member: "Membership",
      memberText: "Wirtschaftskammer Wien",
      gisa: "GISA number",
      gisaText: "39944122",
    },
    privacySections: [
      {
        title: "Controller",
        body: "Ahmedin Fajić, Lorenz-Müller-Gasse 2/4/24, 1200 Vienna, Austria.",
        appendEmail: true,
      },
      {
        title: "Hosting",
        body: "This website is hosted by Netlify Inc. (USA). When the site is visited, access data (for example IP address, date and time, requested file and browser information) may be processed in server log files. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation). Transfers to the USA are based on the EU-US Data Privacy Framework.",
      },
      {
        title: "Cookies and tracking",
        body: "This website does not set cookies and does not use analysis or tracking tools.",
      },
      {
        title: "Contact",
        body: "If you get in touch by email or phone, the data you send is processed only to handle your enquiry. The legal basis is Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR.",
      },
      {
        title: "Fonts and external links",
        body: "Fonts are served by this website itself. No connection is made to Google Fonts or any other font provider. Links to LinkedIn lead to services of LinkedIn Ireland Unlimited Company; their privacy policy applies there.",
      },
      {
        title: "Your rights",
        body: "You have the right to access, rectification, erasure, restriction of processing, data portability and objection, where the legal requirements are met. You may also lodge a complaint with the Austrian Data Protection Authority (",
        link: dsb,
        after: ").",
      },
    ],
  },
  bs: {
    meta: {
      home: {
        title: "Razvoj softvera za preduzeća | Ahmedin Fajić",
        description:
          "Digitalizacija radnih procesa, web dizajn i razvoj po satu za preduzeća i organizacije. S iskustvom iz projekata za Siemens i javni sektor.",
      },
      cv: {
        title: "Životopis | Ahmedin Fajić",
        description:
          "Životopis Ahmedina Fajića. Razvoj softvera, između ostalog u Siemensu i u Bundesrechenzentrumu.",
      },
      impressum: {
        title: "Impresum | Ahmedin Fajić",
        description:
          "Impresum Ahmedina Fajića, razvoj softvera u Beču. Adresa, kontakt i zakonski podaci.",
      },
      datenschutz: {
        title: "Privatnost | Ahmedin Fajić",
        description:
          "Napomena o privatnosti za ahmedinfajic.com. Nema kolačića ni praćenja. Fontovi se isporučuju s ove stranice.",
      },
    },
    ogAlt: "Razvoj softvera za preduzeća i organizacije",
    name: "Ahmedin Fajić",
    jobTitle: "Softverski inženjer",
    skip: "Na sadržaj",
    navLabel: "Navigacija",
    language: "Jezik",
    languageChoose: "Izaberite jezik",
    menu: "meni",
    closeMenu: "Zatvori",
    newTab: "otvara se u novom tabu",
    legalNav: "Pravno",
    imprint: "Impresum",
    privacy: "Privatnost",
    nav: {
      services: "usluge",
      about: "o meni",
      contact: "kontakt",
    },
    hero: {
      eyebrow: "Razvoj softvera",
      title: "Softver za upravljanje vašim radnim procesima",
      sub: "Softver razvijen po mjeri, koji vaše tokove rada digitalno preslikava i objedinjuje na jednom mjestu. Na osnovu iskustva iz velikih projekata za međunarodne koncerne i javni sektor.",
      primary: "Zakažite uvodni razgovor",
      secondary: "Pogledajte usluge",
    },
    trustYears: "6+",
    trustYearsLabel: "Godina iskustva",
    trustBefore: "Iskustvo na projektima za ",
    trustNameA: "Siemens",
    trustMid: " i ",
    trustNameB: "Bundesrechenzentrum",
    servicesTitle: "Usluge",
    services: [
      {
        title: "Digitalizacija radnih procesa",
        text: "Tokovi rada koji danas idu preko Excel tabela, papirnih obrazaca i e-mailova spajaju se u jednu povezanu aplikaciju, usklađenu s vašim načinom rada.",
      },
      {
        title: "Web dizajn",
        text: "Jasne i brze web stranice koje grade povjerenje i rade na svakom uređaju. Po želji, upiti i rezervacije stižu direktno u vaše postojeće sisteme.",
      },
      {
        title: "Razvoj po satu",
        text: "Dodatni developerski kapacitet za agencije i preduzeća, obračun prema stvarnom utrošku vremena. Pojačanje tima bez novog zapošljavanja i dugoročnih obaveza.",
      },
    ],
    situationTitle: "Zašto individualni softver",
    situation:
      "Standardna rješenja traže da svoje procese prilagodite. Individualni softver prati vaš način rada. Trenutno stanje je na jednom mjestu, bez ponovnog unosa istih podataka. Svaki projekat počinje neobaveznim razgovorom. Ovisno o projektu, obračun je po fiksnoj cijeni ili prema utrošku vremena.",
    aboutTitle: "O meni",
    about:
      "Ja sam softverski inženjer s više od šest godina iskustva na velikim projektima, između ostalog za Siemens i Bundesrechenzentrum. Samostalna djelatnost postoji od 2026. Svaki projekat vodim direktno, bez posredovanja prodaje ili upravljanja projektima.",
    aboutCv: "Pogledajte životopis",
    aboutPortraitAlt: "Ahmedin Fajić",
    contactTitle: "Zakažite besplatan uvodni razgovor",
    contactButton: "Zatražite termin",
    contactNote:
      "Odgovor u roku od 24 sata. Saradnja bez obzira na lokaciju, lično ili na daljinu.",
    mail: "E-mail",
    phone: "Telefon",
    phoneScan: "Skenirajte za poziv",
    cv: {
      eyebrow: "Životopis",
      experience: "Iskustvo",
      education: "Obrazovanje",
      languagesTitle: "Jezici",
      languagesText: "Njemački, bosanski, engleski",
      portraitAlt: "Crno-bijeli portret Ahmedina Fajića",
      entries: [
        { years: "2026–danas", place: "Samostalno", note: "Razvoj softvera za preduzeća i organizacije." },
        {
          years: "2025–danas",
          place: "Siemens",
          note: "Razvoj modularnog softvera za Gridscale X, dio platforme Siemens Xcelerator za autonomno upravljanje mrežom.",
        },
        {
          years: "2024",
          place: "Bundesrechenzentrum",
          note: "Dalji razvoj administrativnog softvera za austrijsko Ministarstvo socijalnih poslova.",
        },
        {
          years: "2022–2024",
          place: "IBB Adaptive Solutions",
          note: "Razvoj ERP i CRM sistema za upravljanje cjenovnim uslovima i rabatima.",
        },
        {
          years: "2020–2022",
          place: "Focus Market Research",
          note: "Razvoj softvera za prikupljanje podataka i podjela monolitne aplikacije na više mikroservisa.",
        },
      ],
      facts: [
        {
          label: "Studij",
          text: "Bachelor of Science in Engineering, FH Campus Wien,",
          years: "2019–2023",
        },
      ],
    },
    imp: {
      name: "Ime",
      address: "Adresa",
      addressText: "Lorenz-Müller-Gasse 2/4/24, 1200 Beč, Austrija",
      email: "E-mail",
      purpose: "Djelatnost",
      purposeText: "Usluge u automatskoj obradi podataka i informacionoj tehnici",
      authority: "Obrtna vlast",
      authorityText: authority,
      law: "Propisi koji se primjenjuju",
      lawText: "Obrtni propis:",
      member: "Članstvo",
      memberText: "Wirtschaftskammer Wien",
      gisa: "GISA broj",
      gisaText: "39944122",
    },
    privacySections: [
      {
        title: "Odgovorno lice",
        body: "Ahmedin Fajić, Lorenz-Müller-Gasse 2/4/24, 1200 Beč, Austrija.",
        appendEmail: true,
      },
      {
        title: "Hosting",
        body: "Ova web stranica je smještena kod Netlify Inc. (SAD). Pri posjeti stranici mogu se obrađivati podaci o pristupu (npr. IP adresa, datum i vrijeme, zatražena datoteka, informacije o pregledniku) u serverskim logovima. Pravni osnov je čl. 6 st. 1 lit. f GDPR (legitimni interes za siguran i stabilan rad). Prenos u SAD se vrši na osnovu EU-US Data Privacy Framework.",
      },
      {
        title: "Kolačići i praćenje",
        body: "Na ovoj stranici se ne postavljaju kolačići i ne koriste se alati za analitiku ili praćenje.",
      },
      {
        title: "Kontakt",
        body: "Ako stupite u kontakt putem e-maila ili telefona, poslani podaci se obrađuju samo radi odgovora na upit. Pravni osnov je čl. 6 st. 1 lit. b GDPR odnosno lit. f GDPR.",
      },
      {
        title: "Fontovi i vanjski linkovi",
        body: "Fontovi se isporučuju s ove web stranice. Ne uspostavlja se veza s Google Fonts niti s drugim pružaocima fontova. Linkovi na LinkedIn vode ka uslugama LinkedIn Ireland Unlimited Company; tamo vrijedi njihova politika privatnosti.",
      },
      {
        title: "Vaša prava",
        body: "Imate pravo na uvid, ispravku, brisanje, ograničenje obrade, prenosivost podataka i prigovor, ako su ispunjeni zakonski uslovi. Također možete podnijeti žalbu austrijskom nadzornom tijelu za zaštitu podataka (",
        link: dsb,
        after: ").",
      },
    ],
  },
} satisfies Record<Lang, Copy>;
