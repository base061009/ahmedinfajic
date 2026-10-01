import type { Lang } from "./locale";

export type Copy = {
  nav: { about: string; services: string; projects: string; connect: string };
  language: string;
  menu: string;
  openMenu: string;
  closeMenu: string;
  hero: string;
  connect: string;
  servicesButton: string;
  aboutLabel: string;
  about1: string;
  about2Before: string;
  aboutCv: string;
  about3: string;
  swipe: string;
  of: string;
  previous: string;
  next: string;
  servicesLabel: string;
  servicesLead: string;
  services: { name: string; text: string }[];
  projectsLabel: string;
  previousProject: string;
  nextProject: string;
  projectNotes: string[];
  projectTags: { saas: string; website: string };
  closingLabel: string;
  closing: string;
  closingNote: string;
  cvLabel: string;
  close: string;
  cvYears: [string, string, string, string, string];
  cvNotes: [string, string, string, string, string];
  selfEmployed: string;
  study: string;
  studyText: string;
  school: string;
  schoolText: string;
  languages: string;
  languagesText: string;
  mail: string;
  phone: string;
  phoneScan: string;
  imprint: string;
  privacy: string;
  legalNav: string;
  impName: string;
  impAddress: string;
  impEmail: string;
  impPurpose: string;
  impPurposeText: string;
  impAuthority: string;
  impLaw: string;
  impLawText: string;
  impMember: string;
  impGisa: string;
  privacySections: { title: string; body: string }[];
};

export const copy: Record<Lang, Copy> = {
  en: {
    nav: { about: "about", services: "services", projects: "projects", connect: "connect" },
    language: "Language",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    hero: "I design and develop software for companies, for people with an idea, and for myself.",
    connect: "Connect",
    servicesButton: "Services",
    aboutLabel: "About",
    about1:
      "I am a software developer and have been working for over six years on solutions for various companies and people.",
    about2Before:
      "Right now I work on Gridscale X at Siemens. Before that, among other things, I built software for Austria’s Ministry of Social Affairs at the Bundesrechenzentrum and contributed to several other projects.",
    aboutCv: "View CV",
    about3:
      "In 2026 I founded my own company, with the intention of realizing my own ideas and accompanying other people on the path of digitalization.",
    swipe: "swipe",
    of: "of",
    previous: "Previous",
    next: "Next",
    servicesLabel: "Services",
    servicesLead:
      "I build thoughtfully designed websites and software with measurable value — software that manages data, wins customers, or handles work automatically.",
    services: [
      {
        name: "Websites",
        text: "Landing pages with thoughtfully designed visuals, or websites with real logic like lead funnels, booking flows and more.",
      },
      {
        name: "Business software",
        text: "Internal tools that replace spreadsheets and repetitive manual work: systems built the way a team actually works.",
      },
      {
        name: "SaaS products",
        text: "For people with a vision. I help design and develop your SaaS product, from the start to the first customers.",
      },
    ],
    projectsLabel: "Personal projects",
    previousProject: "Previous project",
    nextProject: "Next project",
    projectNotes: [
      "Digital stamp card.",
      "Inspired by vintage letterboards.",
      "A website for a friend.",
      "A website for a friend.",
      "My secondary website.",
    ],
    projectTags: { saas: "SaaS", website: "Website" },
    closingLabel: "Connect",
    closing: "Have a project in mind?",
    closingNote: "I usually reply within a day or two.",
    cvLabel: "CV",
    close: "Close",
    cvYears: ["2026–now", "2025–now", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Software development",
      "Contributing to Gridscale X",
      "Software for Austria’s Ministry of Social Affairs",
      "Software for terms between companies",
      "Software around data collection",
    ],
    selfEmployed: "Self-employed",
    study: "Study",
    studyText: "Bachelor of Science in Engineering, FH Campus Wien, 2019–2023",
    school: "School",
    schoolText: "Matura, BRG 16, Vienna, 2008–2017",
    languages: "Languages",
    languagesText: "German, Bosnian, English",
    mail: "Mail",
    phone: "Phone",
    phoneScan: "Scan to call",
    imprint: "Imprint",
    privacy: "Privacy",
    legalNav: "Legal",
    impName: "Name",
    impAddress: "Address",
    impEmail: "Email",
    impPurpose: "Business purpose",
    impPurposeText: "Services in automatic data processing and information technology",
    impAuthority: "Trade authority",
    impLaw: "Applicable regulations",
    impLawText: "Trade regulation:",
    impMember: "Membership",
    impGisa: "GISA number",
    privacySections: [
      {
        title: "Controller",
        body: "Ahmedin Fajić, Lorenz-Müller-Gasse 2/4/24, 1200 Vienna, Austria. Email: ahmedinfajic@gmail.com",
      },
      {
        title: "Hosting",
        body: "This website is hosted by a hosting provider. When you visit the site, access data (for example IP address, date and time, requested file, and browser information) may be processed in server log files. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation).",
      },
      {
        title: "Cookies and tracking",
        body: "This website does not set cookies and does not use analysis or tracking tools.",
      },
      {
        title: "Contact",
        body: "If you contact me by email or phone, the data you send is processed only to handle your request. The legal basis is Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR.",
      },
      {
        title: "External content",
        body: "Fonts are loaded from Google Fonts (Google LLC). When the page loads, a connection to Google servers is established and your IP address may be transmitted. Links to LinkedIn lead to the services of LinkedIn Ireland Unlimited Company; their privacy policy applies there.",
      },
      {
        title: "Your rights",
        body: "You have the right to access, rectification, erasure, restriction of processing, data portability, and objection, where applicable. You may also lodge a complaint with the Austrian Data Protection Authority (www.dsb.gv.at).",
      },
    ],
  },
  de: {
    nav: { about: "über", services: "leistungen", projects: "projekte", connect: "kontakt" },
    language: "Sprache",
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    hero: "Ich entwerfe und entwickle Software für Unternehmen, für Menschen mit einer Idee und für mich selbst.",
    connect: "Kontakt",
    servicesButton: "Leistungen",
    aboutLabel: "Über mich",
    about1:
      "Ich bin Softwareentwickler und arbeite seit über sechs Jahren an Lösungen für verschiedene Firmen und Menschen.",
    about2Before:
      "Zurzeit arbeite ich an Gridscale X bei Siemens. Davor habe ich unter anderem beim Bundesrechenzentrum Software für das österreichische Sozialministerium gebaut und an einigen anderen Projekten mitgewirkt.",
    aboutCv: "Lebenslauf ansehen",
    about3:
      "Im Jahr 2026 habe ich meine eigene Firma gegründet, mit der Absicht, meine eigenen Ideen umzusetzen und andere Menschen auf dem Weg der Digitalisierung zu begleiten.",
    swipe: "wischen",
    of: "von",
    previous: "Zurück",
    next: "Weiter",
    servicesLabel: "Leistungen",
    servicesLead:
      "Ich baue durchdachte Webseiten und Software mit messbarem Mehrwert, Software, die Daten verwaltet, Kunden gewinnt oder Arbeit automatisch erledigt.",
    services: [
      {
        name: "Websites",
        text: "Landingpages mit durchdachtem visuellem Design, oder Websites mit echter Logik wie Lead Funnels, Buchungsabläufe und mehr.",
      },
      {
        name: "Betriebssoftware",
        text: "Interne Tools, die Tabellen und wiederkehrende Handarbeit ersetzen: Systeme so gebaut, wie ein Team wirklich arbeitet.",
      },
      {
        name: "SaaS Produkte",
        text: "Für Menschen mit einer Vision. Ich helfe beim Entwerfen und Entwickeln deines SaaS Produkts, vom Start bis zu den ersten Kunden.",
      },
    ],
    projectsLabel: "Eigene Projekte",
    previousProject: "Vorheriges Projekt",
    nextProject: "Nächstes Projekt",
    projectNotes: [
      "Digitale Stempelkarte.",
      "Inspiriert von alten Buchstabentafeln.",
      "Eine Website für einen Freund.",
      "Eine Website für einen Freund.",
      "Meine zweite Website.",
    ],
    projectTags: { saas: "SaaS", website: "Website" },
    closingLabel: "Kontakt",
    closing: "Hast du ein Projekt im Kopf?",
    closingNote: "Ich antworte meist innerhalb von ein oder zwei Tagen.",
    cvLabel: "Lebenslauf",
    close: "Schließen",
    cvYears: ["2026–heute", "2025–heute", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Softwareentwicklung",
      "Mitarbeit an Gridscale X",
      "Software für das österreichische Sozialministerium",
      "Software für Konditionen zwischen Firmen",
      "Software rund um die Datenerfassung",
    ],
    selfEmployed: "Selbstständig",
    study: "Studium",
    studyText: "Bachelor of Science in Engineering, FH Campus Wien, 2019–2023",
    school: "Schule",
    schoolText: "Matura, BRG 16, Wien, 2008–2017",
    languages: "Sprachen",
    languagesText: "Deutsch, Bosnisch, Englisch",
    mail: "Mail",
    phone: "Telefon",
    phoneScan: "Scannen zum Anrufen",
    imprint: "Impressum",
    privacy: "Datenschutz",
    legalNav: "Rechtliches",
    impName: "Name",
    impAddress: "Anschrift",
    impEmail: "E-Mail",
    impPurpose: "Unternehmensgegenstand",
    impPurposeText: "Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik",
    impAuthority: "Gewerbebehörde",
    impLaw: "Anzuwendende Rechtsvorschriften",
    impLawText: "Gewerbeordnung:",
    impMember: "Mitgliedschaft",
    impGisa: "GISA-Zahl",
    privacySections: [
      {
        title: "Verantwortlicher",
        body: "Ahmedin Fajić, Lorenz-Müller-Gasse 2/4/24, 1200 Wien, Österreich. E-Mail: ahmedinfajic@gmail.com",
      },
      {
        title: "Hosting",
        body: "Diese Website wird bei einem Hosting-Anbieter betrieben. Beim Aufruf der Seite können Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit, angeforderte Datei, Browserinformationen) in Server-Logfiles verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb).",
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
        title: "Externe Inhalte",
        body: "Schriftarten werden über Google Fonts (Google LLC) geladen. Beim Aufruf der Seite wird eine Verbindung zu Servern von Google hergestellt; dabei kann Ihre IP-Adresse übermittelt werden. Links zu LinkedIn führen zu Angeboten der LinkedIn Ireland Unlimited Company; dort gilt deren Datenschutzerklärung.",
      },
      {
        title: "Ihre Rechte",
        body: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch, soweit die gesetzlichen Voraussetzungen vorliegen. Außerdem können Sie sich bei der Österreichischen Datenschutzbehörde beschweren (www.dsb.gv.at).",
      },
    ],
  },
  bs: {
    nav: { about: "o meni", services: "usluge", projects: "projekti", connect: "kontakt" },
    language: "Jezik",
    menu: "Meni",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    hero: "Dizajniram i razvijam softver za firme, za ljude s idejom i za sebe.",
    connect: "Kontakt",
    servicesButton: "Usluge",
    aboutLabel: "O meni",
    about1:
      "Ja sam profesionalni programer sa više od šest godina iskustva sa radom za različite firme i ljude.",
    about2Before:
      "Trenutno radim na projektu Gridscale X u Siemensu. Među ostalim projektima sam radio softver za austrijsko Ministarstvo socijalnih poslova u BRZ-u.",
    aboutCv: "Pogledaj CV",
    about3:
      "2026. sam pokrenuo svoju firmu, s namjerom da ostvarim vlastite ideje i da pratim druge ljude na putu digitalizacije.",
    swipe: "prevuci",
    of: "od",
    previous: "Nazad",
    next: "Dalje",
    servicesLabel: "Usluge",
    servicesLead:
      "Pravim promišljene web stranice i softver s mjerljivom vrijednošću, softver koji upravlja podacima, dovodi klijente ili automatski obavlja posao.",
    services: [
      {
        name: "Web stranice",
        text: "Landing stranice s promišljenim vizuelnim dizajnom, ili web stranice s pravom logikom kao što su lead funneli, tokovi rezervacija i više.",
      },
      {
        name: "Poslovni softver",
        text: "Interni alati koji zamjenjuju tabele i ponavljajući ručni rad: sistemi građeni onako kako tim stvarno radi.",
      },
      {
        name: "SaaS proizvodi",
        text: "Za ljude s vizijom. Pomažem pri osmišljavanju i razvoju tvog SaaS proizvoda, od početka do prvih klijenata.",
      },
    ],
    projectsLabel: "Projekti",
    previousProject: "Prethodni projekat",
    nextProject: "Sljedeći projekat",
    projectNotes: [
      "Digitalna pečat kartica.",
      "Po uzoru na stare table sa slovima.",
      "Web stranica za prijatelja.",
      "Web stranica za prijatelja.",
      "Moja druga web stranica.",
    ],
    projectTags: { saas: "SaaS", website: "Web stranica" },
    closingLabel: "Kontakt",
    closing: "Imaš projekat na umu?",
    closingNote: "Obično odgovorim u roku od jednog ili dva dana.",
    cvLabel: "CV",
    close: "Zatvori",
    cvYears: ["2026–danas", "2025–danas", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Razvoj softvera",
      "Rad na Gridscale X",
      "Softver za austrijsko Ministarstvo socijalnih poslova",
      "Softver za uslove između firmi",
      "Softver oko prikupljanja podataka",
    ],
    selfEmployed: "Samostalno",
    study: "Studij",
    studyText: "Bachelor of Science in Engineering, FH Campus Wien, 2019–2023",
    school: "Škola",
    schoolText: "Matura, BRG 16, Beč, 2008–2017",
    languages: "Jezici",
    languagesText: "Njemački, bosanski, engleski",
    mail: "Mail",
    phone: "Telefon",
    phoneScan: "Skeniraj za poziv",
    imprint: "Impresum",
    privacy: "Privatnost",
    legalNav: "Pravno",
    impName: "Ime",
    impAddress: "Adresa",
    impEmail: "E-mail",
    impPurpose: "Djelatnost",
    impPurposeText: "Usluge u automatskoj obradi podataka i informacionoj tehnici",
    impAuthority: "Obrtna vlast",
    impLaw: "Propisi koji se primjenjuju",
    impLawText: "Obrtni propis:",
    impMember: "Članstvo",
    impGisa: "GISA broj",
    privacySections: [
      {
        title: "Odgovorno lice",
        body: "Ahmedin Fajić, Lorenz-Müller-Gasse 2/4/24, 1200 Beč, Austrija. E-mail: ahmedinfajic@gmail.com",
      },
      {
        title: "Hosting",
        body: "Ova web stranica je smještena kod hosting pružatelja. Pri posjeti stranici mogu se obrađivati podaci o pristupu (npr. IP adresa, datum i vrijeme, zatražena datoteka, informacije o pregledniku) u serverskim logovima. Pravni osnov je čl. 6 st. 1 lit. f GDPR (legitimni interes za siguran i stabilan rad).",
      },
      {
        title: "Kolačići i praćenje",
        body: "Na ovoj stranici se ne postavljaju kolačići i ne koriste se alati za analitiku ili praćenje.",
      },
      {
        title: "Kontakt",
        body: "Ako me kontaktirate e-mailom ili telefonom, poslani podaci se obrađuju samo radi odgovora na upit. Pravni osnov je čl. 6 st. 1 lit. b GDPR odnosno lit. f GDPR.",
      },
      {
        title: "Vanjski sadržaj",
        body: "Fontovi se učitavaju preko Google Fonts (Google LLC). Pri učitavanju stranice uspostavlja se veza s Google serverima; pri tome se može prenijeti vaša IP adresa. Linkovi na LinkedIn vode na usluge LinkedIn Ireland Unlimited Company; tamo vrijedi njihova politika privatnosti.",
      },
      {
        title: "Vaša prava",
        body: "Imate pravo na uvid, ispravku, brisanje, ograničenje obrade, prenosivost podataka i prigovor, ako su ispunjeni zakonski uslovi. Također možete podnijeti žalbu austrijskom nadzornom tijelu za zaštitu podataka (www.dsb.gv.at).",
      },
    ],
  },
};
