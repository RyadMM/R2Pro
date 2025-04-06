"use client"

import type React from "react"

import { useCallback } from "react"

export function useScrollToContactForm() {
  const scrollToContactForm = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Si on est déjà sur la page contact, empêcher la navigation et scroller directement
    if (window.location.pathname === "/contact") {
      e.preventDefault()
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
    }
    // Sinon, laisser la navigation se faire normalement
    // Le scrollIntoView sera géré par le composant de la page contact
  }, [])

  return scrollToContactForm
}

