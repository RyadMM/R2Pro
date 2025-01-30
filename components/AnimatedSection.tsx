import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideIn" | "scaleIn" | "rotateIn"
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  slideIn: {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  rotateIn: {
    initial: { rotate: -10, opacity: 0 },
    whileInView: { rotate: 0, opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function AnimatedSection({ children, className, animation = "fadeIn" }: AnimatedSectionProps) {
  return (
    <motion.div className={className} {...animations[animation]}>
      {children}
    </motion.div>
  )
}

