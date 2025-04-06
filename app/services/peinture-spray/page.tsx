import type { Metadata } from "next"
import PeintureSprayClientPage from "./PeintureSprayClientPage"

export const metadata: Metadata = {
  title: "Peinture au Spray Professionnelle - R2Pro",
  description:
    "Services professionnels de peinture au spray pour un fini impeccable et durable sur vos surfaces intérieures et extérieures. Expertise et qualité garanties par R2Pro.",
}

export default function PeintureSprayPage() {
  return <PeintureSprayClientPage />
}

