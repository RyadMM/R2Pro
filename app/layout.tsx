import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/NavBar"
import { PageTransition } from "@/components/PageTransition"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Montserrat, Roboto } from "next/font/google"
import type React from "react"; // Import React
import "./globals.css"
import { defaultMetadata } from "./metadata"
import { generateLocalBusinessSchema, generateServiceSchema } from "./schema"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema()),
          }}
        />
        <link rel="alternate" hrefLang="fr-CA" href="https://r2pro.ca" />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content="Repentigny" />
        <meta name="geo.position" content="45.7419;-73.4497" />
        <meta name="ICBM" content="45.7419, -73.4497" />
      </head>
      <body
        className={`min-h-screen bg-background font-sans antialiased flex flex-col ${montserrat.className} ${roboto.className}`}
      >
        <NavBar />
        <PageTransition>
          <main className="flex-grow">{children}</main>
        </PageTransition>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

