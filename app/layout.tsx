import { Footer } from "@/components/Footer";
import HeadComponent from "@/components/Head";
import HeroImagePreloader from "@/components/HeroImagePreloader"; // Added import
import { NavBar } from "@/components/NavBar";
import { ScrollToHashProvider } from "@/components/ScrollToHashProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat, Roboto } from "next/font/google";
import type React from "react"; // Import React
import "./globals.css";
import { defaultMetadata } from "./metadata";
import { generateLocalBusinessSchema, generateServiceSchema } from "./schema";

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
        <HeadComponent />
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        {/* Fix pour iOS Safari */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <HeroImagePreloader images={[
          { src: "/images/hero-background.jpg", sizes: "(max-width: 768px) 100vw, 50vw" },
        ]} />
      </head>
      <body
        className={`min-h-screen font-sans antialiased flex flex-col ios-scroll-fix ${montserrat.className} ${roboto.className} overflow-x-hidden`}
      >
        <div className="page-gradient"></div>
        <ScrollToHashProvider>
          <NavBar />
          <main className="flex-grow flex flex-col overflow-x-hidden w-full relative">{children}</main>
          <Footer />
        </ScrollToHashProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
