"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface TabBarMobileProps {
  tabs: {
    value: string
    label: string
  }[]
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function TabBarMobile({ tabs, defaultValue, value, onValueChange, className }: TabBarMobileProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [activeTab, setActiveTab] = useState(value || defaultValue)

  // Vérifier si on peut défiler à gauche ou à droite
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px de marge
  }

  // Défiler vers la gauche
  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
  }

  // Défiler vers la droite
  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
  }

  // Défiler vers l'onglet actif
  const scrollToActiveTab = () => {
    if (!scrollContainerRef.current) return

    const activeTabElement = scrollContainerRef.current.querySelector(`[data-state="active"]`) as HTMLElement
    if (activeTabElement) {
      const containerWidth = scrollContainerRef.current.clientWidth
      const tabLeft = activeTabElement.offsetLeft
      const tabWidth = activeTabElement.offsetWidth

      // Centrer l'onglet actif
      scrollContainerRef.current.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      })
    }
  }

  // Gérer le changement d'onglet
  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  // Initialiser les écouteurs d'événements
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition)
      window.addEventListener("resize", checkScrollPosition)

      // Vérifier la position initiale
      checkScrollPosition()

      // Défiler vers l'onglet actif
      setTimeout(scrollToActiveTab, 100)

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition)
        window.removeEventListener("resize", checkScrollPosition)
      }
    }
  }, [])

  // Mettre à jour lorsque la valeur change de l'extérieur
  useEffect(() => {
    if (value && value !== activeTab) {
      setActiveTab(value)
      setTimeout(scrollToActiveTab, 100)
    }
  }, [value])

  return (
    <div className={cn("relative group", className)}>
      {/* Indicateur de défilement à gauche */}
      {showLeftArrow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md border border-gray-100"
          onClick={scrollLeft}
          aria-label="Défiler vers la gauche"
        >
          <ChevronLeft className="h-5 w-5 text-r2pro-600" />
        </motion.button>
      )}

      {/* Conteneur de défilement avec effet de dégradé sur les côtés */}
      <div className="relative">
        {/* Dégradé à gauche */}
        {showLeftArrow && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-[1] pointer-events-none" />
        )}

        {/* Conteneur de défilement */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar py-2 px-4 -mx-4 flex items-center"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <TabsList className="inline-flex p-1 rounded-full bg-white shadow-md flex-nowrap">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                data-active={activeTab === tab.value}
                className="px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100 scroll-ml-4"
                style={{ scrollSnapAlign: "center" }}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Dégradé à droite */}
        {showRightArrow && (
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-[1] pointer-events-none" />
        )}
      </div>

      {/* Indicateur de défilement à droite */}
      {showRightArrow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md border border-gray-100"
          onClick={scrollRight}
          aria-label="Défiler vers la droite"
        >
          <ChevronRight className="h-5 w-5 text-r2pro-600" />
        </motion.button>
      )}
    </div>
  )
}

