import type { Lang } from "./locale";

export type Copy = {
  nav: { about: string; services: string; projects: string; connect: string };
  language: string;
  hero: string;
  connect: string;
  servicesButton: string;
  aboutLabel: string;
  about1: string;
  about2Before: string;
  aboutCv: string;
  about3Before: string;
  aboutProjects: string;
  aboutAnd: string;
  aboutProducts: string;
  about3After: string;
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
  closingLabel: string;
  closing: string;
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
    hero: "I design and develop software, from enterprise systems to client projects and my own ideas.",
    connect: "Connect",
    servicesButton: "Services",
    aboutLabel: "About",
    about1:
      "I am a professional software developer with over six years of experience working on solutions for various companies and people.",
    about2Before:
      "I work on Gridscale X at Siemens. Before that I built software for Austria’s Ministry of Social Affairs at BRZ, and for other companies. You can see them in ",
    aboutCv: "my CV",
    about3Before: "In 2025 I started my own company. I build a few ",
    aboutProjects: "projects",
    aboutAnd: " and ",
    aboutProducts: "products",
    about3After:
      ", and I am designing a solution that lets tax advisors in Austria prepare their offerings.",
    swipe: "swipe",
    of: "of",
    previous: "Previous",
    next: "Next",
    servicesLabel: "Services",
    servicesLead:
      "I build websites and small products that do more than sit there. Most of what I make has logic behind it: something that captures leads, tracks something, or runs on its own.",
    services: [
      {
        name: "Custom websites",
        text: "Websites built around how a business actually gets customers. Lead funnels, booking flows, tracking pages, dashboards that show what's happening in real time.",
      },
      {
        name: "SaaS products",
        text: "Full products, not just landing pages. Logins, data, and the backend logic that makes them work. I built a client portal for tax advisors this way, and a few other tools before that.",
      },
      {
        name: "Freelance development",
        text: "For anything that needs actual code instead of a page builder. From one feature to the full build.",
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
    closingLabel: "Contact",
    closing: "Have a project in mind?",
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
    hero: "Ich entwerfe und entwickle Software, von Systemen für Unternehmen über Kundenprojekte bis zu eigenen Ideen.",
    connect: "Kontakt",
    servicesButton: "Leistungen",
    aboutLabel: "Über mich",
    about1:
      "Ich bin Softwareentwickler und arbeite seit über sechs Jahren an Lösungen für Firmen und Menschen.",
    about2Before:
      "Ich arbeite an Gridscale X bei Siemens. Davor habe ich Software für das österreichische Sozialministerium bei der BRZ gebaut, und für andere Firmen. Das siehst du in meinem ",
    aboutCv: "Lebenslauf",
    about3Before: "2025 habe ich meine eigene Firma gegründet. Ich baue ein paar ",
    aboutProjects: "Projekte",
    aboutAnd: " und ",
    aboutProducts: "Produkte",
    about3After:
      " und entwerfe eine Lösung, mit der Steuerberater in Österreich ihre Angebote erstellen können.",
    swipe: "wischen",
    of: "von",
    previous: "Zurück",
    next: "Weiter",
    servicesLabel: "Leistungen",
    servicesLead:
      "Ich baue Websites und kleine Produkte, die mehr tun, als nur dazustehen. Hinter dem meisten steckt Logik: etwas, das Anfragen aufnimmt, etwas verfolgt oder von allein läuft.",
    services: [
      {
        name: "Websites",
        text: "Websites so gebaut, wie ein Betrieb wirklich Kunden gewinnt. Lead Funnels, Buchungsabläufe, Trackingseiten und Dashboards, die in Echtzeit zeigen, was passiert.",
      },
      {
        name: "SaaS Produkte",
        text: "Ganze Produkte, nicht nur Landingpages. Anmeldung, Daten und die Logik dahinter. So habe ich ein Kundenportal für Steuerberater gebaut, und davor ein paar andere Tools.",
      },
      {
        name: "Entwicklung",
        text: "Für alles, was echten Code braucht statt eines Baukastens. Von einer Funktion bis zum ganzen Aufbau.",
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
    closingLabel: "Kontakt",
    closing: "Hast du ein Projekt im Kopf?",
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
    hero: "Dizajniram i razvijam softver, od sistema za firme do projekata za klijente i vlastitih ideja.",
    connect: "Kontakt",
    servicesButton: "Usluge",
    aboutLabel: "O meni",
    about1:
      "Profesionalni sam softverski developer sa više od šest godina iskustva na rješenjima za različite firme i ljude.",
    about2Before:
      "Radim na Gridscale X u Siemensu. Prije toga sam radio softver za austrijsko Ministarstvo socijalnih poslova u BRZ-u, i za druge firme. Možeš ih vidjeti u mom ",
    aboutCv: "CV-u",
    about3Before: "2025. sam pokrenuo svoju firmu. Gradim nekoliko ",
    aboutProjects: "projekata",
    aboutAnd: " i ",
    aboutProducts: "proizvoda",
    about3After:
      " i radim rješenje kojim poreski savjetnici u Austriji pripremaju svoje ponude.",
    swipe: "prevuci",
    of: "od",
    previous: "Prethodno",
    next: "Sljedeće",
    servicesLabel: "Usluge",
    servicesLead:
      "Gradim web stranice i male proizvode koji ne stoje samo tu. Iza većine onoga što napravim stoji logika: nešto što skuplja upite, nešto prati ili radi samo.",
    services: [
      {
        name: "Web stranice",
        text: "Web stranice građene prema tome kako firma stvarno dolazi do klijenata. Tokovi za upite, rezervacije, stranice za praćenje i dashboardi koji u stvarnom vremenu pokazuju šta se događa.",
      },
      {
        name: "SaaS proizvodi",
        text: "Cijeli proizvodi, ne samo početne stranice. Prijava, podaci i logika u pozadini koja ih drži. Ovako sam napravio portal za poreske savjetnike, i prije toga još nekoliko alata.",
      },
      {
        name: "Razvoj",
        text: "Za sve čemu treba pravi kod, a ne gotov alat za stranice. Od jedne funkcije do cijele izrade.",
      },
    ],
    projectsLabel: "Lični projekti",
    previousProject: "Prethodni projekat",
    nextProject: "Sljedeći projekat",
    projectNotes: [
      "Skupljanje markica, napravljeno s prijateljem.",
      "Inspirisano starim slovnim tablama.",
      "Web stranica za prijatelja.",
      "Web stranica za prijatelja.",
    ],
    closingLabel: "Kontakt",
    closing: "Imaš projekat na umu?",
    cvLabel: "CV",
    close: "Zatvori",
    cvYears: ["2025–danas", "2024", "2022–2024", "2020–2022"],
    cvNotes: [
      "Softver za upravljanje elektroenergetskom mrežom",
      "Softver za austrijsko Ministarstvo socijalnih poslova",
      "Softver za upravljanje uslovima između firmi",
      "Softver oko prikupljanja podataka",
    ],
    study: "Studij",
    studyText: "Bachelor of Science in Engineering, FH Campus Wien, 2019–2023",
    school: "Škola",
    schoolText: "Matura, BRG 16, Beč, 2008–2017",
    languages: "Jezici",
    languagesText: "Njemački, bosanski, engleski",
    mail: "Mail",
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
