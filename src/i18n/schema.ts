import { copy } from "./copy";
import { email, linkedinUrl, site, type Lang } from "./site";

export function jsonLd(lang: Lang): string {
  const home = `${site}/${lang}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site}/#organization`,
        name: "Ahmedin Fajić",
        alternateName: "Ahmedin Fajic",
        url: home,
        image: `${site}/og.jpg`,
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
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
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
    ],
  };

  return JSON.stringify(data).replace(/</g, "\\u003c");
}
