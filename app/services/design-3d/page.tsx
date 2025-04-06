import type { Metadata } from "next"
import { Design3DClientPage } from "./Design3DClientPage"

export const metadata: Metadata = {
  title: "Design 3D - Visualisation de projets | R2Pro",
  description:
    "Services de design 3D professionnels pour visualiser vos projets de rénovation et de construction avec précision et réalisme. Transformez votre vision en réalité.",
}

export default function Design3DPage() {
  return <Design3DClientPage />
}

