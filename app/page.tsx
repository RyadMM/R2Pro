import { AboutSection } from "@/components/AboutSection"
import { Contact } from "@/components/Contact"
import { FAQ } from "@/components/FAQ"
import { Hero } from "@/components/Hero"
import { Realisations } from "@/components/Realisations"
import { Services } from "@/components/Services"
import { SoumissionCTA } from "@/components/SoumissionCTA"
import { Temoignages } from "@/components/Temoignages"
import { getReviewsFromJson } from "@/lib/server/reviews"

export default async function Home() {
  const reviews = await getReviewsFromJson();

  return (
    <div className="overflow-x-hidden w-full">
      <Hero className="hero-section" />
      <Services />
      <AboutSection />
      <Realisations />
      <SoumissionCTA />
      <Temoignages reviews={reviews} />
      <Contact />
      <FAQ />
    </div>
  )
}
