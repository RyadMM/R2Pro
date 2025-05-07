import { Review } from '@/lib/reviews'; // Import Review interface from the shared file
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'reviews', 'reviews.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const rawReviews: any[] = JSON.parse(fileContents);

    const reviews: Review[] = rawReviews
      .map(rawReview => ({
        id: rawReview.review_id, // Map review_id to id
        name: rawReview.name,
        location: rawReview.location || '', // Assuming location might be missing
        rating: rawReview.rating,
        avatar: rawReview.reviewer_profile, // Using reviewer_profile as a placeholder for avatar
        text: rawReview.review_text ? rawReview.review_text.trim() : '', // Map review_text to text, handle null/undefined and trim whitespace
        date: rawReview.published_at || '', // Map published_at to date
        project: '', // No direct mapping for project in JSON, using empty string
        projectId: rawReview.projectId, // Include projectId
      }));

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error reading or parsing reviews.json:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch reviews' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
