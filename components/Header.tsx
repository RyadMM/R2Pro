import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 transition-all duration-300 ease-in-out border-b">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCR-20240423-vh3-9XzUjTAtr6pntCZpiYdddo6bO31shV.png"
            alt="R2Pro Logo"
            width={100}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/services" className="text-gray-600 transition-colors hover:text-r2pro">
            Services
          </Link>
          <Link href="/realisations" className="text-gray-600 transition-colors hover:text-r2pro">
            Réalisations
          </Link>
          <Link href="/a-propos" className="text-gray-600 transition-colors hover:text-r2pro">
            À propos
          </Link>
          <Link href="/temoignages" className="text-gray-600 transition-colors hover:text-r2pro">
            Témoignages
          </Link>
          <Link href="/contact" className="text-gray-600 transition-colors hover:text-r2pro">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+14384944426"
            className="hidden md:flex items-center text-r2pro hover:text-r2pro-600 transition-colors duration-300 group"
          >
            <span className="bg-r2pro/10 rounded-full p-2 mr-2 group-hover:bg-r2pro/20 transition-colors duration-300">
              <Phone className="w-5 h-5" />
            </span>
            <span className="font-semibold">(438) 494-4426</span>
          </a>
          <Button className="hidden md:inline-flex bg-r2pro hover:bg-r2pro-600">Soumission gratuite</Button>
        </div>
      </div>
    </header>
  )
}

