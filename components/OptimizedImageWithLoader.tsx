"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { motion } from "framer-motion"

interface OptimizedImageWithLoaderProps extends Omit<ImageProps, "onLoadingComplete"> {
  lowQualitySrc?: string
  aspectRatio?: number
}

export function OptimizedImageWithLoader({
  src,
  alt,
  className,
  lowQualitySrc,
  aspectRatio,
  ...props
}: OptimizedImageWithLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Utiliser Intersection Observer pour détecter quand l'image est visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`image-${src}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [src])

  // Calculer le padding-bottom pour maintenir le ratio d'aspect
  const paddingBottom = aspectRatio ? `${(1 / aspectRatio) * 100}%` : undefined

  return (
    <div
      id={`image-${src}`}
      className={`relative overflow-hidden ${className}`}
      style={paddingBottom ? { paddingBottom } : undefined}
    >
      {/* Placeholder ou image basse qualité */}
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}

      {/* Image principale */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        {isInView && (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill={!props.width && !props.height}
            className={`object-cover ${isLoaded ? "" : "opacity-0"}`}
            onLoad={() => setIsLoaded(true)}
            {...props}
          />
        )}
      </motion.div>
    </div>
  )
}

