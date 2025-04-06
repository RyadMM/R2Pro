"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    // Fonction pour gérer le défilement vers l'ancre
    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        // Petit délai pour s'assurer que le DOM est complètement chargé
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }

    // Exécuter au chargement initial
    scrollToHash()

    // Ajouter un écouteur d'événements pour les changements d'URL
    window.addEventListener("hashchange", scrollToHash)

    return () => {
      window.removeEventListener("hashchange", scrollToHash)
    }
  }, [pathname])
}

