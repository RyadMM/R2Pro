"use client"

import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionContainer } from "@/components/SectionContainer";
import { ServiceHero } from "@/components/ServiceHero";
import { CustomButton } from "@/components/ui/custom-button";
import { projects } from "@/lib/projectData";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle, CheckSquare, ChevronDown, Filter, Search, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';


// Structure des filtres organisée par catégories et sous-catégories
const filterCategories = [
  {
    id: "main",
    name: "Catégories principales",
    filters: [
      { id: "tous", label: "Tous" },
      { id: "revetement", label: "Revêtement" },
      { id: "peinture", label: "Peinture" },
      { id: "calfeutrage", label: "Calfeutrage" },
      { id: "gouttieres", label: "Gouttières" },
      { id: "isolation", label: "Isolation" },
    ],
  },
  {
    id: "revetement",
    name: "Types de revêtement",
    filters: [
      { id: "aluminium", label: "Aluminium" },
      { id: "vinyle", label: "Vinyle" },
      { id: "fibrociment", label: "Fibrociment" },
      { id: "bois", label: "Bois" },
      { id: "acier", label: "Acier" },
    ],
  },
  {
    id: "calfeutrage",
    name: "Types de calfeutrage",
    filters: [
      { id: "fenetres", label: "Fenêtres" },
      { id: "portes", label: "Portes" },
      { id: "joints", label: "Joints" },
      { id: "fissures", label: "Fissures" },
    ],
  },
]

// Fonction pour obtenir tous les filtres dans une liste plate
const getAllFilters = () => {
  return filterCategories.flatMap((category) => category.filters)
}

export default function RealisationsPage() {
  // État pour stocker les filtres sélectionnés
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["main"])
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch('/api/projects/reviews');
      if (response.ok) {
        const reviewsData = await response.json();
        setReviews(reviewsData);
      } else {
        console.error('Failed to fetch reviews:', response.statusText);
        setReviews([]); // Set empty array on error
      }
    }
    fetchReviews();
  }, []);


  // Effet pour filtrer les projets en fonction des critères
  useEffect(() => {
    let result = [...projects]

    // Filtrer par filtres sélectionnés
    if (selectedFilters.length > 0) {
      // Vérifier si les filtres inclus des catégories principales
      const mainCategories = selectedFilters.filter((filter) =>
        filterCategories[0].filters.some((f) => f.id === filter && f.id !== "tous"),
      )

      // Vérifier si les sous-catégories sont sélectionnées
      const subCategories = selectedFilters.filter(
        (filter) => !filterCategories[0].filters.some((f) => f.id === filter),
      )

      result = result.filter((project) => {
        // Si des catégories principales sont sélectionnées, vérifier si le projet correspond
        const matchesMainCategory = mainCategories.length === 0 || mainCategories.includes(project.category)

        // Si des sous-catégories sont sélectionnées, vérifier si le projet correspond
        const matchesSubCategory =
          subCategories.length === 0 || (project.subcategory && subCategories.includes(project.subcategory))

        // Le projet doit correspondre à au moins une catégorie principale ET une sous-catégorie (si sélectionnées)
        return matchesMainCategory && matchesSubCategory
      })
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          (project.fullDescription && project.fullDescription.toLowerCase().includes(term)),
      )
    }

    setFilteredProjects(result)
  }, [selectedFilters, searchTerm])

  // Fonction pour gérer la sélection des filtres
  const handleFilterToggle = (filterId: string) => {
    if (filterId === "tous") {
      // Si "Tous" est sélectionné, on réinitialise les filtres
      setSelectedFilters([])
    } else {
      // Vérifier si le filtre est déjà sélectionné
      if (selectedFilters.includes(filterId)) {
        // Si oui, on le retire
        setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
      } else {
        // Si non, on l'ajoute
        setSelectedFilters([...selectedFilters, filterId])
      }
    }
  }

  // Fonction pour basculer l'expansion d'une catégorie
  const toggleCategoryExpansion = (categoryId: string) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter((id) => id !== categoryId))
    } else {
      setExpandedCategories([...expandedCategories, categoryId])
    }
  }

  // Vérifier si un filtre est sélectionné
  const isFilterSelected = (filterId: string) => {
    if (filterId === "tous") {
      return selectedFilters.length === 0
    }
    return selectedFilters.includes(filterId)
  }

  // Obtenir le libellé d'un filtre à partir de son ID
  const getFilterLabel = (filterId: string) => {
    const filter = getAllFilters().find((f) => f.id === filterId)
    return filter ? filter.label : filterId
  }

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
    <div className="flex-1 flex flex-col">
      <ServiceHero
        title="Nos Réalisations"
        description="Découvrez notre portfolio de projets exceptionnels qui témoignent de notre expertise et de notre engagement envers la qualité."
        ctaText="Obtenir une soumission gratuite"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/realisations/hero-realisation.jpg" // Using the correct background image path
        ctaIcon={<CheckSquare className="w-5 h-5 mr-2" />} // Using a relevant icon
      />

      {/* Main Content */}
      <SectionContainer className="py-16 md:py-24">
        <AnimatedSection animation="fadeIn">
          <div className="container mx-auto px-4">
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-r2pro-800 relative inline-block"
              >
                Explorez nos projets
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"></div>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg"
              >
                Chaque projet raconte une histoire de transformation et de satisfaction client. Filtrez par catégorie ou
                recherchez un type de projet spécifique.
              </motion.p>
            </div>

            {/* Search and Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                {/* Search Bar */}
                <div
                  className={`relative w-full md:w-96 transition-all duration-300 ${isSearchFocused ? "scale-105" : ""}`}
                >
                  <input
                    type="text"
                    placeholder="Rechercher un projet..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-r2pro focus:ring-2 focus:ring-r2pro/20 outline-none shadow-sm transition-all duration-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                {/* Filter Toggle Button (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm"
                >
                  <Filter size={18} />
                  Filtres {selectedFilters.length > 0 && `(${selectedFilters.length})`}
                </button>

                {/* Desktop Filters - Catégories principales uniquement */}
                <div className="hidden md:flex gap-2 flex-wrap justify-end">
                  {filterCategories[0].filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => handleFilterToggle(filter.id)}
                      className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 flex items-center gap-2
                      ${isFilterSelected(filter.id)
                          ? "bg-r2pro text-white shadow-md"
                          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                        }`}
                    >
                      {isFilterSelected(filter.id) && filter.id !== "tous" && <Check size={16} className="text-white" />}
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Filters (Collapsible) */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden mb-6"
                  >
                    <div className="bg-white rounded-xl shadow-sm p-4">
                      {filterCategories.map((category) => (
                        <div key={category.id} className="mb-4">
                          <button
                            onClick={() => toggleCategoryExpansion(category.id)}
                            className="flex items-center justify-between w-full px-2 py-2 text-left font-medium text-gray-700 hover:text-r2pro"
                          >
                            {category.name}
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${expandedCategories.includes(category.id) ? "rotate-180" : ""
                                }`}
                            />
                          </button>

                          <AnimatePresence>
                            {expandedCategories.includes(category.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-wrap gap-2 mt-2 pl-2">
                                  {category.filters.map((filter) => (
                                    <button
                                      key={filter.id}
                                      onClick={() => handleFilterToggle(filter.id)}
                                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2
                                      ${isFilterSelected(filter.id)
                                          ? "bg-r2pro text-white shadow-md"
                                          : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
                                        }`}
                                    >
                                      {isFilterSelected(filter.id) && filter.id !== "tous" && (
                                        <Check
                                          size={16}
                                          className={isFilterSelected(filter.id) ? "text-white" : "text-r2pro"}
                                        />
                                      )}
                                      {filter.label}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop Advanced Filters */}
              <div className="hidden md:block mb-8">
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex flex-wrap gap-4">
                    {filterCategories.slice(1).map((category) => (
                      <div key={category.id} className="flex-1 min-w-[200px]">
                        <h3 className="font-medium text-gray-700 mb-3">{category.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.filters.map((filter) => (
                            <button
                              key={filter.id}
                              onClick={() => handleFilterToggle(filter.id)}
                              className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 flex items-center gap-1
                              ${isFilterSelected(filter.id)
                                  ? "bg-r2pro/10 text-r2pro-800 font-medium"
                                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                              {isFilterSelected(filter.id) && <Check size={14} className="text-r2pro" />}
                              {filter.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Filters Display */}
              {selectedFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Filtres actifs:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedFilters.map((filterId) => (
                      <span
                        key={filterId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-r2pro/10 text-r2pro-800"
                      >
                        {getFilterLabel(filterId)}
                        <button onClick={() => handleFilterToggle(filterId)} className="ml-1 hover:text-r2pro-600">
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                    <button
                      onClick={() => setSelectedFilters([])}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      Effacer tout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => {
                  // Find the review for this project
                  const projectReview = reviews.find(review => review.projectId === project.id);

                  return (
                    <motion.div key={project.id} variants={itemVariants} className="h-full">
                      <ProjectCard
                        id={parseInt(project.id, 10)}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.images[0] || "/placeholder.svg"}
                        category={project.category}
                        review={projectReview} // Pass the full review object if found
                        href={`/realisations/${project.id}`}
                      />
                    </motion.div>
                  );
                })
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-16 text-center">
                  <div className="bg-white rounded-xl p-8 shadow-sm max-w-md mx-auto">
                    <Search size={48} className="mx-auto mb-4 text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun projet trouvé</h3>
                    <p className="text-gray-600 mb-6">
                      Nous n'avons pas trouvé de projets correspondant à vos critères de recherche.
                    </p>
                    <CustomButton
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedFilters([])
                      }}
                      className="bg-r2pro hover:bg-r2pro-600 text-white"
                    >
                      Réinitialiser les filtres
                    </CustomButton>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/realisations/cta-realisations.jpg" // Using a relevant image for realisations CTA
            alt="Réalisation R2Pro CTA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-r2pro-800/90 to-r2pro-900/70"></div>
        </div>

        {/* Contenu */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
                Prêt à concrétiser votre projet?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd'hui pour discuter de vos idées et obtenir une soumission gratuite.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="relative">
                  <Link href="/contact#contact-form">
                    <motion.button
                      className="bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-base md:text-lg transition-colors duration-300 flex items-center shadow-lg border-2 border-white/80 group relative z-10"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {/* Effet de halo contenu dans le bouton */}
                      <div className="absolute inset-0 rounded-full bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <motion.span
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="mr-2 relative z-10"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.span>
                      <span className="relative z-10">Obtenir une soumission gratuite</span>
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </Link>

                  {/* Effet de brillance sous le bouton */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 blur-md rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/30 to-transparent"></div>
      </section>
    </div>
  )
}
