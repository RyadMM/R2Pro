"use client"

import Image from "next/image"
import Link from "next/link"

interface ContactCTAProps {
  backgroundImage?: string
  title?: string
  subtitle?: string
}

export function ContactCTA({
  backgroundImage = "/images/cta-background.jpg",
  title = "Prêt à transformer votre extérieur?",
  subtitle = "Contactez-nous dès aujourd'hui pour une soumission gratuite",
}: ContactCTAProps) {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Contactez R2Pro"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">{title}</h2>
          <p className="text-xl text-white/90 mb-8">{subtitle}</p>

          <Link href="/contact#contact-form">
            <button className="bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-300 flex items-center mx-auto shadow-lg border-2 border-white/80">
              <span>Demander une soumission</span>
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
