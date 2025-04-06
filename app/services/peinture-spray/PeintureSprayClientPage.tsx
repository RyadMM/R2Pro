"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ServiceHero } from "@/components/ServiceHero"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { CategoryTabs } from "@/components/CategoryTabs"
import { CheckCircle2, ArrowRight, CheckSquare, Phone } from "lucide-react"
import Link from "next/link"
import { SectionContainer } from "@/components/SectionContainer"

// Projets fictifs de peinture au spray - à remplacer par des données réelles
const projects = [
  {
    id: 101,
    category: "peinture",
    subcategory: "interieur",
    images: ["/images/services/peinture-spray/realisation-1.jpg"],
    title: "Rénovation intérieure complète",
    description: "Peinture au spray de toutes les pièces d'une maison moderne avec finition impeccable.",
  },
  {
    id: 102,
    category: "peinture",
    subcategory: "exterieur",
    images: ["/images/services/peinture-spray/realisation-2.jpg"],
    title: "Revitalisation de façade",
    description: "Application de peinture au spray sur la façade extérieure pour un fini uniforme et durable.",
  },
  {
    id: 103,
    category: "peinture",
    subcategory: "commercial",
    images: ["/images/services/peinture-spray/realisation-3.jpg"],
    title: "Projet commercial",
    description: "Peinture au spray d'un espace commercial avec des exigences strictes de qualité et de délai.",
  },
  {
    id: 104,
    category: "peinture",
    subcategory: "interieur",
    images: ["/images/services/peinture-spray/realisation-4.jpg"],
    title: "Rénovation de cuisine",
    description: "Application de peinture au spray sur les armoires de cuisine pour un fini lisse et professionnel.",
  },
  {
    id: 105,
    category: "peinture",
    subcategory: "exterieur",
    images: ["/images/services/peinture-spray/realisation-5.jpg"],
    title: "Peinture de clôture",
    description: "Application uniforme de peinture au spray sur une clôture extérieure pour une protection durable.",
  },
  {
    id: 106,
    category: "peinture",
    subcategory: "commercial",
    images: ["/images/services/peinture-spray/realisation-6.jpg"],
    title: "Bureaux corporatifs",
    description: "Peinture au spray des murs et plafonds d'un espace de bureaux avec des couleurs personnalisées.",
  },
]

const categories = ["tout", "interieur", "exterieur", "commercial"]
const applicationCategories = ["interieur", "exterieur", "commercial", "specialise"]

export default function PeintureSprayClientPage() {
  const [filter, setFilter] = useState("tout")
  const [applicationTab, setApplicationTab] = useState("interieur")

  const filteredProjects = filter === "tout" ? projects : projects.filter((project) => project.subcategory === filter)

  return (
    <div className="min-h-screen relative">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* 1. Hero Section */}
      <ServiceHero
        title="Peinture au Spray Professionnelle"
        description="Services de peinture au spray de haute qualité pour un fini impeccable et durable sur vos surfaces intérieures et extérieures."
        ctaText="Demander une soumission"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/services/peinture-spray/hero-peinture.jpg"
        ctaIcon={<Phone className="w-5 h-5 mr-2" />}
      />

      {/* 2. Description Section - Nos services */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-6 text-r2pro-800 relative"
              >
                Nos services de peinture au spray
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                Chez R2Pro, nous offrons des services de peinture au spray de haute qualité pour les projets
                résidentiels et commerciaux. Notre technique d'application au spray garantit un fini uniforme, lisse et
                durable que les méthodes traditionnelles ne peuvent égaler.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Notre équipe de professionnels utilise des équipements de pointe et des peintures de première qualité
                pour assurer des résultats exceptionnels, qu'il s'agisse de murs intérieurs, de façades extérieures ou
                d'éléments architecturaux spécifiques.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">Pourquoi choisir la peinture au spray?</h3>
                <ul className="space-y-3">
                  {[
                    "Application plus rapide que les méthodes traditionnelles",
                    "Fini uniforme sans traces de pinceau ou de rouleau",
                    "Couverture supérieure, même sur les surfaces texturées",
                    "Pénétration optimale dans les recoins et les zones difficiles d'accès",
                    "Durabilité accrue du revêtement final",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-r2pro mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full bg-r2pro/10 rounded-2xl transform rotate-3"></div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/images/services/peinture-spray/service-application.jpg"
                  alt="Application professionnelle de peinture au spray"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg inline-block">
                    <p className="text-r2pro-800 font-semibold">Application professionnelle</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Applications Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos applications de peinture au spray
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <Tabs defaultValue="interieur" value={applicationTab} className="max-w-4xl mx-auto">
          <CategoryTabs
            categories={applicationCategories}
            activeCategory={applicationTab}
            onChange={setApplicationTab}
            className="mb-6"
          />

          {/* Contenu des onglets */}
          {applicationCategories.map((application) => (
            <TabsContent key={application} value={application} className="mt-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={`/images/services/peinture-spray/application-${application}.jpg`}
                          alt={`Application de peinture au spray ${application}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4 md:p-6">
                      <h3 className="text-xl font-semibold mb-3 text-r2pro-700">
                        Application{" "}
                        {application === "interieur"
                          ? "intérieure"
                          : application === "exterieur"
                            ? "extérieure"
                            : application === "commercial"
                              ? "commerciale"
                              : "spécialisée"}
                      </h3>
                      <p className="text-sm md:text-base mb-4 leading-relaxed">
                        {application === "interieur" &&
                          "Notre service de peinture au spray intérieure transforme vos espaces de vie avec un fini impeccable. Idéal pour les murs, plafonds, armoires et boiseries."}
                        {application === "exterieur" &&
                          "La peinture au spray extérieure offre une protection durable contre les éléments tout en rehaussant l'apparence de votre propriété avec un fini uniforme."}
                        {application === "commercial" &&
                          "Nos services de peinture au spray commerciale répondent aux exigences strictes des entreprises, avec des délais respectés et une qualité professionnelle."}
                        {application === "specialise" &&
                          "Nous offrons des services spécialisés pour les projets complexes nécessitant des techniques avancées, comme les finitions métallisées, texturées ou multi-couches."}
                      </p>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Surfaces traitées:</h4>
                      <ul className="space-y-1 mb-4">
                        {application === "interieur" && (
                          <>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Murs et plafonds</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Armoires de cuisine et salles de bain</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Portes et encadrements</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Moulures et boiseries</span>
                            </li>
                          </>
                        )}
                        {application === "exterieur" && (
                          <>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Façades et murs extérieurs</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Clôtures et portails</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Terrasses et patios</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Garages et dépendances</span>
                            </li>
                          </>
                        )}
                        {application === "commercial" && (
                          <>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Bureaux et espaces de travail</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Commerces et boutiques</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Entrepôts et zones industrielles</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Restaurants et hôtels</span>
                            </li>
                          </>
                        )}
                        {application === "specialise" && (
                          <>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Finitions métallisées et nacrées</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Surfaces texturées et effets spéciaux</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Peinture époxy et polyuréthane</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">Restauration de surfaces historiques</span>
                            </li>
                          </>
                        )}
                      </ul>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Avantages clés:{" "}
                        {application === "interieur"
                          ? "Finition lisse sans traces, séchage rapide, couverture uniforme même sur les surfaces texturées."
                          : application === "exterieur"
                            ? "Protection durable contre les UV et les intempéries, application rapide, pénétration dans les recoins difficiles d'accès."
                            : application === "commercial"
                              ? "Délais d'exécution réduits, perturbation minimale des activités, résistance accrue à l'usure quotidienne."
                              : "Effets visuels impossibles à obtenir avec des méthodes traditionnelles, durabilité supérieure, personnalisation complète."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </SectionContainer>

      {/* 4. CTA Section du milieu */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/peinture-spray/cta-mid-section.jpg"
            alt="Peinture au spray professionnelle"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Particules animées */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-r2pro/10 blur-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-heading"
            >
              <span className="relative inline-block">
                Transformez vos surfaces
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                avec un fini impeccable
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-10 max-w-2xl mx-auto text-white/90"
            >
              Notre technique de peinture au spray offre un résultat uniforme et durable que les méthodes
              traditionnelles ne peuvent égaler.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative inline-block group"
            >
              {/* Effet de halo animé derrière le bouton */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <Link href="#contact-form">
                <motion.button
                  className="relative bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center shadow-lg border-2 border-white/80 group z-10 overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 114, 206, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Effet de gradient qui se déplace au survol */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-r2pro-400 to-r2pro-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>

                  <motion.span
                    className="mr-2 text-xl relative z-10"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🎨
                  </motion.span>
                  <span className="relative z-10">Demander un devis</span>
                  <motion.div
                    className="ml-2 relative z-10"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </motion.div>
                </motion.button>
              </Link>

              {/* Effet de brillance sous le bouton */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/20 blur-xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Réalisations Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos réalisations de peinture au spray
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <Tabs defaultValue="tout" value={filter} className="w-full mb-12">
          <CategoryTabs categories={categories} activeCategory={filter} onChange={setFilter} className="mb-6" />
        </Tabs>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Link href={`/services/peinture-spray/${project.id}`}>
                  <div className="relative h-64">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-r2pro mb-2">{project.subcategory}</p>
                    <p className="text-gray-800 leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionContainer>

      {/* 6. CTA Section final */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/peinture-spray/cta-background.jpg"
            alt="Peinture au spray professionnelle"
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
                Prêt à donner vie à votre projet de peinture?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Faites confiance à nos experts pour un résultat impeccable. Obtenez votre devis personnalisé en quelques
                clics.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="relative">
                  <Link href="#contact-form">
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
                        <CheckSquare className="w-5 h-5" />
                      </motion.span>
                      <span className="relative z-10">Obtenir un devis sans engagement</span>
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
                        <ArrowRight className="w-5 h-5" />
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

