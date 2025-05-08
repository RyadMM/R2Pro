import { getReviewsFromJson } from "@/lib/server/reviews";
import type { Metadata } from "next";
import RealisationsClientPage from "./RealisationsClientPage"; // Import the client component

// Re-apply metadata here for the server component
export const metadata: Metadata = {
    title: "Nos Réalisations - R2Pro",
    description: "Découvrez notre portfolio de projets exceptionnels qui témoignent de notre expertise et de notre engagement envers la qualité.",
};

// This is now the Server Component for the route
export default async function RealisationsPage() {
    // Fetch reviews data on the server using the efficient direct import method
    const reviews = await getReviewsFromJson();

    // Render the Client Component, passing the fetched reviews as a prop
    return <RealisationsClientPage initialReviews={reviews} />;
}
