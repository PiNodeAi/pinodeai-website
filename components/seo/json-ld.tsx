import { siteUrl, companyName, companyDescription, contactInfo, socialLinks } from "@/lib/constants";

/**
 * JSON-LD structured data for Organization and WebSite.
 * Renders in document head for rich results and knowledge panel.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    description: companyDescription,
    url: siteUrl,
    logo: `${siteUrl}/pienode_logo_2.svg`,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    sameAs: [
      socialLinks.linkedin,
      socialLinks.twitter,
      socialLinks.github,
      socialLinks.facebook,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      email: contactInfo.email,
      telephone: contactInfo.phone,
      areaServed: "Worldwide",
      availableLanguage: "English",
      contactType: "customer service",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyName,
    description: companyDescription,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/pienode_logo_2.svg`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
