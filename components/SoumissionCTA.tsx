"use client"

import { motion } from "framer-motion"
import Image from "next/image"
// Ajouter l'import pour notre nouveau composant
import { ContactButton } from "@/components/ContactButton"

export function SoumissionCTA() {
  // Vérification du chemin de l'image dans la console pour débogage
  console.log("Chemin de l'image CTA:", "/images/services/revetements-exterieurs/hero-revetement.jpg")

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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <ContactButton
                text="Demander une soumission gratuite"
                variant="white"
                className="py-4 px-8 rounded-full shadow-lg"
                href="/contact#contact-form"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

