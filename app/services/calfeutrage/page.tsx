import type { Metadata } from "next"
import CalfeutrageClientPage from "./CalfeutrageClientPage"

export const metadata: Metadata = {
  title: "Calfeutrage Professionnel - R2Pro",
  description:
    "Services professionnels de calfeutrage pour protéger votre maison contre les infiltrations d'eau et d'air. Expertise et qualité garanties par R2Pro.",
}

export default function CalfeutragePage() {
  return <CalfeutrageClientPage />
}

