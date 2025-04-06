"use client"
import { AboutSection } from "@/components/AboutSection"
import { Contact } from "@/components/Contact"
import { FAQ } from "@/components/FAQ"
import { Hero } from "@/components/Hero"
import { Realisations } from "@/components/Realisations"
import { Services } from "@/components/Services"
import { SoumissionCTA } from "@/components/SoumissionCTA"
import { Temoignages } from "@/components/Temoignages"

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Hero />
      <Services />
      <AboutSection />
      <Realisations />
      <SoumissionCTA />
      <Temoignages />
      <Contact />
      <FAQ />
    </div>
  )
}
