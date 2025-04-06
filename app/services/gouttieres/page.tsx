import type { Metadata } from "next"
import GouttieresClientPage from "./GouttieresClientPage"

export const metadata: Metadata = {
  title: "Gouttières de Qualité - R2Pro",
  description:
    "Installation et réparation de gouttières de qualité pour protéger votre maison contre les dommages causés par l'eau. Service professionnel par R2Pro.",
}

export default function GouttieresPage() {
  return <GouttieresClientPage />
}

