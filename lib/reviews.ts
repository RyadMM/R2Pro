export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  avatar: string;
  text: string;
  date: string;
  project: string;
}

// Modify utility functions to accept reviews as argument
export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return Number.parseFloat((sum / reviews.length).toFixed(1));
}

export function getTotalReviews(reviews: Review[]): number {
  return reviews.length;
}
