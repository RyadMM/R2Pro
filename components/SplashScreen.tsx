"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function SplashScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fonction pour vérifier si les ressources critiques sont chargées
    const checkCriticalResourcesLoaded = () => {
      // Vérifier si le DOM est prêt
      if (document.readyState === "interactive" || document.readyState === "complete") {
        return true
      }
      return false
    }

    // Fonction pour masquer le splash screen dès que possible
    const hideSplashScreen = () => {
      if (checkCriticalResourcesLoaded()) {
        // Délai minimal pour permettre à l'animation de se produire
        // mais sans retarder artificiellement le chargement
        setTimeout(() => {
          setLoading(false)
        }, 800) // Réduit à 800ms pour permettre juste l'animation d'entrée
      } else {
        // Vérifier à nouveau très rapidement
        setTimeout(hideSplashScreen, 100)
      }
    }

    // Démarrer le processus de vérification immédiatement
    hideSplashScreen()

    // Fallback: masquer le splash screen après 2 secondes maximum
    // (au lieu de 8 secondes précédemment)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }} // Réduit à 0.4s
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-primary to-blue-800"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }} // Réduit à 0.3s
              className="relative mb-6 w-64 h-64" // Réduit le margin-bottom
            >
              <Image
                src="/images/logosvg.svg"
                alt="R2Pro Logo"
                fill
                className="object-contain"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 256px"
                unoptimized
              />
            </motion.div>

            {/* Suppression de la barre de progression qui ralentissait artificiellement */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }} // Réduit à 0.2s
              className="text-white text-center font-medium"
            >
              R2Pro - Experts en revêtement extérieur
            </motion.p>
          </div>

          {/* Éléments décoratifs conservés pour l'esthétique */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
