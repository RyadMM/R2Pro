// Modifions la page pour s'assurer qu'elle se charge correctement
import { Review } from "@/lib/reviews"; // Import Review interface
import { getReviewsFromJson } from "@/lib/server/reviews"; // Import the server-side function
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Define the props type for the client component
interface RevetementsExterieursClientPageProps {
  reviews: Review[];
}

// Utiliser dynamic import avec SSR activé pour s'assurer que le composant se charge correctement
const RevetementsExterieursClientPage = dynamic<RevetementsExterieursClientPageProps>(() => import("./RevetementsExterieursClientPage"), { ssr: true })

export const metadata: Metadata = {
  title: "Revêtements Extérieurs - R2Pro",
  description:
    "Installation professionnelle de revêtements extérieurs en aluminium, acier, CanExel, Maibec, fibro-ciment, vinyle, composite, pierre vissée et Rialux.",
}

export default async function RevetementsExterieursPage() {
  const reviews = await getReviewsFromJson(); // Fetch reviews data

  return <RevetementsExterieursClientPage reviews={reviews} /> // Pass reviews as a prop
}
