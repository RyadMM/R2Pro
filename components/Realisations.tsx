"use client"

import { CategoryTabs } from "@/components/CategoryTabs"
import { CustomButton } from "@/components/ui/custom-button"
import { projects } from "@/lib/projectData"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { AnimatedSection } from "./AnimatedSection"
import { ProjectCard } from "./ProjectCard"

// Extraire toutes les catégories uniques des projets
const categories = ["tous", ...new Set(projects.map((project) => project.category))]

export function Realisations() {
  const [filter, setFilter] = useState("tous")

  // Limiter à 3 projets pour la page d'accueil
  const allProjects = projects.slice(0, 3)
  const filteredProjects =
    filter === "tous" ? allProjects : allProjects.filter((project) => project.category === filter)

  return (
    <section className="py-24">
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

        <AnimatedSection animation="scaleIn" className="mb-12">
          <CategoryTabs categories={categories} activeCategory={filter} onChange={setFilter} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project) => (
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
                  clientName={project.clientTestimonial ? "Client satisfait" : undefined}
                  clientReview={
                    project.clientTestimonial ? project.clientTestimonial.substring(0, 100) + "..." : undefined
                  }
                  clientRating={5}
                  href={"/realisations/" + project.id.toString()}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center mt-8 p-8 rounded-lg bg-white/80 backdrop-blur-sm">
              <p className="text-gray-700 font-medium">Aucune réalisation disponible pour cette catégorie.</p>
              <p className="text-gray-500">Section du site en construction. Revenez plus tard!</p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/realisations">
            <CustomButton className="bg-r2pro hover:bg-r2pro-600 group">
              <span className="flex items-center justify-center text-base">
                Voir toutes nos réalisations
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
