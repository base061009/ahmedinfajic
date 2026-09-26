export type Lang = "en" | "de" | "bs";
export type Page = "home" | "impressum" | "datenschutz";

const langs: Lang[] = ["en", "de", "bs"];

export function readRoute(pathname: string): { lang: Lang; page: Page } {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  const known = langs.includes(first as Lang);
  const lang: Lang = known ? (first as Lang) : "en";
  const leaf = (known ? parts[1] : parts[0]) ?? "";
  const page: Page = leaf === "impressum" || leaf === "datenschutz" ? leaf : "home";
  return { lang, page };
}

export function hrefFor(lang: Lang, page: Page = "home") {
  return page === "home" ? `/${lang}` : `/${lang}/${page}`;
}
