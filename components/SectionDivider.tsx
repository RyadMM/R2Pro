import Image from "next/image"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  inverted?: boolean
}

export function SectionDivider({ className, inverted = false }: SectionDividerProps) {
  return (
    <div className={cn("relative h-24 w-full overflow-hidden", className)}>
      <div className="absolute inset-0 w-full">
        <Image
          src="/images/wave-pattern.svg"
          alt=""
          fill
          className={cn("object-cover object-center", inverted && "rotate-180")}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

