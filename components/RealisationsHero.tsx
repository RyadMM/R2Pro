"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/ui/custom-button"
import Link from "next/link"

interface RealisationsHeroProps {
  title: string
  description: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
}

export function RealisationsHero({
  title,
  description,
  showButton = true,
  buttonText = "Demander un devis",
  buttonLink = "/contact",
}: RealisationsHeroProps) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Image src="/images/realisations-hero.jpg" alt="Nos réalisations" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">{description}</p>
          {showButton && (
            <Link
              href={
                buttonLink.includes("#")
                  ? buttonLink
                  : buttonLink.includes("contact")
                    ? `${buttonLink}#contact-form`
                    : "/contact#contact-form"
              }
              onClick={(e) => {
                // Si on est déjà sur la page contact, empêcher la navigation et scroller directement
                if (window.location.pathname === "/contact" && buttonLink.includes("contact")) {
                  e.preventDefault()
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <CustomButton
                size="lg"
                className="bg-r2pro hover:bg-r2pro-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 group"
              >
                <span className="flex items-center">
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </CustomButton>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}

