"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    // 'out' variant removed as it's no longer used
  }

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.4,
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Reverted from uniqueKey
        className="flex-grow flex flex-col w-full relative"
        initial="initial"
        animate="in"
        // exit="out" // Temporarily removed to diagnose
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
