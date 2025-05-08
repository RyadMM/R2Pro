"use client"

// import { AnimatePresence, motion } from "framer-motion" // Temporarily remove Framer Motion
// import { usePathname } from "next/navigation" // No longer needed if not using key={pathname}
import type React from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname() // No longer needed

  // All animation-related code removed for diagnostics

  return (
    <div className="flex-grow flex flex-col w-full relative">
      {children}
    </div>
  )
}
