import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">R2Pro Revêtement</h3>
            <p className="text-muted-foreground">Expert en revêtement extérieur à Québec</p>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {["Services", "Réalisations", "À propos", "Témoignages", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-muted-foreground not-italic">
              <p>123 Rue Principale, Québec, QC G1A 1A1</p>
              <p className="mt-2">
                <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-200">
                  (123) 456-7890
                </a>
              </p>
              <p className="mt-2">
                <a href="mailto:info@r2prorevêtement.com" className="hover:text-primary transition-colors duration-200">
                  info@r2prorevêtement.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-muted mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} R2Pro Revêtement. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

