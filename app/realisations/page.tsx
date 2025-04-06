"use client"

import { ProjectCard } from "@/components/ProjectCard";
import { SectionDivider } from "@/components/SectionDivider";
import { CustomButton } from "@/components/ui/custom-button";
import { projects } from "@/lib/projectData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Filter, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

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

  // Effet pour filtrer les projets en fonction des critères
  useEffect(() => {
    let result = [...projects]

    // Filtrer par filtres sélectionnés
    if (selectedFilters.length > 0) {
      // Vérifier si les filtres incluent des catégories principales
      const mainCategories = selectedFilters.filter((filter) =>
        filterCategories[0].filters.some((f) => f.id === filter && f.id !== "tous"),
      )

      // Vérifier si les filtres incluent des sous-catégories
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

    console.log("Filtered projects:", result);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/realisations/pattern-background.jpg"
          alt="Nos réalisations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40">
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                Nos <span className="text-r2pro">Réalisations</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
                Découvrez notre portfolio de projets exceptionnels qui témoignent de notre expertise et de notre
                engagement envers la qualité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact#contact-form">
                  <CustomButton
                    size="lg"
                    className="bg-r2pro hover:bg-r2pro-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Demander un devis
                  </CustomButton>
                </Link>
                <Link href="/contact#contact-form">
                  <CustomButton
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-lg transition-all duration-300 ease-in-out"
                  >
                    Contactez-nous
                  </CustomButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
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
              filteredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants} className="h-full">
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.images[0] || "/placeholder.svg"}
                    category={project.category}
                    clientName={project.clientTestimonial ? "Client satisfait" : undefined}
                    clientReview={
                      project.clientTestimonial ? project.clientTestimonial.substring(0, 100) + "..." : undefined
                    }
                    clientRating={5}
                    href={`/realisations/${project.id}`}
                  />
                </motion.div>
              ))
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
      </section>

      {/* CTA Section */}
      <SectionDivider />
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/services/revetements-exterieurs/realisation-1.jpg"
                  alt="Réalisation R2Pro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-r2pro/70 to-transparent mix-blend-multiply"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-r2pro-800">
                  Prêt à transformer votre propriété?
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                  Que vous ayez un projet de revêtement extérieur, de peinture ou de calfeutrage, notre équipe d'experts
                  est prête à vous accompagner de la conception à la réalisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact#contact-form">
                    <CustomButton size="lg" className="bg-r2pro hover:bg-r2pro-600 text-white group">
                      <span className="flex items-center">
                        Demander un devis gratuit
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </CustomButton>
                  </Link>
                  <Link href="/contact#contact-form">
                    <CustomButton size="lg" variant="outline" className="border-r2pro text-r2pro hover:bg-r2pro/10">
                      Contactez-nous
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
