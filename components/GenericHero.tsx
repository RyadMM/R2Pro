"use client"

import { AnimatedHeroContent } from "@/components/AnimatedHeroContent";
import { OptimizedImage } from "@/components/OptimizedImage";
import { motion } from "framer-motion"; // Import motion
import type { ReactNode } from "react";

interface GenericHeroProps {
  backgroundImageSrc: string
  backgroundImageAlt: string
  title: ReactNode // Changed to ReactNode
  subtitle: ReactNode
  renderButtons?: () => ReactNode
  // renderAccessory prop removed
  showScrollIndicator?: boolean // Added prop to control indicator visibility
  className?: string
  heightClass?: string
  overlayOpacityClass?: string // e.g., "bg-opacity-50", "bg-opacity-70"
  contentAlignment?: "center" | "left" // Default to left for most pages, center for homepage
  imagePriority?: boolean
  imageSizes?: string
  imageClassName?: string
}

export function GenericHero({
  backgroundImageSrc,
  backgroundImageAlt,
  title,
  subtitle,
  renderButtons, // Changed from buttons to renderButtons
  heightClass = "h-screen min-h-[600px]",
  overlayOpacityClass = "bg-opacity-50", // Default overlay
  contentAlignment = "left", // Default to left
  imagePriority = false,
  imageSizes,
  imageClassName = "object-cover",
  className,
  showScrollIndicator = true, // Default to true
}: GenericHeroProps) {
  // When contentAlignment is center, add items-center to center the AnimatedHeroContent block itself
  const alignmentClasses = contentAlignment === "center" ? "justify-center items-center text-center" : "justify-center";
  const containerClasses = `container mx-auto px-4 h-full flex flex-col ${alignmentClasses} relative`; // Keep relative for potential absolute positioning inside

  return (
    <section className={`relative ${heightClass} w-full ${className || ""}`}>
      <div className="absolute inset-0">
        <OptimizedImage
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          fill
          priority={imagePriority}
          fetchpriority={imagePriority ? "high" : "auto"}
          className={imageClassName}
          sizes={imageSizes || "(max-width: 768px) 100vw, 50vw"}
        />
        <div className={`absolute inset-0 bg-black ${overlayOpacityClass}`}></div>
      </div>
      {/* Main content container */}
      <div className="absolute inset-0 flex items-center">
        <div className={containerClasses}>
          <AnimatedHeroContent title={title} subtitle={subtitle} renderButtons={renderButtons} />
          {/* Accessory rendering removed from here */}
        </div>
      </div>

      {/* Scroll Indicator - Rendered directly within GenericHero, positioned relative to the main section */}
      {showScrollIndicator && (
         <div className="absolute bottom-[calc(10vh+env(safe-area-inset-bottom))] left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center z-10"> {/* Ensure z-index if needed */}
            <motion.svg
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </div>
      )}
    </section>
  )
}
