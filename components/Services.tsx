"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ServiceCard } from "./ServiceCard"
import { SectionContainer } from "@/components/SectionContainer"

const servicesData = [
  {
    title: "Revêtements Extérieurs",
    description: "Installation et réparation de revêtements en vinyle, aluminium, bois et plus.",
    imageUrl: "/images/services/service-card-revetements.jpg",
    link: "/services/revetements-exterieurs",
  },
  {
    title: "Portes et Fenêtres",
    description: "Installation de portes et fenêtres écoénergétiques pour votre confort.",
    imageUrl: "/images/services/service-card-portes-fenetres.jpg",
    link: "/services/portes-fenetres",
  },
  {
    title: "Soffites et Fascias",
    description: "Protection et ventilation optimale pour votre toiture.",
    imageUrl: "/images/services/service-card-soffites.jpg",
    link: "/services/soffites-fascias",
  },
  {
    title: "Gouttières",
    description: "Installation et entretien de gouttières pour protéger votre maison.",
    imageUrl: "/images/services/service-card-gouttieres.jpg",
    link: "/services/gouttieres",
  },
  {
    title: "Isolation Extérieure",
    description: "Solutions d'isolation pour une efficacité énergétique optimale.",
    imageUrl: "/images/services/service-card-isolation.jpg",
    link: "/services/isolation-exterieure",
  },
  {
    title: "Peinture au Spray",
    description: "Finition impeccable pour tous vos projets de peinture extérieure.",
    imageUrl: "/images/services/service-card-peinture.jpg",
    link: "/services/peinture-spray",
  },
  {
    title: "Calfeutrage",
    description: "Protection contre les infiltrations d'eau et d'air.",
    imageUrl: "/images/services/service-card-calfeutrage.jpg",
    link: "/services/calfeutrage",
  },
  {
    title: "Design 3D",
    description: "Visualisez votre projet avant sa réalisation.",
    imageUrl: "/images/services/service-card-design.jpg",
    link: "/services/design-3d",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <SectionContainer id="services" className="py-16 md:py-24 section-alt">
      <div ref={ref} className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-r2pro-800 relative inline-block pb-2">
            Nos Services
            <div
              className={`absolute -bottom-1 left-0 h-1 bg-r2pro-500 rounded-full transition-all duration-1000 ease-out ${isInView ? "w-full" : "w-0"}`}
            />
          </h2>
          <p className="text-center text-gray-800 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Des solutions complètes et professionnelles pour transformer votre maison et augmenter sa valeur à long
            terme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

