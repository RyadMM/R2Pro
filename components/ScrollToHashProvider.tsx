"use client"

import { useScrollToHash } from "@/hooks/useScrollToHash"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"

export function ScrollToHashProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isNotFoundPage, setIsNotFoundPage] = useState(false)

  useEffect(() => {
    // Vérifier si nous sommes sur la page 404
    setIsNotFoundPage(pathname === "/404" || pathname === "/_not-found")
  }, [pathname])

  useScrollToHash()

  return <div className="flex flex-col flex-grow">{children}</div>
}
