"use client"

// Assuming NavBar is handled by layout.tsx now for consistency
// Image is handled by GenericHero
import { GenericHero } from "@/components/GenericHero"; // Import GenericHero
import { motion } from "framer-motion"; // Import motion for button
import { ArrowRight } from "lucide-react"; // Import ArrowRight for consistency
import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceHeroProps {
  title: string
  description: string
  ctaText?: string // Make optional if not always present
  ctaLink?: string // Make optional
  backgroundImage: string
  ctaIcon?: ReactNode
  // Add other props if needed, e.g., specific height, overlay opacity
}

// This component now uses GenericHero to provide the structure and animation
export function ServiceHero({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  ctaIcon
}: ServiceHeroProps) {

  // Define the title and subtitle using the props
  const heroTitle = (
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading">
      {title}
    </h1>
  );

  const heroSubtitle = (
    <p className="text-xl mb-8 text-white font-sans">
      {description}
    </p>
  );

  // Define the button rendering function if ctaText and ctaLink are provided
  const renderServiceHeroButton = () => {
    if (!ctaText || !ctaLink) return null;

    // Replicate the button styling from the original ServiceHero
    return (
      <div className="inline-block">
        <div className="relative">
          <Link href={ctaLink} passHref legacyBehavior>
            {/* Using motion.a for consistency with other buttons, styled as a button */}
            <motion.a
              className="bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-base md:text-lg transition-colors duration-300 flex items-center shadow-lg border-2 border-white/80 group relative z-10"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {ctaIcon && <span className="mr-2 relative z-10">{ctaIcon}</span>}
              <span className="relative z-10">{ctaText}</span>
              {/* Using Lucide ArrowRight for consistency */}
              <span className="ml-2 relative z-10">
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
          </Link>
          {/* Optional: Add the subtle glow effect if desired */}
          {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 blur-md rounded-full"></div> */}
        </div>
      </div>
    );
  };

  return (
    <GenericHero
      backgroundImageSrc={backgroundImage || "/placeholder.svg"}
      backgroundImageAlt={title} // Use title for alt text
      title={heroTitle}
      subtitle={heroSubtitle}
      renderButtons={ctaText && ctaLink ? renderServiceHeroButton : undefined}
      imagePriority={true} // Assume hero images are priority
      contentAlignment="left" // Default for service/realisations pages
      // showScrollIndicator={false} // Example: uncomment to hide indicator on service pages if desired
      // Pass other props like heightClass, overlayOpacityClass if needed
    />
  )
}
