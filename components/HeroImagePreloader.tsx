"use client";

import React from 'react';

interface PreloadableImage {
  src: string;
  sizes: string;
  // If we can derive imagesrcset in the future, add it here.
  // imageSrcSet?: string;
}

interface HeroImagePreloaderProps {
  images: PreloadableImage[];
}

const HeroImagePreloader: React.FC<HeroImagePreloaderProps> = ({ images }) => {
  // In the App Router, we don't use next/head in client components this way.
  // Instead, we can return the <link> tags directly, and Next.js will handle placing them in the <head>.
  // Alternatively, for a cleaner approach, this logic could be moved to a Server Component
  // that directly renders these links, or this component could be used within the <head> tag
  // of the root layout if Next.js supports that pattern for client components (needs verification).
  // For simplicity and directness in a client component, we'll render them as a fragment.
  // Next.js should pick these up and hoist them to the head.

  return (
    <>
      {images.map((image, index) => (
        <link
          key={`preload-${index}-${image.src}`}
          rel="preload"
          href={image.src}
          as="image"
          // imagesrcset={image.imageSrcSet} // Add if available
          imageSizes={image.sizes} // Reverted to camelCase for React/TSX prop
        />
      ))}
    </>
  );
};

export default HeroImagePreloader;
