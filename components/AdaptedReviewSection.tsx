"use client";

import { CustomButton } from "@/components/CustomButton";
import { SectionContainer } from "@/components/SectionContainer";
import { ButtonVariant } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Import carousel components
import { formatDateInFrench } from "@/lib/dateUtils"; // Import the helper function
import { Review, getAverageRating, getTotalReviews } from "@/lib/reviews";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react"; // Import useCallback

interface AdaptedReviewSectionProps {
  reviews: Review[];
}

// Google "G" logo SVG component
const GoogleLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

// Function to create a preview of the text (first 200 characters, matching existing)
const createPreview = (text: string, maxLength = 200) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = createPreview(review.text); // Use review.text
  const hasMoreContent = review.text.length > previewText.length; // Use review.text

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md flex flex-col p-6 pb-4" // Combined p-6, added rounded-xl, and consistent pb-4
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div>
            <h3 className="font-semibold text-gray-900">{review.name}</h3> {/* Use existing classes */}
            {review.location && <p className="text-sm text-gray-500">{review.location}</p>} {/* Use existing classes and show location if available */}
            {review.published_at_date && (
              <p className="text-xs text-gray-500 mt-1"> {/* Added text-xs and mt-1 for styling */}
                {formatDateInFrench(review.published_at_date)}
              </p>
            )}
          </div>
        </div>
        <GoogleLogo />
      </div>

      <div className="relative">
        {!isExpanded && (
          <p className="text-gray-700 leading-relaxed mb-2"> {/* Use existing classes */}
            {previewText} {/* Show preview text when not expanded */}
          </p>
        )}

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }} // Animate opacity and height
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }} // Use easeOut
              style={{}} // Remove overflow: "hidden"
            >
              <p className="text-gray-700 leading-relaxed mb-2"> {/* Use existing classes */}
                {review.text} {/* Show full text when expanded */}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasMoreContent && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-r2pro-600 hover:underline text-sm self-start mt-2 mb-2" // Use existing classes and added mb-2
        >
          {isExpanded ? "Afficher moins" : "Lire la suite"}
        </button>
      )}
    </motion.div>
  );
};

export default function AdaptedReviewSection({ reviews }: AdaptedReviewSectionProps) {
  const [api, setApi] = useState<CarouselApi>(); // Carousel API state
  const [current, setCurrent] = useState(0); // Current slide index
  const [count, setCount] = useState(0); // Total number of slides

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const averageRating = getAverageRating(reviews);
  const totalReviews = getTotalReviews(reviews);

  if (!reviews || reviews.length === 0) {
    return null; // Or a message indicating no reviews
  }

  return (
    <SectionContainer
      id="temoignages"
      className="py-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden" // Use existing classes
    >
      {/* Background pattern and decorative elements from existing Temoignages */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/background-pattern.svg)",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-r2pro-100 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-r2pro-200 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-r2pro-800 mb-4 relative inline-block">
            Ce que disent nos clients
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-r2pro-500 rounded-full"></div>
          </h2>

          {/* Average rating and total reviews display */}
          <div className="flex items-center justify-center mt-6">
            <div className="bg-white px-4 py-2 rounded-full shadow-md inline-flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="font-medium text-gray-900">{averageRating}/5</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-600">{totalReviews} avis Google</span>
            </div>
          </div>
        </motion.div>

        <Carousel setApi={setApi}> {/* Removed loop: true option */}
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 py-4"> {/* Use CarouselItem and adjust basis for responsiveness, added py-4 for vertical padding */}
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-1/2 -translate-y-1/2 bg-white shadow-md" /> {/* Adjust position, added background and shadow */}
          <CarouselNext className="-right-4 top-1/2 -translate-y-1/2 bg-white shadow-md" /> {/* Adjust position, added background and shadow */}
        </Carousel>

        {/* Pagination indicator */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {/* Show dots on all screen sizes */}
          <div className="flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)} // Use carousel API to scroll
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index
                  ? "bg-r2pro-600" // Active dot color
                  : "bg-gray-300 hover:bg-gray-400" // Inactive dot color
                  }`}
                aria-label={`Page ${index + 1}`}
                aria-current={current === index ? "page" : undefined}
              />
            ))}
          </div>
        </div>

        {/* Buttons from existing Temoignages */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <CustomButton asChild variant={"primary" as ButtonVariant}>
            <a
              href="https://g.page/r/CVKZr9vILHA4EAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Laisser un avis sur Google
            </a>
          </CustomButton>
          <CustomButton variant={"secondary" as ButtonVariant}>
            <a
              href="/reviews"
              className="inline-flex items-center justify-center"
            >
              Voir tous les avis
            </a>
          </CustomButton>
        </div>
      </div>
    </SectionContainer>
  );
}
