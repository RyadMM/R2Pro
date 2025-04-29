"use client"

"use client"

import { CustomButton } from "@/components/CustomButton"
import { ButtonVariant } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SoumissionCTA() {
  // Vérification du chemin de l'image dans la console pour débogage

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Contactez-nous pour une soumission"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Soumissions</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Obtenez une estimation précise et sans engagement pour votre projet de revêtement extérieur
            </p>

            <motion.div
              className="inline-block"
              variants={{
                pulse: {
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                },
              }}
              initial="pulse"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact#contact-form">
                <CustomButton
                  variant={"primary" as ButtonVariant}
                  className="py-4 px-8 md:px-6 rounded-full shadow-lg flex items-center justify-center"
                >
                  Parlez à un expert dès aujourd'hui
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </CustomButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
