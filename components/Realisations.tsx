"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "./AnimatedSection"
import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    id: 1,
    category: "vinyle",
    image: "/images/realisations/vinyl-project.jpg",
    title: "Maison moderne en vinyle",
    description: "Rénovation complète du revêtement extérieur en vinyle pour une maison moderne.",
  },
  {
    id: 2,
    category: "aluminium",
    image: "/images/realisations/aluminum-project.jpg",
    title: "Façade en aluminium",
    description: "Installation d'un revêtement en aluminium pour une façade commerciale.",
  },
  {
    id: 3,
    category: "bois",
    image: "/images/realisations/wood-project.jpg",
    title: "Chalet en bois",
    description: "Restauration et traitement d'un revêtement en bois pour un chalet de montagne.",
  },
  // Ajoutez d'autres projets ici...
]

export function Realisations() {
  const [filter, setFilter] = useState("tous")

  const filteredProjects = filter === "tous" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection animation="rotateIn">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
        </AnimatedSection>
        <AnimatedSection animation="scaleIn">
          <div className="flex justify-center space-x-4 mb-8">
            {["tous", "vinyle", "aluminium", "bois"].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </AnimatedSection>
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard title={project.title} description={project.description} imageUrl={project.image} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

