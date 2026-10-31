import type { APIRoute } from "astro";
import { absoluteUrl, langs, pages } from "../i18n/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const urls = pages.flatMap((page) =>
    langs.map((lang) => {
      const loc = absoluteUrl(lang, page);
      const alternates = langs
        .map(
          (code) =>
            `    <xhtml:link rel="alternate" hreflang="${code}" href="${absoluteUrl(code, page)}"/>`,
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl("de", page)}"/>`,
        "  </url>",
      ].join("\n");
    }),
  );

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
