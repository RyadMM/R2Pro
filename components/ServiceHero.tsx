"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/NavBar"

interface ServiceHeroProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
  ctaIcon?: ReactNode
}

export function ServiceHero({ title, description, ctaText, ctaLink, backgroundImage, ctaIcon }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen">
      {/* Image d'arrière-plan avec priorité de chargement */}
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay avec contenu */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex flex-col">
          <NavBar />
          <div className="flex-grow flex items-center">
            <div className="max-w-2xl">
              {/* Titre avec animation simplifiée */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading">{title}</h1>

              {/* Description avec animation simplifiée */}
              <p className="text-xl mb-8 text-white font-sans">{description}</p>

              {/* Bouton CTA */}
              <div className="inline-block">
                <div className="relative">
                  <Link href="/contact#contact-form">
                    <button className="bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-base md:text-lg transition-colors duration-300 flex items-center shadow-lg border-2 border-white/80 group relative z-10">
                      {ctaIcon && <span className="mr-2 relative z-10">{ctaIcon}</span>}
                      <span className="relative z-10">{ctaText}</span>
                      <span className="ml-2 relative z-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

