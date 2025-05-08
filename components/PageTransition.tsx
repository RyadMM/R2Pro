"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence> {/* REMOVED mode="wait" */}
      <motion.div
        key={pathname}
        className="flex-grow flex flex-col w-full relative" // Keep position: relative
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, position: "absolute" }} // RE-ADDED position: absolute
        transition={{ duration: 0.4, ease: "easeInOut" }} // Keep increased duration
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
