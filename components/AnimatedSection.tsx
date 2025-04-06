"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideIn" | "scaleIn"
  delay?: number
}

export function AnimatedSection({ children, className, animation = "fadeIn", delay = 0 }: AnimatedSectionProps) {
  // Définir les animations
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.7, delay },
    },
    slideIn: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.7, delay },
    },
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      {...selectedAnimation}
      viewport={{ once: true, margin: "-50px" }}
      className={cn("", className)}
      style={{ willChange: "transform, opacity" }} // Optimisation des performances
    >
      {children}
    </motion.div>
  )
}

