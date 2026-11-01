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
  nav: { services: string; approach: string; about: string; contact: string };
  hero: { eyebrow: string; title: string; sub: string; primary: string; secondary: string };
  trustLabel: string;
  trust: string;
  servicesTitle: string;
  services: { title: string; text: string }[];
  situationTitle: string;
  situation: string;
  approachTitle: string;
  steps: { title: string; text: string }[];
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
          "Individuelle Software für Unternehmen und Organisationen: Verwaltung, Kundenportale und Websites. Mit Erfahrung aus Projekten für Siemens und den öffentlichen Sektor.",
      },
      cv: {
        title: "Lebenslauf | Ahmedin Fajic",
        description:
          "Lebenslauf von Ahmedin Fajic. Softwareentwicklung, unter anderem bei Siemens, beim Bundesrechenzentrum und für das österreichische Sozialministerium.",
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
    jobTitle: "Softwareentwickler",
    skip: "Zum Inhalt",
    navLabel: "Navigation",
    language: "Sprache",
    languageChoose: "Sprache wählen",
    menu: "Menü",
    closeMenu: "Schließen",
    newTab: "öffnet in neuem Tab",
    legalNav: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    nav: {
      services: "leistungen",
      approach: "vorgehensweise",
      about: "über",
      contact: "kontakt",
    },
    hero: {
      eyebrow: "Software-Entwicklung",
      title:
        "Software-Entwicklung für Unternehmen und Organisationen, die ihre Verwaltung digitalisieren wollen",
      sub: "Individuelle Lösungen statt Excel und Papier, entwickelt mit Erfahrung aus Großprojekten für internationale Konzerne und den öffentlichen Sektor.",
      primary: "Erstgespräch vereinbaren",
      secondary: "Leistungen ansehen",
    },
    trustLabel: "Erfahrung",
    trust:
      "Erfahrung aus Projekten für Siemens · Bundesrechenzentrum · Österreichisches Sozialministerium",
    servicesTitle: "Leistungen",
    services: [
      {
        title: "Verwaltungssoftware",
        text: "Zentrale Systeme für Aufträge, Kunden, Mitarbeiter und Dokumente, als Ersatz für verstreute Excel-Listen und Ablagen.",
      },
      {
        title: "Kunden- und Partnerportale",
        text: "Sicherer Austausch von Unterlagen, Anfragen und Belegen, ohne E-Mail-Verkehr und Medienbrüche.",
      },
      {
        title: "Websites mit Systemanbindung",
        text: "Anfragen, Buchungen und Termine fließen direkt in die bestehende Verwaltung.",
      },
    ],
    situationTitle: "Warum individuelle Software",
    situation:
      "Wichtige Informationen liegen verstreut in Tabellen, Ordnern und Postfächern. Daten werden mehrfach händisch übertragen, und der aktuelle Stand ist oft nur einzelnen Personen bekannt. Individuelle Software schafft Struktur, Übersicht und Verlässlichkeit.",
    approachTitle: "Vorgehensweise",
    steps: [
      {
        title: "Analyse",
        text: "Unverbindliches Erstgespräch zu Abläufen und Anforderungen.",
      },
      {
        title: "Konzept",
        text: "Klarer Leistungsumfang mit Fixpreis.",
      },
      {
        title: "Umsetzung",
        text: "Entwicklung in Etappen mit regelmäßigen Zwischenständen.",
      },
      {
        title: "Betrieb",
        text: "Wartung, Support und Weiterentwicklung.",
      },
    ],
    aboutTitle: "Über das Unternehmen",
    about:
      "Gegründet 2026 von Ahmedin Fajic, Softwareentwickler mit über sechs Jahren Erfahrung in Großprojekten, unter anderem bei Siemens und für das österreichische Sozialministerium. Jedes Projekt wird direkt vom Entwickler betreut, ohne Umwege über Vertrieb oder Projektmanagement.",
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
        { years: "2026–heute", place: "Selbstständig", note: "Softwareentwicklung" },
        { years: "2025–heute", place: "Siemens", note: "Mitarbeit an Gridscale X" },
        {
          years: "2024",
          place: "Bundesrechenzentrum",
          note: "Software für das österreichische Sozialministerium",
        },
        {
          years: "2022–2024",
          place: "IBB Adaptive Solutions",
          note: "Software zur Verwaltung von Lieferanten- und Kundenkonditionen",
        },
        {
          years: "2020–2022",
          place: "Focus Market Research",
          note: "Software rund um die Datenerfassung",
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
          "Custom software for businesses and organisations: administration tools, client portals and websites. Built with experience from projects for Siemens and the public sector.",
      },
      cv: {
        title: "CV | Ahmedin Fajic",
        description:
          "CV of Ahmedin Fajic. Software development, including work at Siemens, at the Bundesrechenzentrum and for the Austrian Ministry of Social Affairs.",
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
    jobTitle: "Software developer",
    skip: "Skip to content",
    navLabel: "Navigation",
    language: "Language",
    languageChoose: "Choose language",
    menu: "Menu",
    closeMenu: "Close",
    newTab: "opens in a new tab",
    legalNav: "Legal",
    imprint: "Imprint",
    privacy: "Privacy",
    nav: {
      services: "services",
      approach: "approach",
      about: "about",
      contact: "contact",
    },
    hero: {
      eyebrow: "Software development",
      title:
        "Software development for companies and organisations that want to digitise their administration",
      sub: "Custom solutions in place of spreadsheets and paper, developed with experience from large projects for international corporations and the public sector.",
      primary: "Book a free initial consultation",
      secondary: "View services",
    },
    trustLabel: "Experience",
    trust:
      "Experience from projects for Siemens · Bundesrechenzentrum · Austrian Ministry of Social Affairs",
    servicesTitle: "Services",
    services: [
      {
        title: "Administrative software",
        text: "Central systems for orders, clients, staff and documents, replacing scattered spreadsheets and filing.",
      },
      {
        title: "Client and partner portals",
        text: "Secure exchange of documents, enquiries and records, without email back-and-forth or manual re-entry.",
      },
      {
        title: "Websites with system connection",
        text: "Enquiries, bookings and appointments go directly into the existing administration.",
      },
    ],
    situationTitle: "Why custom software",
    situation:
      "Important information sits scattered across spreadsheets, folders and inboxes. Data is transferred by hand more than once, and the current status is often known only to individual people. Custom software creates structure, overview and reliability.",
    approachTitle: "Approach",
    steps: [
      {
        title: "Analysis",
        text: "An initial conversation, without obligation, about processes and requirements.",
      },
      {
        title: "Concept",
        text: "A clear scope of work at a fixed price.",
      },
      {
        title: "Implementation",
        text: "Development in stages, with regular progress updates.",
      },
      {
        title: "Operation & support",
        text: "Maintenance, support and further development.",
      },
    ],
    aboutTitle: "About the company",
    about:
      "Founded in 2026 by Ahmedin Fajic, a software developer with more than six years of experience on large projects, including at Siemens and for the Austrian Ministry of Social Affairs. Each project is handled directly by the developer, without detours through sales or project management.",
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
        { years: "2026–present", place: "Self-employed", note: "Software development" },
        { years: "2025–present", place: "Siemens", note: "Contributing to Gridscale X" },
        {
          years: "2024",
          place: "Bundesrechenzentrum",
          note: "Software for the Austrian Ministry of Social Affairs",
        },
        {
          years: "2022–2024",
          place: "IBB Adaptive Solutions",
          note: "Software for managing B2B pricing terms",
        },
        {
          years: "2020–2022",
          place: "Focus Market Research",
          note: "Software around data collection",
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
          "Softver po mjeri za preduzeća i organizacije: administracija, portali za klijente i web stranice. S iskustvom iz projekata za Siemens i javni sektor.",
      },
      cv: {
        title: "Životopis | Ahmedin Fajić",
        description:
          "Životopis Ahmedina Fajića. Razvoj softvera, između ostalog u Siemensu, u Bundesrechenzentrumu i za austrijsko Ministarstvo socijalnih poslova.",
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
    jobTitle: "Softverski inženjer",
    skip: "Na sadržaj",
    navLabel: "Navigacija",
    language: "Jezik",
    languageChoose: "Izaberite jezik",
    menu: "Meni",
    closeMenu: "Zatvorite",
    newTab: "otvara se u novom tabu",
    legalNav: "Pravno",
    imprint: "Impresum",
    privacy: "Privatnost",
    nav: {
      services: "usluge",
      approach: "postupak",
      about: "o nama",
      contact: "kontakt",
    },
    hero: {
      eyebrow: "Razvoj softvera",
      title:
        "Razvoj softvera za preduzeća i organizacije koje žele digitalizovati svoju administraciju",
      sub: "Rješenja po mjeri umjesto Excela i papira, razvijena na osnovu iskustva iz velikih projekata za međunarodne koncerne i javni sektor.",
      primary: "Dogovorite prvi razgovor",
      secondary: "Pogledajte usluge",
    },
    trustLabel: "Iskustvo",
    trust:
      "Iskustvo iz projekata za Siemens · Bundesrechenzentrum · Austrijsko ministarstvo socijalnih poslova",
    servicesTitle: "Usluge",
    services: [
      {
        title: "Administrativni softver",
        text: "Centralni sistemi za narudžbe, klijente, zaposlene i dokumente, kao zamjena za rasute Excel tabele i fascikle.",
      },
      {
        title: "Portali za klijente i partnere",
        text: "Sigurna razmjena dokumenata, upita i priloga, bez dopisivanja e-mailom i prekida između sistema.",
      },
      {
        title: "Web stranice s vezom na sistem",
        text: "Upiti, rezervacije i termini ulaze direktno u postojeću administraciju.",
      },
    ],
    situationTitle: "Zašto softver po mjeri",
    situation:
      "Važne informacije leže rasute u tabelama, fasciklama i poštanskim sandučićima. Podaci se više puta prenose ručno, a trenutno stanje često znaju samo pojedine osobe. Softver po mjeri stvara strukturu, pregled i pouzdanost.",
    approachTitle: "Postupak",
    steps: [
      {
        title: "Analiza",
        text: "Neobavezujući prvi razgovor o tokovima rada i zahtjevima.",
      },
      {
        title: "Koncept",
        text: "Jasan obim rada uz fiksnu cijenu.",
      },
      {
        title: "Realizacija",
        text: "Razvoj u etapama, uz redovne prikaze trenutnog stanja.",
      },
      {
        title: "Održavanje i podrška",
        text: "Održavanje, podrška i dalji razvoj.",
      },
    ],
    aboutTitle: "O preduzeću",
    about:
      "Preduzeće je 2026. godine osnovao Ahmedin Fajić, softverski inženjer s više od šest godina iskustva na velikim projektima, između ostalog u Siemensu i za austrijsko Ministarstvo socijalnih poslova. Svaki projekat vodi direktno razvojni inženjer, bez posredovanja prodaje ili upravljanja projektima.",
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
        { years: "2026–danas", place: "Samostalno", note: "Razvoj softvera" },
        { years: "2025–danas", place: "Siemens", note: "Rad na Gridscale X" },
        {
          years: "2024",
          place: "Bundesrechenzentrum",
          note: "Softver za austrijsko Ministarstvo socijalnih poslova",
        },
        {
          years: "2022–2024",
          place: "IBB Adaptive Solutions",
          note: "Softver za upravljanje uslovima dobavljača i kupaca",
        },
        {
          years: "2020–2022",
          place: "Focus Market Research",
          note: "Softver oko prikupljanja podataka",
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
