import fs from 'fs/promises';
import path from 'path';

const inputFile = path.join(process.cwd(), 'all-task-7-detailed-reviews.json');
const outputFile = path.join(process.cwd(), 'reviews', 'reviews.json');
const oldReviewsFile = path.join(process.cwd(), 'reviews', 'reviews.json');

async function convertReviews() {
  try {
    // Read the new reviews data
    const newReviewsData = await fs.readFile(inputFile, 'utf8');
    const newReviews = JSON.parse(newReviewsData);

    // Read the old reviews data to preserve projectId
    let oldReviews = [];
    try {
      const oldReviewsData = await fs.readFile(oldReviewsFile, 'utf8');
      oldReviews = JSON.parse(oldReviewsData);
    } catch (error) {
      console.log('Old reviews file not found or empty, starting fresh.');
    }

    const projectIdMap = new Map();
    for (const review of oldReviews) {
      if (review.review_id && review.projectId) {
        projectIdMap.set(review.review_id, review.projectId);
      }
    }

    // Filter out reviews with no text and map to the target format
    const transformedReviews = newReviews
      .filter(review => review.review_text && review.review_text.trim() !== '')
      .map(review => {
        const transformed = {
          ...review,
        };
        if (projectIdMap.has(review.review_id)) {
          transformed.projectId = projectIdMap.get(review.review_id);
        }
        return transformed;
      });

    // Sort reviews by date in descending order
    transformedReviews.sort((a, b) => new Date(b.published_at_date) - new Date(a.published_at_date));

    // Write the transformed data to the output file
    await fs.writeFile(outputFile, JSON.stringify(transformedReviews, null, 2));
    console.log('Successfully updated and sorted reviews.json!');
  } catch (error) {
    console.error('Error converting reviews:', error);
  }
}

convertReviews();
