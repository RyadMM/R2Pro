import { ReviewCard } from "@/components/AdaptedReviewSection";
import { SectionContainer } from "@/components/SectionContainer";
import { getReviewsFromJson } from "@/lib/server/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviewsFromJson();

  return (
    <SectionContainer className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-r2pro-800 mb-8 text-center">
          Tous les avis de nos clients
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
