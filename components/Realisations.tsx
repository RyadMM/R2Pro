"use client"

import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projectData";
import { Review } from "@/lib/reviews"; // Import Review interface
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { ProjectCard } from "./ProjectCard";

// Extraire toutes les catégories uniques des projets
const categories = ["tous", ...new Set(projects.map((project) => project.category))]

interface RealisationsProps {
  category?: string;
  reviews: Review[]; // Add reviews prop
}

export function Realisations({ category, reviews }: RealisationsProps) { // Accept reviews prop
  // Limiter à 3 projets pour la page d'accueil
  const allProjects = projects.slice(0, 3);
  const filteredProjects = category
    ? allProjects.filter((project) => project.category === category)
    : allProjects;

  return (
    <section className="py-12">
      <div className="container">
        <AnimatedSection animation="fadeIn">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-r2pro-800 relative mx-auto"
          >
            Nos Réalisations
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <p className="text-center text-gray-800 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Découvrez nos projets récents et les témoignages de nos clients satisfaits
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project) => { // Use curly braces for map body
              // Find the review for the current project
              const projectReview = reviews.find(review => review.projectId === project.id);

              return ( // Return the JSX
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <ProjectCard
                    id={Number(project.id)}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.images[0]}
                    category={project.category}
                    review={projectReview} // Pass the full review object if found
                    href={"/realisations/" + project.id.toString()}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center mt-8 p-8 rounded-lg bg-white/80 backdrop-blur-sm">
              <p className="text-gray-700 font-medium">Aucune réalisation disponible pour cette catégorie.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/realisations">
            <Button className="hover:bg-r2pro-600 text-white font-medium group text-xs md:text-sm rounded-full">
              <span className="flex items-center justify-center text-base">
                Voir toutes nos réalisations
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
