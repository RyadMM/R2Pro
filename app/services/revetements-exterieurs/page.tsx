// Modifions la page pour s'assurer qu'elle se charge correctement
import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Utiliser dynamic import avec SSR activé pour s'assurer que le composant se charge correctement
const RevetementsExterieursClientPage = dynamic(() => import("./RevetementsExterieursClientPage"), { ssr: true })

export const metadata: Metadata = {
  title: "Revêtements Extérieurs - R2Pro",
  description:
    "Installation professionnelle de revêtements extérieurs en aluminium, acier, CanExel, Maibec, fibro-ciment, vinyle, composite, pierre vissée et Rialux.",
}

export default function RevetementsExterieursPage() {
  return <RevetementsExterieursClientPage />
}

