"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"

export function useScrollToAnchor() {
  const router = useRouter()

  // Fonction pour gérer le défilement vers une ancre sur la même page
  const scrollToAnchor = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Extraire l'ancre de l'URL
      const hashIndex = href.indexOf("#")
      if (hashIndex === -1) return

      const hash = href.substring(hashIndex + 1)
      const path = href.substring(0, hashIndex)

      // Si on est déjà sur la bonne page, empêcher la navigation et scroller directement
      if (path === "" || window.location.pathname === path || (path === "/" && window.location.pathname === "")) {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // Sinon, naviguer vers la page avec l'ancre
        router.push(href)
      }
    },
    [router],
  )

  // Effet pour gérer le défilement vers l'ancre au chargement de la page
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      // Attendre un peu que la page soit complètement chargée
      setTimeout(() => {
        const hash = window.location.hash.substring(1)
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [])

  return scrollToAnchor
}

