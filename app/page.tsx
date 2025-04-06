"use client"

import { APropos } from "@/components/APropos"
import { Contact } from "@/components/Contact"
import { FAQ } from "@/components/FAQ"
import { Hero } from "@/components/Hero"
import { Realisations } from "@/components/Realisations"
import { Services } from "@/components/Services"
import { Temoignages } from "@/components/Temoignages"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Realisations />
      <Temoignages />
      <APropos />
      <Contact />
      <FAQ />
    </>
  )
}

