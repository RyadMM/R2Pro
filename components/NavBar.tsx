"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type LucideIcon, Home, Wrench, Image, Info, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items?: NavItem[]
  className?: string
}

const defaultItems: NavItem[] = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Wrench },
  { name: "Réalisations", url: "/realisations", icon: Image },
  { name: "À propos", url: "/a-propos", icon: Info },
  { name: "Contact", url: "/contact", icon: Phone },
]

export function NavBar({ items = defaultItems, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items.length > 0 ? items[0].name : "")
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const currentItem = items.find((item) => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  if (items.length === 0) return null

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-6",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1 bg-background/5 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg transition-all duration-300",
          isScrolled ? "bg-background/50" : "bg-background/10",
        )}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-white hover:text-r2pro-200",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

