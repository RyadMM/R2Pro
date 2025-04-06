"use client"

import { useEffect } from "react"

export function useImagePreloader(imagePaths: string[]) {
  useEffect(() => {
    // Fonction pour précharger une image
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    }

    // Précharger toutes les images en parallèle
    const preloadAll = async () => {
      try {
        await Promise.all(imagePaths.map((path) => preloadImage(path)))
        console.log("Images préchargées avec succès")
      } catch (error) {
        console.error("Erreur lors du préchargement des images:", error)
      }
    }

    preloadAll()
  }, [imagePaths])
}

