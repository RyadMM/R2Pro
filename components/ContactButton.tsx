"use client"

import Link from "next/link"
import { useScrollToContactForm } from "@/hooks/useScrollToContactForm"
import { CustomButton } from "@/components/ui/custom-button"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface ContactButtonProps {
  text: string
  className?: string
  icon?: ReactNode
  variant?: "primary" | "secondary" | "white"
  size?: "default" | "sm" | "lg"
}

export function ContactButton({ text, className = "", icon, variant = "primary", size = "lg" }: ContactButtonProps) {
  const scrollToContactForm = useScrollToContactForm()

  // Définir les styles en fonction de la variante
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-r2pro hover:bg-r2pro-600 text-white"
      case "secondary":
        return "border-2 border-white/80 text-white bg-black/30 hover:bg-r2pro hover:text-white hover:border-r2pro"
      case "white":
        return "bg-white text-r2pro-600 hover:bg-r2pro hover:text-white border-2 border-white/80"
      default:
        return "bg-r2pro hover:bg-r2pro-600 text-white"
    }
  }

  return (
    <Link
      href="/contact#contact-form"
      onClick={(e) => scrollToContactForm(e, "/contact#contact-form")}
      className="inline-block"
    >
      <CustomButton size={size} className={`${getButtonStyles()} ${className} group`}>
        <span className="flex items-center justify-center">
          {icon && <span className="mr-2">{icon}</span>}
          {text}
          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </CustomButton>
    </Link>
  )
}

