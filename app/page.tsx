import { AboutSection } from "@/components/AboutSection";
import AdaptedReviewSection from "@/components/AdaptedReviewSection";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Realisations } from "@/components/Realisations";
import { Services } from "@/components/Services";
import { SoumissionCTA } from "@/components/SoumissionCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Hero className="hero-section" />
      <Services />
      <AboutSection />
      <Realisations />
      <SoumissionCTA />
      <AdaptedReviewSection />
      <Contact />
      <FAQ />
    </div>
  );
}
