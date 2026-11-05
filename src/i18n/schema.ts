import { copy } from "./copy";
import { portalCopy } from "./portal";
import { absoluteUrl, email, linkedinUrl, site, type Lang, type PageId } from "./site";

export function jsonLd(lang: Lang, page: PageId = "home"): string {
  const home = absoluteUrl(lang);
  const graph: Record<string, unknown>[] = [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site}/#organization`,
        name: "Ahmedin Fajić",
        alternateName: "Ahmedin Fajic",
        url: home,
        image: `${site}/og-${lang}.jpg`,
        email,
        telephone: "+43-677-63472758",
        foundingDate: "2026",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lorenz-Müller-Gasse 2/4/24",
          postalCode: "1200",
          addressLocality: "Wien",
          addressCountry: "AT",
        },
        founder: { "@id": `${site}/#ahmedin-fajic` },
        description: copy[lang].meta.home.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: copy[lang].servicesTitle,
          itemListElement: copy[lang].services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
            },
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email,
          telephone: "+43-677-63472758",
          availableLanguage: ["German", "English", "Bosnian"],
        },
      },
      {
        "@type": "Person",
        "@id": `${site}/#ahmedin-fajic`,
        name: "Ahmedin Fajić",
        alternateName: "Ahmedin Fajic",
        jobTitle: copy[lang].jobTitle,
        url: home,
        email,
        image: `${site}/portrait.png`,
        knowsLanguage: ["de", "en", "bs"],
        // TODO: GitHub-URL in sameAs ergänzen, sobald sie feststeht.
        sameAs: [linkedinUrl],
        worksFor: { "@id": `${site}/#organization` },
      },
  ];

  if (page === "portal") {
    const portal = portalCopy[lang];
    graph.push({
      "@type": "Service",
      serviceType: "Client portal development",
      name: portal.schemaName,
      description: portal.meta.description,
      url: absoluteUrl(lang, "portal"),
      provider: { "@id": `${site}/#organization` },
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}
