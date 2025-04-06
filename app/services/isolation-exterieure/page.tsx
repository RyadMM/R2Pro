import type { Metadata } from "next"
import IsolationExterieureClientPage from "./IsolationExterieureClientPage"

export const metadata: Metadata = {
  title: "Isolation Extérieure - R2Pro",
  description:
    "Services professionnels d'isolation extérieure pour améliorer l'efficacité énergétique de votre maison et réduire vos factures d'énergie.",
}

export default function IsolationExterieurePage() {
  return <IsolationExterieureClientPage />
}

