import { useEffect, useState } from "react";

const roles = ["Software", "Design", "Development", "Research"];

const projects = [
  {
    name: "Stemperl",
    note: "Built with a friend. A fast, simple way to collect stamps.",
    href: "https://stemperl.at",
    preview: "/previews/stemperl.jpg",
  },
  {
    name: "My Digital Menus",
    note: "Inspired by vintage letterboards.",
    href: "https://mydigitalmenus.at",
    preview: "/previews/menus.jpg",
  },
  {
    name: "Raistell",
    note: "A website for a client.",
    href: "https://raistell.de",
    preview: "/previews/raistell.jpg",
  },
  {
    name: "Wiener Entkernung",
    note: "A website for a client.",
    href: "https://wiener-entkernung.at",
    preview: "/previews/entkernung.jpg",
  },
];

const links = [
  {
    label: "Mail",
    href: "mailto:hello@ahmedinfajic.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" />
        <path d="M4 6.4 12 13l8-6.6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ahmedinfajic",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmedinfajic",
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

function Projects() {
  const [page, setPage] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 720px)");

    function apply() {
      setMobile(query.matches);
      setPage(0);
    }

    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const visible = mobile ? projects.slice(page, page + 1) : projects;

  return (
    <section className="projects" aria-label="Projects">
      <p className="projects-label">Projects</p>
      <div className="projects-row">
        {mobile ? (
          <button
            className="projects-arrow"
            type="button"
            aria-label="Previous project"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            <Arrow direction="previous" />
          </button>
        ) : null}
        <ul>
          {visible.map((project) => (
            <li key={project.href}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <img className="project-preview" src={project.preview} alt="" />
                <span className="project-name">{project.name}</span>
                <span className="project-note">{project.note}</span>
                <span className="project-host">
                  {project.href.replace("https://", "")}
                </span>
              </a>
            </li>
          ))}
        </ul>
        {mobile ? (
          <button
            className="projects-arrow"
            type="button"
            aria-label="Next project"
            disabled={page >= projects.length - 1}
            onClick={() => setPage(page + 1)}
          >
            <Arrow direction="next" />
          </button>
        ) : null}
      </div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <div className="page">
      <div className="glass-light" aria-hidden="true">
        <div className="glass-light-drift">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <g transform="rotate(26 1080 30)">
              <rect x="760" y="-220" width="70" height="1480" fill="#e6b22e" opacity="0.92" />
              <rect x="870" y="-220" width="96" height="1480" fill="#e07b78" opacity="0.72" />
              <rect x="1004" y="-220" width="16" height="1480" fill="#6f9652" opacity="0.8" />
              <rect x="1060" y="-220" width="84" height="1480" fill="#f0c84a" opacity="0.88" />
              <rect x="1184" y="-220" width="52" height="1480" fill="#e8a24a" opacity="0.58" />
              <rect x="1276" y="-220" width="20" height="1480" fill="#c85d66" opacity="0.55" />
              <rect x="1336" y="-220" width="78" height="1480" fill="#edd07a" opacity="0.7" />
            </g>
          </svg>
        </div>
      </div>

      <header className="nav">
        <p className="name">Ahmedin Fajic</p>
        <button
          className="connect"
          type="button"
          aria-expanded={open}
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          connect
        </button>
      </header>

      <ul className="roles">
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>

      <div className="photo">
        <img src="/portrait.png?v=6" alt="" />
      </div>

      {open ? (
        <div className="sheet" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="sheet-card"
            role="dialog"
            aria-label="Connect"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            {links.map((link) => (
              <a
                key={link.label}
                className="sheet-link"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="sheet-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>

    <Projects />
    </>
  );
}

export default App;
