import type { Metadata } from "next"
import SoffitesFasciasClientPage from "./SoffitesFasciasClientPage"

export const metadata: Metadata = {
  title: "Soffites et Fascias - R2Pro",
  description:
    "Installation professionnelle de soffites et fascias pour protéger votre toiture et améliorer la ventilation de votre maison.",
}

export default function SoffitesFasciasPage() {
  return <SoffitesFasciasClientPage />
}

