"use client"

import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Realisations } from "@/components/Realisations"
import { Temoignages } from "@/components/Temoignages"
import { APropos } from "@/components/APropos"
import { Contact } from "@/components/Contact"
import { FAQ } from "@/components/FAQ"

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

