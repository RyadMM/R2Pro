import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function SectionContainer({
  id,
  className,
  children,
  withGlass = false,
  withGradient = false,
}: SectionContainerProps & { withGlass?: boolean; withGradient?: boolean }) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full", // Suppression de toute propriété qui pourrait créer un contexte de défilement
        withGlass && "glass-effect",
        withGradient && "subtle-gradient",
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">{children}</div>
    </section>
  )
}

