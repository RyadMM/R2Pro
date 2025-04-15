"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// SVG de l'icône Google
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="w-4 h-4 mr-1">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
)

interface ProjectCardProps {
  id: number
  title: string
  description: string
  imageUrl: string
  category?: string
  clientName?: string
  clientReview?: string
  clientRating?: number
  href: string
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  category,
  clientName = "Client satisfait",
  clientReview = "Travail impeccable et service professionnel. Je recommande vivement!",
  clientRating = 5,
  href,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col">
        {/* Image principale avec catégorie */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />

          {/* Overlay avec catégorie */}
          {category && (
            <div className="absolute top-4 left-4 bg-r2pro text-white text-xs font-medium px-3 py-1 rounded-full z-10">
              {category === "revetement"
                ? "Revêtement"
                : category === "peinture"
                  ? "Peinture"
                  : category === "calfeutrage"
                    ? "Calfeutrage"
                    : category === "gouttieres"
                      ? "Gouttières"
                      : category === "isolation"
                        ? "Isolation"
                        : category === "portes-fenetres"
                          ? "Portes et Fenêtres"
                          : category === "soffites-fascias"
                            ? "Soffites et Fascias"
                            : category}
            </div>
          )}
        </div>

        {/* Contenu principal */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-r2pro-800 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>

          {/* Séparateur */}
          <div className="border-t border-gray-100 my-3 mt-auto"></div>

          {/* Avis client avec badge Google */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1 bg-white p-1 rounded-full shadow-sm">
              <GoogleIcon />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                {/* Étoiles de notation */}
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < clientRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{clientName}</span>
              </div>
              <p className="text-xs text-gray-700 italic">{clientReview}</p>
            </div>
          </div>
        </div>

        {/* Lien et bouton voir plus */}
        <Link href={href} className="absolute inset-0 w-full h-full z-10" aria-label={`Voir les détails de ${title}`}>
          <span className="sr-only">Voir les détails</span>
        </Link>

        {/* Bouton voir plus - Correction pour masquer complètement au chargement initial */}
        <div
          className={`absolute bottom-0 right-0 bg-r2pro text-white p-3 rounded-tl-xl z-20 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
            }`}
        >
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </div>
    </motion.div>
  )
}
