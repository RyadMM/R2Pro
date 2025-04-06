import type { Metadata } from "next"
import PortesFenetresClientPage from "./PortesFenetresClientPage"

export const metadata: Metadata = {
  title: "Portes et Fenêtres - R2Pro",
  description:
    "Installation et remplacement de portes et fenêtres de haute qualité pour améliorer l'efficacité énergétique et l'esthétique de votre maison.",
}

export default function PortesFenetresPage() {
  return <PortesFenetresClientPage />
}

