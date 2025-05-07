import rawReviewsData from '../../reviews/reviews.json';
import { Review } from '../reviews'; // Import Review interface from the shared file

export async function getReviewsFromJson(): Promise<Review[]> {
  try {
    const rawReviews: any[] = rawReviewsData;

    const reviews: Review[] = rawReviews
      .filter(rawReview => rawReview.review_text && rawReview.review_text.trim() !== '') // Filter out reviews with empty text
      .map(rawReview => ({
        id: rawReview.review_id, // Map review_id to id
        name: rawReview.name,
        location: rawReview.location || '', // Assuming location might be missing
        rating: rawReview.rating,
        avatar: rawReview.reviewer_profile, // Using reviewer_profile as a placeholder for avatar
        text: rawReview.review_text.trim(), // Map review_text to text, handle null and trim whitespace
        date: rawReview.published_at || '', // Keep existing date field for now
        published_at_date: rawReview.published_at_date, // Map published_at_date
        project: '', // No direct mapping for project in JSON, using empty string
        projectId: rawReview.projectId, // Include projectId
      }))
      .sort((a, b) => {
        // Sort by published_at_date in descending order (most recent first)
        if (!a.published_at_date || !b.published_at_date) return 0; // Handle cases where date might be missing
        return new Date(b.published_at_date).getTime() - new Date(a.published_at_date).getTime();
      });

    return reviews;
  } catch (error) {
    console.error('Error parsing reviews.json:', error);
    return []; // Return empty array in case of error
  }
}
