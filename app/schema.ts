export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://r2pro.ca/#organization",
    name: "R2Pro",
    description:
      "Expert en revêtement extérieur et intérieur au Québec - Installation professionnelle de vinyle, aluminium, bois, armoires de cuisine et plus.",
    url: "https://r2pro.ca",
    logo: "https://r2pro.ca/logo.png",
    image: "https://r2pro.ca/og-image.jpg",
    telephone: "+1-514-666-7772",
    email: "info@r2pro.ca",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C.P. 235-211 BOUL. Brien",
      addressLocality: "Repentigny",
      addressRegion: "QC",
      postalCode: "J6A0A4",
      addressCountry: "CA",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Montréal",
      },
      {
        "@type": "City",
        name: "Laval",
      },
      {
        "@type": "City",
        name: "Rive-Nord",
      },
      {
        "@type": "City",
        name: "Rive-Sud",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  }
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Installation de revêtement extérieur",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "R2Pro",
      url: "https://r2pro.ca",
    },
    areaServed: {
      "@type": "State",
      name: "Québec",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de revêtement",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation de revêtement en vinyle",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation de revêtement en aluminium",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation de revêtement en bois",
          },
        },
      ],
    },
  }
}

