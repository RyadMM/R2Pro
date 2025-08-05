# R2Pro Website

This project is a Next.js application serving as the official website for R2Pro. It showcases company realisations (projects), customer reviews, services, and provides contact information.

## Table of Contents

1.  [Project Structure](#project-structure)
2.  [Realisations (Projects)](#realisations-projects)
    *   [Architecture](#architecture)
    *   [Updating Realisations](#updating-realisations)
3.  [Reviews](#reviews)
    *   [Architecture](#architecture-1)
    *   [Updating Reviews](#updating-reviews)
4.  [Scripts](#scripts)
    *   [`update-reviews.mjs`](#update-reviewsmjs)
    *   [`update-reviews-from-json.mjs`](#update-reviews-from-jsonmjs)
5.  [Getting Started](#getting-started)

## Project Structure

The project follows a standard Next.js application structure with a few key directories:

*   `app/`: Contains all page routes and API routes.
    *   `app/realisations/`: Pages related to project realisations, including dynamic routes for individual project details.
    *   `app/reviews/`: Pages displaying customer reviews.
    *   `app/api/`: API endpoints for various functionalities (e.g., admin, contact, projects).
    *   `app/components/`: UI components used across the application.
*   `components/`: Reusable React components, including UI elements from Shadcn UI (`components/ui/`).
*   `data/`: Data files, such as `reviews.ts`.
*   `lib/`: Utility functions and data fetching logic.
    *   `lib/projectData.ts`: Likely contains logic for fetching and managing project data.
    *   `lib/reviews.ts`: Likely contains logic for fetching and managing review data.
*   `public/`: Static assets like images, fonts, and favicons.
    *   `public/images/realisations/`: Images specifically for realisations.
*   `scripts/`: Node.js scripts for various automation tasks, particularly for managing reviews.
*   `styles/`: Global CSS styles.

## Realisations (Projects)

### Architecture

Realisations represent completed projects by R2Pro. They are displayed on the `/realisations` page and each has a dedicated detail page (`/realisations/[id]`).

*   **Pages**:
    *   `app/realisations/page.tsx`: The main listing page for all realisations.
    *   `app/realisations/[id]/page.tsx`: Dynamic route for individual realisation details.
*   **Components**:
    *   `components/ProjectCard.tsx`: Used to display a summary of a project on the listing page.
    *   `components/ProjectDetails.tsx`: Displays detailed information for a single project.
    *   `components/ProjectGallery.tsx`: Handles image galleries for projects.
*   **Data**:
    *   `lib/projectData.ts`: This file is responsible for providing the data for realisations. It likely contains functions to fetch or define project details, including their images, descriptions, and categories.

### Updating Realisations

To add or update realisations:

1.  **Update `lib/projectData.ts`**: Modify or add new project objects within this file. Ensure all required fields (e.g., `id`, `title`, `description`, `images`, `category`) are correctly populated.
2.  **Add Images**: Place project-specific images in `public/images/realisations/`. Ensure the image paths in `lib/projectData.ts` correctly reference these files.
3.  **Rebuild/Restart**: After making changes, restart the development server (`pnpm dev`) or rebuild the project (`pnpm build`) for changes to take effect.

## Reviews

### Architecture

Reviews are customer testimonials displayed on the `/reviews` page and potentially integrated into other sections of the website.

*   **Pages**:
    *   `app/reviews/page.tsx`: The main listing page for all customer reviews.
*   **Components**:
    *   `components/AdaptedReviewSection.tsx`: Likely a component that displays a selection of reviews, possibly adapted for different sections of the site.
*   **Data**:
    *   `data/reviews.ts`: This file exports the review data used by the application.
    *   `reviews/reviews.json`: This JSON file serves as the source for review data, which is then processed into `data/reviews.ts` by a script.
*   **Linking to Realisations**: The current structure does not explicitly show a direct link between individual reviews and specific realisations. Reviews are generally displayed as a collection. If a link is desired, it would need to be implemented in the review data structure (e.g., by adding a `projectId` field to reviews) and in the display logic.

### Updating Reviews

Reviews are primarily managed via a JSON file and processed by a script.

1.  **Edit `reviews/reviews.json`**: Add, modify, or remove review entries in this JSON file. Each entry should follow the defined schema (e.g., `author`, `rating`, `comment`, `date`).
2.  **Run Update Script**: Execute the `update-reviews` script to synchronize the JSON data with the TypeScript data file:
    ```bash
    pnpm run update-reviews
    ```
    This script reads `reviews/reviews.json` and generates `data/reviews.ts`.
3.  **Rebuild/Restart**: After running the script, restart the development server (`pnpm dev`) or rebuild the project (`pnpm build`) for changes to take effect.

## Scripts

The `scripts/` directory contains utility scripts to automate tasks.

### `update-reviews.mjs`

This script is used to update the `data/reviews.ts` file based on the content of `reviews/reviews.json`. It ensures that the review data consumed by the Next.js application is always in sync with the raw JSON source.

**Usage**:
```bash
pnpm run update-reviews
```

### `update-reviews-from-json.mjs`

This script likely serves a similar purpose to `update-reviews.mjs`, possibly offering a different method or additional processing steps for updating reviews from a JSON source. It's recommended to use `pnpm run update-reviews` as defined in `package.json` for standard review updates.

**Usage**:
```bash
node scripts/update-reviews-from-json.mjs
```
(Note: This script is not directly exposed via `package.json` scripts, so it needs to be run with `node`.)

## Getting Started

To set up and run the project locally:

1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```
2.  **Run Development Server**:
    ```bash
    pnpm run dev
    ```
    The application will be accessible at `http://localhost:3000`.
3.  **Build for Production**:
    ```bash
    pnpm run build
    ```
4.  **Start Production Server**:
    ```bash
    pnpm run start
