import type { ButtonHTMLAttributes } from "react"
import type React from "react"

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function CTAButton({ children, ...props }: CTAButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      {...props}
    >
      {children}
    </button>
  )
}

