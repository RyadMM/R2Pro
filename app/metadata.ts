import type { Metadata } from "next"

const siteConfig = {
  name: "R2Pro | Expert en revêtement extérieur au Québec",
  description:
    "Expert en revêtement extérieur et intérieur au Québec - Installation professionnelle de vinyle, aluminium, bois, armoires de cuisine et plus. Service à Montréal, Laval, Rive-Nord et Rive-Sud.",
  url: "https://r2pro.ca",
  ogImage: "https://r2pro.ca/og-image.jpg",
}

const isolationExterieureMetadata: Metadata = {
  title: "Isolation Extérieure | R2Pro",
  description:
    "Améliorez l'efficacité énergétique de votre maison avec l'isolation extérieure par R2Pro. Solutions professionnelles pour réduire vos factures d'énergie.",
  keywords: [
    "isolation extérieure",
    "efficacité énergétique",
    "revêtement extérieur",
    "R2Pro",
    "Montréal",
    "Laval",
    "Rive-Nord",
    "Rive-Sud",
  ],
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...isolationExterieureMetadata,
  title: {
    default: siteConfig.name,
    template: "%s | R2Pro",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "R2Pro - Expert en revêtement extérieur au Québec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
