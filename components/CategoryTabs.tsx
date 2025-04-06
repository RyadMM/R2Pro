"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CategoryTabsProps {
  categories: string[]
  activeCategory: string
  onChange: (category: string) => void
  className?: string
}

export function CategoryTabs({ categories, activeCategory, onChange, className }: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(true)

  // Fonction pour formater le nom de la catégorie pour l'affichage
  const formatCategoryName = (category: string) => {
    if (category === "tout") return "Tous"
    if (category === "tous") return "Tous"
    if (category === "revetement") return "Revêtement"
    if (category === "calfeutrage") return "Calfeutrage"
    if (category === "gouttieres") return "Gouttières"
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  // Vérifier si le défilement est nécessaire et mettre à jour les ombres
  const checkScroll = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeftShadow(scrollLeft > 10)
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  // Défilement vers la gauche
  const scrollLeft = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
  }

  // Défilement vers la droite
  const scrollRight = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
  }

  // Vérifier le défilement au chargement et au redimensionnement
  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  // Faire défiler jusqu'à l'onglet actif
  useEffect(() => {
    if (!scrollRef.current) return

    const activeTabElement = scrollRef.current.querySelector(`[data-category="${activeCategory}"]`)
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement as HTMLElement
      const { scrollLeft, clientWidth } = scrollRef.current

      // Centrer l'onglet actif dans la vue
      const targetScrollLeft = offsetLeft - (clientWidth - offsetWidth) / 2
      scrollRef.current.scrollTo({ left: targetScrollLeft, behavior: "smooth" })
    }

    checkScroll()
  }, [activeCategory])

  return (
    <div className={cn("relative flex justify-center w-full max-w-3xl mx-auto", className)}>
      {/* Indicateur de défilement gauche */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLeftShadow ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700"
          aria-label="Défiler vers la gauche"
        >
          <ChevronLeft size={18} />
        </button>
      </motion.div>

      {/* Conteneur principal avec ombre de défilement */}
      <div className="relative bg-white rounded-full shadow-md p-1.5 overflow-hidden max-w-full">
        {/* Ombre de défilement gauche */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-10 bg-gradient-to-r from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: showLeftShadow ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Conteneur défilable */}
        <div
          ref={scrollRef}
          className="flex space-x-1 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          onScroll={checkScroll}
        >
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                data-category={category}
                onClick={() => onChange(category)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap snap-center",
                  isActive ? "bg-r2pro text-white shadow-md" : "text-gray-700 hover:bg-gray-200",
                )}
              >
                <span className="relative z-10">{formatCategoryName(category)}</span>
              </button>
            )
          })}
        </div>

        {/* Ombre de défilement droite */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10 bg-gradient-to-l from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: showRightShadow ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Indicateur de défilement droit */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showRightShadow ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={scrollRight}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700"
          aria-label="Défiler vers la droite"
        >
          <ChevronRight size={18} />
        </button>
      </motion.div>
    </div>
  )
}

