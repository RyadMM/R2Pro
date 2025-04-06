import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionAltProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionAlt({ children, className, id }: SectionAltProps) {
  return (
    <section id={id} className={cn("section-container section-alt overflow-x-hidden", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

