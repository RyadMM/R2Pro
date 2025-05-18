"use client"

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image"; // Import the Image component
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-r2pro-800 text-white">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold font-heading text-white">
              <Link href="/">
                <Image
                  src="/images/logosvg.svg"
                  alt="R2Pro Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </Link>
            </h2>
            <p className="max-w-xs mt-4 text-sm md:text-base font-sans leading-relaxed text-gray-200">
              Experts en revêtement extérieur au Québec depuis plus de 15 ans. Transformez votre maison avec R2Pro.
            </p>
            <div className="flex mt-8 space-x-6">
              <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-medium font-heading text-white">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/services/revetements-exterieurs"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                >
                  Revêtement extérieur
                </Link>
                <Link
                  href="/services/isolation-exterieure"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                >
                  Isolation
                </Link>
                <Link
                  href="/services/peinture-spray"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                >
                  Peinture au spray
                </Link>
                <Link
                  href="/services/soffites-fascias"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                >
                  Soffites et Fascias
                </Link>
                <Link
                  href="/services/portes-fenetres"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                >
                  Portes et Fenêtres
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium font-heading text-white">À propos</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link href="/a-propos" className="text-gray-200 hover:text-white transition-colors text-base">
                  Notre histoire
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium font-heading text-white">Ressources</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a
                  href="/#faq"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault()
                      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  FAQ
                </a>
                <a
                  href="/#temoignages"
                  className="text-gray-200 hover:text-white transition-colors text-base"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault()
                      document.getElementById("temoignages")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Témoignages
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium font-heading text-white">Contact</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition-colors flex items-center text-base"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Nous contacter
                </Link>
                <a
                  href="mailto:info@r2pro.ca"
                  className="text-gray-200 hover:text-white transition-colors flex items-center text-base"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@r2pro.ca
                </a>
                <a
                  href="tel:+14384944426"
                  className="text-gray-200 hover:text-white transition-colors flex items-center group text-base"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  <span className="group-hover:text-white transition-colors duration-300">(438) 494-4426</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-r2pro-700">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <p className="text-sm text-gray-300">© 2023 R2Pro. Tous droits réservés.</p>
            <nav className="flex justify-start space-x-4 text-sm lg:justify-end">
              <Link href="/termes-conditions" className="text-gray-200 hover:text-white transition-colors text-base">
                Termes & Conditions
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-200 hover:text-white transition-colors text-base">
                Politique de confidentialité
              </Link>
              <Link href="/cookies" className="text-gray-200 hover:text-white transition-colors text-base">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
