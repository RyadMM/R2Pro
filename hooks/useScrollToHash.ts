"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function useScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    // Fonction pour gérer le défilement vers l'ancre
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Petit délai pour s'assurer que le DOM est complètement chargé
        // et que les animations de transition sont potentiellement terminées.
        setTimeout(() => {
          try {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          } catch (e) {
            console.error("Error scrolling to hash:", e);
          }
        }, 150); // Augmenté légèrement le délai
      }
    };

    // Exécuter seulement si un hash existe au chargement initial ou changement de pathname
    if (window.location.hash) {
      scrollToHash();
    }

    // Ajouter un écouteur d'événements pour les changements de hash explicites
    window.addEventListener("hashchange", scrollToHash);

    // Nettoyer l'écouteur
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    }
  }, [pathname])
}
