import { getReviewsFromJson } from "@/lib/server/reviews";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reviews = await getReviewsFromJson();
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ message: "Error fetching reviews" }, { status: 500 });
  }
}
