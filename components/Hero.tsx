"use client"

import { OptimizedImage } from "@/components/OptimizedImage";
import { useScrollToContactForm } from "@/hooks/useScrollToContactForm";
import { motion } from "framer-motion";
import { ArrowRight, CheckSquare, ImageIcon } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const scrollToContactForm = useScrollToContactForm();

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/hero-background.jpg"
          alt="R2Pro en action - Spécialiste de l'habitation"
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      <div className="absolute inset-0 flex items-center flex-col justify-evenly">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading bg-[url('/images/logosvg-cropped.svg')] bg-contain bg-no-repeat bg-center text-transparent">
            R2PRO
            <br />
            Experts en revêtement
          </h1>
          <p className="text-xl md:text-2xl mb-16 font-sans text-white">
            Transformez votre espace avec style et qualité
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Bouton Soumissions */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group"
            >
              {/* Effet de halo animé derrière le bouton principal */}
              <motion.div
                className="absolute inset-0 rounded-full bg-r2pro/30 blur-md opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <Link
                href="/contact#contact-form"
                onClick={(e) => scrollToContactForm(e, "/contact#contact-form")}
                className="relative z-10 flex items-center justify-center py-4 px-8 rounded-full w-full sm:w-auto bg-r2pro hover:bg-r2pro-600 text-white font-medium shadow-lg border border-r2pro-400/20 group transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-r2pro-400 to-r2pro-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="flex items-center justify-center text-base relative z-10">
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="mr-2"
                  >
                    <CheckSquare className="w-5 h-5 group-hover:animate-pulse" />
                  </motion.span>
                  <span className="mr-1">Soumissions</span>
                  <motion.span
                    className="inline-block"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </motion.span>
                </span>
              </Link>

              {/* Effet de brillance sous le bouton */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-r2pro/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Bouton Réalisations */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group mb-4"
            >
              {/* Ajout d'un effet de halo similaire pour uniformiser */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <Link
                href="/realisations"
                className="relative z-10 flex items-center justify-center py-4 px-8 rounded-full w-full sm:w-auto border-2 border-white/80 text-white bg-black/30 hover:bg-r2pro hover:text-white hover:border-r2pro font-medium transition-all duration-300"
              >
                <span className="flex items-center justify-center text-base">
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="mr-2"
                  >
                    <ImageIcon className="w-5 h-5" />
                  </motion.span>
                  <span>Réalisations</span>
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </motion.span>
                </span>
              </Link>

              {/* Ajout d'un effet de brillance similaire */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-white/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-[calc(15vh+env(safe-area-inset-bottom))] left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
              <motion.svg
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
