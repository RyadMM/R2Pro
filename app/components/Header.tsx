"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { PhoneIcon, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = ["Accueil", "Services", "Réalisations", "À propos", "Témoignages", "Contact"]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-primary transition-colors duration-200 hover:text-primary/80"
        >
          R2Pro Revêtement
        </Link>
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={
                item === "Accueil"
                  ? "/"
                  : item === "Services"
                    ? "/services"
                    : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="relative text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
            >
              {item}
              {(pathname === `/${item.toLowerCase().replace(" ", "-")}` ||
                (pathname === "/" && item === "Accueil")) && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <motion.a
            href="tel:+1234567890"
            className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneIcon className="w-5 h-5 mr-2" />
            (123) 456-7890
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button>Soumission gratuite</Button>
          </motion.div>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Accueil"
                      ? "/"
                      : item === "Services"
                        ? "/services"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
              <Button className="mt-4">Soumission gratuite</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

