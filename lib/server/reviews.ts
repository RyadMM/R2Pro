import { promises as fs } from 'fs';
import path from 'path';
import { Review } from '../reviews'; // Import Review interface from the shared file

export async function getReviewsFromJson(): Promise<Review[]> {
  const filePath = path.join(process.cwd(), 'reviews', 'reviews.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const rawReviews: any[] = JSON.parse(fileContents);

    const reviews: Review[] = rawReviews
      .filter(rawReview => rawReview.review_text && rawReview.review_text.trim() !== '') // Filter out reviews with empty text
      .map(rawReview => ({
        id: rawReview.review_id, // Map review_id to id
        name: rawReview.name,
        location: rawReview.location || '', // Assuming location might be missing
        rating: rawReview.rating,
        avatar: rawReview.reviewer_profile, // Using reviewer_profile as a placeholder for avatar
        text: rawReview.review_text.trim(), // Map review_text to text, handle null and trim whitespace
        date: rawReview.published_at || '', // Map published_at to date
        project: '', // No direct mapping for project in JSON, using empty string
      }));

    return reviews;
  } catch (error) {
    console.error('Error reading or parsing reviews.json:', error);
    return []; // Return empty array in case of error
  }
}
