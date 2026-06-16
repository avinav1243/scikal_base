import { siteConfig } from "@/lib/site";
import { allOfferings } from "@/lib/products";

/**
 * JSON-LD structured data (Organization + Website + Founder + Products) injected
 * into the document head. Helps search engines and AI crawlers understand the
 * brand, its people, and its catalogue.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        email: siteConfig.email,
        logo: `${siteConfig.url}/icons/icon-512.png`,
        founder: { "@type": "Person", name: siteConfig.founder },
        foundingLocation: siteConfig.origin,
        address: siteConfig.locations.map((loc) => ({
          "@type": "PostalAddress",
          addressLocality: loc.city,
          addressCountry: loc.country,
        })),
        sameAs: Object.values(siteConfig.social),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
      ...allOfferings.map((o) => ({
        "@type": "Product",
        name: o.name,
        description: o.description,
        url: `${siteConfig.url}/#${o.id}`,
        brand: { "@id": `${siteConfig.url}/#organization` },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Server-rendered static JSON — safe to inject.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
