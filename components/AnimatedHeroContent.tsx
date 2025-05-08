"use client"

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedHeroContentProps {
  title: ReactNode; // Changed to ReactNode
  subtitle: ReactNode; // Changed to ReactNode
  renderButtons?: () => ReactNode;
}

export function AnimatedHeroContent({ title, subtitle, renderButtons }: AnimatedHeroContentProps) {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
  }

  const buttonsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
  }

  return (
    // Removed text-center md:text-left. Alignment should be controlled by GenericHero's contentAlignment.
    // max-w-3xl can remain if that's the desired max width for the text content block.
    <div className="max-w-3xl">
      {/* Wrap title in motion.div instead of motion.h1 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {title}
      </motion.div>
      {/* Wrap subtitle in motion.div instead of motion.p */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={subtitleVariants}
      >
        {subtitle}
      </motion.div>
      {renderButtons && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonsVariants}
          // The className for layout (flex, gap) should be applied by the JSX returned by renderButtons
          // or on a wrapper within renderButtons if multiple buttons need specific layout.
          // This component now just provides the animation wrapper.
        >
          {renderButtons()}
        </motion.div>
      )}
    </div>
  )
}
