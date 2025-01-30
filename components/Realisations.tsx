import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "./AnimatedSection"

const projects = [
  {
    id: 1,
    category: "vinyle",
    image: "/placeholder.svg?height=400&width=600",
    title: "Maison moderne en vinyle",
  },
  {
    id: 2,
    category: "aluminium",
    image: "/placeholder.svg?height=400&width=600",
    title: "Façade en aluminium",
  },
  {
    id: 3,
    category: "bois",
    image: "/placeholder.svg?height=400&width=600",
    title: "Chalet en bois",
  },
  {
    id: 4,
    category: "vinyle",
    image: "/placeholder.svg?height=400&width=600",
    title: "Résidence en vinyle",
  },
  {
    id: 5,
    category: "aluminium",
    image: "/placeholder.svg?height=400&width=600",
    title: "Immeuble commercial en aluminium",
  },
  {
    id: 6,
    category: "bois",
    image: "/placeholder.svg?height=400&width=600",
    title: "Maison de campagne en bois",
  },
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
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

