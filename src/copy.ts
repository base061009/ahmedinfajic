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
  projectNotes: [string, string, string, string];
  projectTags: { saas: string; website: string };
  closingLabel: string;
  closing: string;
  closingNote: string;
  cvLabel: string;
  close: string;
  cvYears: [string, string, string, string];
  cvNotes: [string, string, string, string];
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
  privacyIntro: string;
  privacyHeads: [string, string, string, string, string];
  privacyTodo: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    nav: { about: "about", services: "services", projects: "projects", connect: "connect" },
    language: "Language",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    hero: "I design and develop software, from enterprise systems to client projects and my own ideas.",
    connect: "Connect",
    servicesButton: "Services",
    aboutLabel: "About",
    about1:
      "I am a professional software developer with over six years of experience working on solutions for various companies and people.",
    about2Before:
      "I work on Gridscale X at Siemens. Before that I built software for Austria’s Ministry of Social Affairs at BRZ, and for other companies. You can see them in ",
    aboutCv: "my CV",
    about3:
      "In 2025 I started my own company. I build a few projects and products, and I am designing a solution that lets tax advisors in Austria prepare their offerings.",
    swipe: "swipe",
    of: "of",
    previous: "Previous",
    next: "Next",
    servicesLabel: "Services",
    servicesLead:
      "I build websites and software, usually with some real logic or purpose behind them: something that runs a business, captures customers, or handles work on its own.",
    services: [
      {
        name: "Websites",
        text: "Landing pages with thought-through visual design, or websites with actual logic like lead funnels, booking flows and more.",
      },
      {
        name: "Business software",
        text: "Internal tools that replace spreadsheets and manual repetitive work: systems built around how a team actually operates.",
      },
      {
        name: "SaaS products",
        text: "For people with a vision. I help design and develop your SaaS product from the start to the first customers.",
      },
    ],
    projectsLabel: "Personal projects",
    previousProject: "Previous project",
    nextProject: "Next project",
    projectNotes: [
      "Collect stamps, built with a friend.",
      "Inspired by vintage letterboards.",
      "A website for a friend.",
      "A website for a friend.",
    ],
    projectTags: { saas: "SaaS", website: "Website" },
    closingLabel: "Connect",
    closing: "Have a project in mind?",
    closingNote: "I usually reply within a day or two.",
    cvLabel: "CV",
    close: "Close",
    cvYears: ["2025–now", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Software for managing the power grid",
      "Software for Austria’s Ministry of Social Affairs",
      "Software for managing terms between companies",
      "Software surrounding data collection",
    ],
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
    privacyIntro: "This is not a finished privacy policy. The outline is here, the text is not.",
    privacyHeads: ["Controller", "Hosting", "Cookies", "Contact form", "Rights of the data subject"],
    privacyTodo: "[PLACEHOLDER] Ahmed still to complete",
  },
  de: {
    nav: { about: "über", services: "leistungen", projects: "projekte", connect: "kontakt" },
    language: "Sprache",
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    hero: "Ich entwerfe und entwickle Software, von Systemen für Unternehmen über Kundenprojekte bis zu eigenen Ideen.",
    connect: "Kontakt",
    servicesButton: "Leistungen",
    aboutLabel: "Über mich",
    about1:
      "Ich bin Softwareentwickler und arbeite seit über sechs Jahren an Lösungen für Firmen und Menschen.",
    about2Before:
      "Ich arbeite an Gridscale X bei Siemens. Davor habe ich Software für das österreichische Sozialministerium bei der BRZ gebaut, und für andere Firmen. Das siehst du in meinem ",
    aboutCv: "Lebenslauf",
    about3:
      "2025 habe ich meine eigene Firma gegründet. Ich baue ein paar Projekte und Produkte und entwerfe eine Lösung, mit der Steuerberater in Österreich ihre Angebote erstellen können.",
    swipe: "wischen",
    of: "von",
    previous: "Zurück",
    next: "Weiter",
    servicesLabel: "Leistungen",
    servicesLead:
      "Ich baue Websites und Software, meist mit echter Logik oder einem Zweck dahinter: etwas, das einen Betrieb laufen lässt, Kunden gewinnt oder Arbeit von allein erledigt.",
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
      "Stempel sammeln, gebaut mit einem Freund.",
      "Inspiriert von alten Buchstabentafeln.",
      "Eine Website für einen Freund.",
      "Eine Website für einen Freund.",
    ],
    projectTags: { saas: "SaaS", website: "Website" },
    closingLabel: "Kontakt",
    closing: "Hast du ein Projekt im Kopf?",
    closingNote: "Ich antworte meist innerhalb von ein oder zwei Tagen.",
    cvLabel: "Lebenslauf",
    close: "Schließen",
    cvYears: ["2025–heute", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Software für die Steuerung des Stromnetzes",
      "Software für das österreichische Sozialministerium",
      "Software für Konditionen zwischen Firmen",
      "Software rund um die Datenerfassung",
    ],
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
    privacyIntro: "Das ist noch keine fertige Datenschutzerklärung. Die Gliederung steht, der Text nicht.",
    privacyHeads: ["Verantwortlicher", "Hosting", "Cookies", "Kontaktformular", "Rechte der betroffenen Person"],
    privacyTodo: "[PLACEHOLDER] Ahmed ergänzt den Text noch",
  },
  bs: {
    nav: { about: "o meni", services: "usluge", projects: "projekti", connect: "kontakt" },
    language: "Jezik",
    menu: "Meni",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    hero: "Dizajniram i razvijam softver, od sistema za firme do projekata za klijente i vlastitih ideja.",
    connect: "Kontakt",
    servicesButton: "Usluge",
    aboutLabel: "O meni",
    about1:
      "Profesionalni sam programer sa više od šest godina iskustva. Radio sam za različite firme i ljude.",
    about2Before:
      "Radim na Gridscale X u Siemensu. Prije toga sam radio softver za austrijsko Ministarstvo socijalnih poslova u BRZ-u, i za druge firme. Možeš ih vidjeti u mom ",
    aboutCv: "CV-u",
    about3:
      "2025. sam pokrenuo svoju firmu. Radim na nekoliko projekata i proizvoda, i pravim rješenje kojim poreski savjetnici u Austriji spremaju svoje ponude.",
    swipe: "prevuci",
    of: "od",
    previous: "Nazad",
    next: "Dalje",
    servicesLabel: "Usluge",
    servicesLead:
      "Pravim web stranice i softver, obično sa pravom logikom ili svrhom iza: nešto što vodi firmu, dovodi klijente ili samo radi posao.",
    services: [
      {
        name: "Web stranice",
        text: "Landing stranice sa promišljenim dizajnom, ili web stranice sa pravom logikom, kao što su tokovi za upite, rezervacije i slično.",
      },
      {
        name: "Poslovni softver",
        text: "Interni alati koji zamjenjuju tabele i posao koji se stalno ponavlja: sistemi građeni onako kako tim stvarno radi.",
      },
      {
        name: "SaaS proizvodi",
        text: "Za ljude sa vizijom. Pomažem ti da dizajniraš i razviješ svoj SaaS proizvod, od početka do prvih klijenata.",
      },
    ],
    projectsLabel: "Lični projekti",
    previousProject: "Prethodni projekat",
    nextProject: "Sljedeći projekat",
    projectNotes: [
      "Skupljanje markica, napravljeno s prijateljem.",
      "Po uzoru na stare table sa slovima.",
      "Web stranica za prijatelja.",
      "Web stranica za prijatelja.",
    ],
    projectTags: { saas: "SaaS", website: "Web stranica" },
    closingLabel: "Kontakt",
    closing: "Imaš projekat na umu?",
    closingNote: "Obično odgovorim u roku od dan-dva.",
    cvLabel: "CV",
    close: "Zatvori",
    cvYears: ["2025–danas", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Softver za upravljanje elektroenergetskom mrežom",
      "Softver za austrijsko Ministarstvo socijalnih poslova",
      "Softver za uslove između firmi",
      "Softver oko prikupljanja podataka",
    ],
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
    privacyIntro: "Ovo još nije gotova politika privatnosti. Okvir je tu, tekst nije.",
    privacyHeads: ["Odgovorno lice", "Hosting", "Kolačići", "Kontakt forma", "Prava lica"],
    privacyTodo: "[PLACEHOLDER] Ahmed još treba dopuniti tekst",
  },
};
