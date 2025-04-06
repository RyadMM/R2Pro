"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TabOption {
  value: string
  label: string
}

interface ModernTabBarProps {
  options: TabOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function ModernTabBar({ options, value, onChange, className }: ModernTabBarProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  })
  const [containerWidth, setContainerWidth] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showLeftShadow, setShowLeftShadow] = useState(false)
  const [showRightShadow, setShowRightShadow] = useState(false)

  // Mettre à jour la position de l'indicateur
  const updateIndicator = () => {
    if (!tabsRef.current) return

    const activeTab = tabsRef.current.querySelector(`[data-value="${value}"]`) as HTMLElement
    if (activeTab) {
      const { offsetLeft, offsetWidth } = activeTab
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft,
        opacity: 1,
      })
    }
  }

  // Vérifier s'il faut afficher les ombres de défilement
  const checkScrollShadows = () => {
    if (!tabsRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current
    setScrollPosition(scrollLeft)
    setContainerWidth(clientWidth)
    setShowLeftShadow(scrollLeft > 10)
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  // Défiler vers l'onglet actif
  const scrollToActiveTab = () => {
    if (!tabsRef.current) return

    const activeTab = tabsRef.current.querySelector(`[data-value="${value}"]`) as HTMLElement
    if (activeTab) {
      const containerWidth = tabsRef.current.clientWidth
      const tabLeft = activeTab.offsetLeft
      const tabWidth = activeTab.offsetWidth

      // Centrer l'onglet actif
      tabsRef.current.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      })
    }
  }

  // Initialiser les écouteurs d'événements
  useEffect(() => {
    const tabsElement = tabsRef.current
    if (tabsElement) {
      updateIndicator()
      checkScrollShadows()

      const handleScroll = () => checkScrollShadows()
      const handleResize = () => {
        updateIndicator()
        checkScrollShadows()
      }

      tabsElement.addEventListener("scroll", handleScroll)
      window.addEventListener("resize", handleResize)

      return () => {
        tabsElement.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Mettre à jour l'indicateur lorsque la valeur change
  useEffect(() => {
    updateIndicator()
    scrollToActiveTab()
  }, [value])

  return (
    <div className={cn("relative", className)}>
      {/* Conteneur principal avec ombres de défilement */}
      <div className="relative mx-auto max-w-3xl">
        {/* Ombre à gauche */}
        {showLeftShadow && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        )}

        {/* Conteneur de défilement */}
        <div
          ref={tabsRef}
          className="overflow-x-auto hide-scrollbar py-3 flex items-center justify-start md:justify-center"
          onScroll={checkScrollShadows}
        >
          <div className="inline-flex relative px-1 py-1 bg-white/80 backdrop-blur-sm rounded-full shadow-md mx-auto">
            {/* Indicateur actif */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-r2pro z-0"
              initial={{ opacity: 0 }}
              animate={{
                width: indicatorStyle.width,
                left: indicatorStyle.left,
                opacity: indicatorStyle.opacity,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Options de tabbar */}
            {options.map((option) => (
              <button
                key={option.value}
                data-value={option.value}
                onClick={() => onChange(option.value)}
                onMouseEnter={() => setHoveredTab(option.value)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  value === option.value
                    ? "text-white"
                    : hoveredTab === option.value
                      ? "text-r2pro-700"
                      : "text-gray-700 hover:text-r2pro-700",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ombre à droite */}
        {showRightShadow && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        )}
      </div>
    </div>
  )
}

