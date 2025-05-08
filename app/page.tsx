import { AboutSection } from "@/components/AboutSection";
import AdaptedReviewSection from "@/components/AdaptedReviewSection";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Realisations } from "@/components/Realisations";
import { Services } from "@/components/Services";
import { SoumissionCTA } from "@/components/SoumissionCTA";
import { getReviewsFromJson } from "@/lib/server/reviews";

export default async function Home() {
  const reviews = await getReviewsFromJson();

  return (
    <div className="flex-1 flex flex-col">
      <Hero className="hero-section" />
      <Services />
      <AboutSection />
      <Realisations reviews={reviews} />
      <SoumissionCTA />
      <AdaptedReviewSection reviews={reviews} />
      <Contact />
      <FAQ />
    </div>
  );
}
