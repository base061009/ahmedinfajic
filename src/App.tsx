import { useEffect, useRef, useState, type ReactNode } from "react";
import { copy, type Copy } from "./copy";
import { hrefFor, readRoute, type Lang, type Page } from "./locale";

const projects = [
  {
    name: "Stemperl",
    href: "https://stemperl.at",
    preview: "/previews/stemperl.jpg",
    kind: "saas",
  },
  {
    name: "My Digital Menus",
    href: "https://mydigitalmenus.at",
    preview: "/previews/menus.jpg",
    kind: "saas",
  },
  {
    name: "Raistell",
    href: "https://raistell.de",
    preview: "/previews/raistell.jpg",
    kind: "website",
  },
  {
    name: "Wiener Entkernung",
    href: "https://wiener-entkernung.at",
    preview: "/previews/entkernung.jpg",
    kind: "website",
  },
  {
    name: "informatically",
    href: "https://informatically.com",
    preview: "/previews/informatically.jpg",
    kind: "website",
  },
] as const;

const phoneHref = "tel:+4367763472758";
const phoneDisplay = "+43 677 634 72758";
const mailHref = "mailto:contact@ahmedinfajic.com";
const mailDisplay = "contact@ahmedinfajic.com";

const phoneIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.2 4.8h2.1l1.1 3.2-1.4 1a11.2 11.2 0 0 0 4.9 4.9l1-1.4 3.2 1.1v2.1a1.7 1.7 0 0 1-1.8 1.8A13.8 13.8 0 0 1 4.5 6.6 1.7 1.7 0 0 1 6.3 4.8Z" />
  </svg>
);

const links = [
  {
    label: "Mail",
    href: mailHref,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" />
        <path d="M4 6.4 12 13l8-6.6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmedin-fajic",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="3.2" />
        <path d="M8.2 10.4v6.4M8.2 7.55v.08" />
        <path d="M12.05 16.8v-3.7c0-1.15.9-2.05 2.05-2.05s2.05.9 2.05 2.05v3.7" />
      </svg>
    ),
  },
];

function Arrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "previous" ? (
        <path d="M14.5 5.5 8 12l6.5 6.5" />
      ) : (
        <path d="M9.5 5.5 16 12l-6.5 6.5" />
      )}
    </svg>
  );
}

function About({ t, onCv }: { t: Copy; onCv: () => void }) {
  return (
    <section className="about" id="about" aria-label={t.aboutLabel}>
      <p className="about-label">{t.aboutLabel}</p>
      <div className="about-sheet">
        <p>{t.about1}</p>
        <span className="about-rule" aria-hidden="true" />
        <p>
          {t.about2Before}
          <button type="button" onClick={onCv}>{t.aboutCv}</button>.
        </p>
        <span className="about-rule" aria-hidden="true" />
        <p>{t.about3}</p>
      </div>
    </section>
  );
}

function Services({ t, onConnect }: { t: Copy; onConnect: () => void }) {
  return (
    <section className="services" id="services" aria-label={t.servicesLabel}>
      <p className="services-label">{t.servicesLabel}</p>
      <p className="services-lead">{t.servicesLead}</p>
      <ul className="services-list">
        {t.services.map((item) => (
          <li key={item.name}>
            <p className="services-name">{item.name}</p>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <button className="services-cta" type="button" onClick={onConnect}>
        {t.connect}
      </button>
    </section>
  );
}

function Projects({ t }: { t: Copy }) {
  const track = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const swipe = narrow || projects.length > 4;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 720px)");

    function apply() {
      setNarrow(query.matches);
      setPage(0);
      track.current?.scrollTo({ left: 0 });
    }

    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  function go(next: number) {
    const el = track.current;
    if (!el) return;
    const index = Math.max(0, Math.min(projects.length - 1, next));
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    setPage(index);
  }

  function onScroll() {
    const el = track.current;
    if (!el || el.clientWidth === 0) return;
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <section
      className={`projects${swipe ? " projects-swipe" : ""}`}
      id="projects"
      aria-label={t.projectsLabel}
    >
      <p className="projects-label">{t.projectsLabel}</p>
      <div className="projects-main">
        <ul
          className="projects-track"
          ref={track}
          onScroll={swipe ? onScroll : undefined}
        >
          {projects.map((project, index) => (
            <li key={project.href}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <img className="project-preview" src={project.preview} alt="" />
                <span className="project-heading">
                  <span className="project-name">{project.name}</span>
                  <span className="project-tag">{t.projectTags[project.kind]}</span>
                </span>
                <span className="project-note">{t.projectNotes[index]}</span>
                <span className="project-host">
                  {project.href.replace("https://", "")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {swipe ? (
        <div className="projects-controls">
          <button
            className="projects-arrow"
            type="button"
            aria-label={t.previousProject}
            disabled={page === 0}
            onClick={() => go(page - 1)}
          >
            <Arrow direction="previous" />
          </button>
          <p className="projects-index" aria-live="polite">
            {t.swipe}{" "}
            <span>
              {page + 1} {t.of} {projects.length}
            </span>
          </p>
          <button
            className="projects-arrow"
            type="button"
            aria-label={t.nextProject}
            disabled={page >= projects.length - 1}
            onClick={() => go(page + 1)}
          >
            <Arrow direction="next" />
          </button>
        </div>
      ) : null}
    </section>
  );
}

const cvEntries = [
  {
    years: "2025–now",
    place: "Siemens",
    note: "Software for managing the power grid",
  },
  {
    years: "2024",
    place: "Bundesrechenzentrum",
    note: "Software for Austria’s Ministry of Social Affairs",
  },
  {
    years: "2022–2024",
    place: "IBB Adaptive Solutions",
    note: "Software for managing terms between companies",
  },
  {
    years: "2020–2022",
    place: "Focus Market Research",
    note: "Software surrounding data collection",
  },
];

const languages: { lang: Lang; code: string; label: string }[] = [
  { lang: "en", code: "en", label: "English" },
  { lang: "de", code: "de", label: "Deutsch" },
  { lang: "bs", code: "bs", label: "Bosanski" },
];

function ConnectSheet({ t, onClose }: { t: Copy; onClose: () => void }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 480);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="sheet" role="presentation" onClick={onClose}>
      <div
        className={`sheet-card connect-card${ready ? " is-ready" : ""}`}
        role="dialog"
        aria-label={t.connect}
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sheet-actions">
          <a className="sheet-link" href={mailHref}>
            <span className="sheet-icon">{links[0].icon}</span>
            <span>{t.mail}</span>
          </a>
          <a className="sheet-link sheet-phone-mobile" href={phoneHref}>
            <span className="sheet-icon">{phoneIcon}</span>
            <span>{t.phone}</span>
          </a>
          <a className="sheet-link sheet-phone-desktop" href={phoneHref}>
            <span className="sheet-qr">
              <img src="/phone-qr.svg" alt="" width={58} height={58} />
            </span>
            <span>{t.phoneScan}</span>
          </a>
          <a className="sheet-link" href={links[1].href} target="_blank" rel="noreferrer">
            <span className="sheet-icon">{links[1].icon}</span>
            <span>{links[1].label}</span>
          </a>
        </div>
        <div className="sheet-details">
          <p>
            <span>{t.phone}</span>
            <a href={phoneHref}>{phoneDisplay}</a>
          </p>
          <p>
            <span>{t.mail}</span>
            <a href={mailHref}>{mailDisplay}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function LanguageSheet({
  t,
  lang,
  page,
  onClose,
}: {
  t: Copy;
  lang: Lang;
  page: Page;
  onClose: () => void;
}) {
  return (
    <div className="sheet" role="presentation" onClick={onClose}>
      <div
        className="sheet-card"
        role="dialog"
        aria-label={t.language}
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {languages.map((item) => (
          <a
            key={item.lang}
            className="sheet-link"
            href={hrefFor(item.lang, page)}
            aria-current={item.lang === lang ? "page" : undefined}
          >
            <span className="sheet-icon lang-mark">{item.code}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Header({
  t,
  lang,
  page,
  onConnect,
  onLanguage,
}: {
  t: Copy;
  lang: Lang;
  page: Page;
  onConnect: () => void;
  onLanguage: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const section = (id: string) => (page === "home" ? `#${id}` : `/${lang}#${id}`);

  useEffect(() => {
    if (!menuOpen) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 801px)");

    function onChange() {
      if (query.matches) setMenuOpen(false);
    }

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openConnect() {
    setMenuOpen(false);
    onConnect();
  }

  function openLanguage() {
    setMenuOpen(false);
    onLanguage();
  }

  return (
    <header className="site-header">
      <a className="site-name" href={hrefFor(lang)}>
        Ahmedin Fajic
      </a>
      <nav className="site-nav" aria-label="Navigation">
        <div className="site-nav-links">
          <a href={section("about")}>{t.nav.about}</a>
          <a href={section("services")}>{t.nav.services}</a>
          <a href={section("projects")}>{t.nav.projects}</a>
          <button type="button" aria-haspopup="dialog" onClick={openConnect}>
            {t.nav.connect}
          </button>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          onClick={(event) => {
            setMenuOpen(!menuOpen);
            event.currentTarget.blur();
          }}
        >
          <span className="menu-toggle-stage" aria-hidden="true">
            <span className={`menu-toggle-word${menuOpen ? " is-out" : " is-in"}`}>
              {t.menu}
            </span>
            <span className={`menu-toggle-mark${menuOpen ? " is-in" : " is-out"}`}>×</span>
          </span>
        </button>
        <button
          className="lang-switch"
          type="button"
          aria-label={t.language}
          aria-haspopup="dialog"
          onClick={openLanguage}
        >
          <span aria-hidden="true">A文</span>
        </button>
      </nav>
      <div
        className={`menu-panel${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        hidden={!menuOpen}
      >
        <a href={section("about")} onClick={closeMenu}>
          {t.nav.about}
        </a>
        <a href={section("services")} onClick={closeMenu}>
          {t.nav.services}
        </a>
        <a href={section("projects")} onClick={closeMenu}>
          {t.nav.projects}
        </a>
        <button type="button" aria-haspopup="dialog" onClick={openConnect}>
          {t.nav.connect}
        </button>
      </div>
    </header>
  );
}

function Footer({ t, lang }: { t: Copy; lang: Lang }) {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Ahmedin Fajic</p>
      <nav aria-label={t.legalNav}>
        <a href={hrefFor(lang, "impressum")}>{t.imprint}</a>
        <a href={hrefFor(lang, "datenschutz")}>{t.privacy}</a>
      </nav>
    </footer>
  );
}

function Legal({
  t,
  lang,
  page,
  title,
  onConnect,
  onLanguage,
  children,
}: {
  t: Copy;
  lang: Lang;
  page: Page;
  title: string;
  onConnect: () => void;
  onLanguage: () => void;
  children: ReactNode;
}) {
  return (
    <>
      <Header t={t} lang={lang} page={page} onConnect={onConnect} onLanguage={onLanguage} />
      <main className="legal">
        <h1>{title}</h1>
        {children}
      </main>
      <Footer t={t} lang={lang} />
    </>
  );
}

function App() {
  const { lang, page } = readRoute(window.location.pathname);
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [cv, setCv] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = page === "home" ? "Ahmedin Fajic" : `${page === "impressum" ? t.imprint : t.privacy} — Ahmedin Fajic`;
  }, [lang, page, t]);

  useEffect(() => {
    const image = new Image();
    image.decoding = "async";
    image.src = "/portrait.png";
  }, []);

  useEffect(() => {
    if (!open && !cv && !langOpen) return;

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      setCv(false);
      setLangOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, cv, langOpen]);

  function showConnect() {
    setLangOpen(false);
    setOpen(true);
  }

  function showLanguage() {
    setOpen(false);
    setCv(false);
    setLangOpen(true);
  }

  const sheets = (
    <>
      {open ? <ConnectSheet t={t} onClose={() => setOpen(false)} /> : null}
      {langOpen ? (
        <LanguageSheet t={t} lang={lang} page={page} onClose={() => setLangOpen(false)} />
      ) : null}
    </>
  );

  if (page === "impressum") {
    return (
      <>
        <Legal
          t={t}
          lang={lang}
          page={page}
          title={t.imprint}
          onConnect={showConnect}
          onLanguage={showLanguage}
        >
          <p>
            <span>{t.impName}</span>
            Ahmedin Fajić
          </p>
          <p>
            <span>{t.impAddress}</span>
            Lorenz-Müller-Gasse 2/4/24, 1200 Wien, Österreich
          </p>
          <p>
            <span>{t.impEmail}</span>
            <a href="mailto:ahmedinfajic@gmail.com">ahmedinfajic@gmail.com</a>
          </p>
          <p>
            <span>{t.impPurpose}</span>
            {t.impPurposeText}
          </p>
          <p>
            <span>{t.impAuthority}</span>
            Magistrat der Stadt Wien, Magistratisches Bezirksamt für den 2./20. Bezirk
          </p>
          <p>
            <span>{t.impLaw}</span>
            {t.impLawText}{" "}
            <a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer">
              www.ris.bka.gv.at
            </a>
          </p>
          <p>
            <span>{t.impMember}</span>
            Wirtschaftskammer Wien
          </p>
          <p>
            <span>{t.impGisa}</span>
            39944122
          </p>
        </Legal>
        {sheets}
      </>
    );
  }

  if (page === "datenschutz") {
    return (
      <>
        <Legal
          t={t}
          lang={lang}
          page={page}
          title={t.privacy}
          onConnect={showConnect}
          onLanguage={showLanguage}
        >
          {t.privacySections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </Legal>
        {sheets}
      </>
    );
  }

  return (
    <>
      <Header t={t} lang={lang} page={page} onConnect={showConnect} onLanguage={showLanguage} />
      <svg className="hero-filter" width="0" height="0" aria-hidden="true">
        <filter id="hero-sharpen" colorInterpolationFilters="sRGB">
          <feConvolveMatrix
            order="3"
            kernelMatrix="0 -0.12 0 -0.12 1.48 -0.12 0 -0.12 0"
            preserveAlpha="true"
          />
          <feComponentTransfer>
            <feFuncR type="gamma" amplitude="1" exponent="1.32" offset="0" />
            <feFuncG type="gamma" amplitude="1" exponent="1.32" offset="0" />
            <feFuncB type="gamma" amplitude="1" exponent="1.32" offset="0" />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.08" intercept="-0.04" />
            <feFuncG type="linear" slope="1.08" intercept="-0.04" />
            <feFuncB type="linear" slope="1.08" intercept="-0.04" />
          </feComponentTransfer>
        </filter>
      </svg>
      <section className="hero">
        <div className="hero-copy">
          <p>{t.hero}</p>
          <div className="hero-actions">
            <button className="hero-cta" type="button" onClick={showConnect}>
              {t.connect}
            </button>
            <a className="hero-cta hero-cta-line" href="#services">
              {t.servicesButton}
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/glass.jpg?v=6" alt="" />
        </div>
      </section>

      {sheets}

      <About t={t} onCv={() => setCv(true)} />

      {cv ? (
        <div className="sheet" role="presentation" onClick={() => setCv(false)}>
          <div
            className="sheet-card cv-card"
            role="dialog"
            aria-label={t.cvLabel}
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="cv-close" type="button" onClick={() => setCv(false)}>
              {t.close}
            </button>
            <img
              className="cv-photo"
              src="/portrait.png"
              alt=""
              width={1280}
              height={720}
              decoding="sync"
              fetchPriority="high"
            />
            <div className="cv-body">
              <p className="cv-name">Ahmedin Fajic</p>
              <ol className="cv-line">
                {cvEntries.map((entry, index) => (
                  <li key={entry.place}>
                    <span className="cv-years">{t.cvYears[index]}</span>
                    <span className="cv-place">{entry.place}</span>
                    <span className="cv-note">{t.cvNotes[index]}</span>
                  </li>
                ))}
              </ol>
              <div className="cv-foot">
                <p>
                  <span>{t.study}</span>
                  {t.studyText}
                </p>
                <p>
                  <span>{t.school}</span>
                  {t.schoolText}
                </p>
                <p>
                  <span>{t.languages}</span>
                  {t.languagesText}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Services t={t} onConnect={showConnect} />
      <Projects t={t} />
      <section className="closing" aria-label={t.closingLabel}>
        <p className="closing-label">{t.closingLabel}</p>
        <p className="closing-lead">{t.closing}</p>
        <a href="mailto:contact@ahmedinfajic.com">contact@ahmedinfajic.com</a>
        <p className="closing-note">{t.closingNote}</p>
      </section>
      <Footer t={t} lang={lang} />
    </>
  );
}

export default App;
