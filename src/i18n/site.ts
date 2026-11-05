export const site = "https://ahmedinfajic.com";

export const langs = ["de", "en", "bs"] as const;

export type Lang = (typeof langs)[number];

export type PageId = "home" | "cv" | "impressum" | "datenschutz" | "portal";

export const pages: PageId[] = ["home", "cv", "impressum", "datenschutz", "portal"];

export const portalSlug: Record<Lang, string> = {
  de: "mandantenportal",
  en: "client-portal",
  bs: "portal-za-klijente",
};

export const ogLocales: Record<Lang, string> = {
  de: "de_AT",
  en: "en_GB",
  bs: "bs_BA",
};

export const email = "connect@ahmedinfajic.com";
export const emailHref = `mailto:${email}`;
export const phoneDisplay = "+43 677 634 72758";
export const phoneHref = "tel:+4367763472758";
export const linkedinUrl = "https://linkedin.com/in/ahmedin-fajic";

/**
 * TODO: Kalenderlink einsetzen, sobald ein Terminlink feststeht.
 * Bis dahin öffnet der Button die E-Mail-Adresse.
 */
export const meetingHref = emailHref;

export function isLang(value: string | undefined): value is Lang {
  return langs.includes(value as Lang);
}

export function pathFor(lang: Lang, page: PageId = "home"): string {
  if (page === "portal") return `/${lang}/${portalSlug[lang]}/`;
  if (lang === "de" && page === "home") return "/";
  return page === "home" ? `/${lang}/` : `/${lang}/${page}/`;
}

export function absoluteUrl(lang: Lang, page: PageId = "home"): string {
  return `${site}${pathFor(lang, page)}`;
}
