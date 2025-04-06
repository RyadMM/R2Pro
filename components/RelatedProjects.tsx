"use client"

import type { Project } from "@/lib/projectData"
import { ProjectCard } from "@/components/ProjectCard"
import { motion } from "framer-motion"

interface RelatedProjectsProps {
  projects: Project[]
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants} className="h-full">
          <ProjectCard
            id={Number(project.id)}
            title={project.title}
            description={project.description}
            imageUrl={project.images[0]}
            category={project.category}
            clientName={project.clientName}
            clientReview={project.clientTestimonial ? project.clientTestimonial.substring(0, 100) + "..." : undefined}
            clientRating={project.clientRating}
            href={`/realisations/${project.id}`}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

