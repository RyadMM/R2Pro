"use client"

import { SectionContainer } from "@/components/SectionContainer"
import { ServiceHero } from "@/components/ServiceHero"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, CheckSquare, Droplets, Home, Paintbrush, Shield, Wind } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SoffitesFasciasClientPage() {
  // Ajout d'un état pour vérifier si le composant est monté
  const [isMounted, setIsMounted] = useState(false)

  // S'assurer que le composant est monté côté client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Si le composant n'est pas monté, afficher un état de chargement minimal
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-r2pro">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <ServiceHero
        title="Soffites et Fascias de Qualité Supérieure"
        description="Protégez votre toiture et améliorez la ventilation de votre maison avec nos solutions de soffites et fascias durables et esthétiques."
        ctaText="Demander un devis gratuit"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/services/soffites-fascias/hero-soffites.jpg"
        ctaIcon={<CheckSquare className="w-5 h-5 mr-2" />}
      />

      {/* Description Section */}
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
                Qu'est-ce que les soffites et fascias?
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                Les soffites sont les panneaux qui couvrent le dessous des avant-toits de votre maison, tandis que les
                fascias sont les planches verticales qui courent le long de la ligne de toit, où les gouttières sont
                généralement fixées.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Ensemble, ils jouent un rôle crucial dans la protection de votre toiture contre les intempéries, la
                régulation de la ventilation dans votre grenier et l'amélioration de l'apparence extérieure de votre
                maison.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">
                  Pourquoi remplacer vos soffites et fascias?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Prévenir les dommages causés par l'eau à la structure de votre toit",
                    "Améliorer la ventilation de votre grenier et réduire les problèmes d'humidité",
                    "Empêcher les animaux nuisibles d'entrer dans votre grenier",
                    "Améliorer l'efficacité énergétique de votre maison",
                    "Rehausser l'apparence extérieure de votre propriété",
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
                  src="/images/services/soffites-fascias/installation-soffites.jpg"
                  alt="Installation professionnelle de soffites et fascias"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg inline-block">
                    <p className="text-r2pro-800 font-semibold">Installation professionnelle</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Avantages Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Les avantages de soffites et fascias de qualité
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Wind,
              title: "Ventilation optimale",
              description:
                "Les soffites ventilés permettent une circulation d'air efficace dans votre grenier, réduisant l'accumulation de chaleur et d'humidité.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: Droplets,
              title: "Protection contre l'eau",
              description:
                "Des fascias bien installés protègent la structure de votre toit contre les infiltrations d'eau et les dommages qui en résultent.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: Shield,
              title: "Barrière contre les nuisibles",
              description:
                "Des soffites et fascias intacts empêchent les oiseaux, rongeurs et insectes de pénétrer dans votre grenier et d'y causer des dommages.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
            {
              icon: Home,
              title: "Esthétique améliorée",
              description:
                "Des soffites et fascias neufs rehaussent instantanément l'apparence extérieure de votre maison et augmentent sa valeur.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: Paintbrush,
              title: "Entretien réduit",
              description:
                "Les matériaux modernes nécessitent peu d'entretien et résistent aux intempéries, à la décoloration et à la pourriture.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: CheckSquare,
              title: "Durabilité exceptionnelle",
              description:
                "Nos soffites et fascias sont conçus pour durer des décennies, vous offrant tranquillité d'esprit et retour sur investissement.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
          ].map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${advantage.gradient}`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      <advantage.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-r2pro-800 mb-2">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>

                  {/* Élément décoratif au survol */}
                  <div className="mt-4 h-1 w-10 bg-r2pro-200 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section après Avantages */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/soffites-fascias/cta-mid-section.jpg"
            alt="Soffites et fascias de qualité"
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
                Protégez votre maison
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                des éléments
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
              Des soffites et fascias de qualité sont essentiels pour protéger l'intégrité structurelle de votre toit et
              prolonger sa durée de vie.
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

              <Link href="/contact#contact-form">
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
                    👋
                  </motion.span>
                  <span className="relative z-10">Prendre contact</span>
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

      {/* Matériaux Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos matériaux pour soffites et fascias
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <Tabs defaultValue="aluminium" className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <TabsList className="inline-flex p-1 rounded-full bg-white shadow-md">
              {["aluminium", "acier", "vinyle", "bois"].map((material) => (
                <TabsTrigger
                  key={material}
                  value={material}
                  className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
                >
                  {material.charAt(0).toUpperCase() + material.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Contenu des onglets */}
          <TabsContent value="aluminium" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/soffites-fascias/materiau-aluminium.jpg"
                        alt="Soffites et fascias en aluminium"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Soffites et fascias en aluminium</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      L'aluminium est le matériau le plus populaire pour les soffites et fascias en raison de sa
                      durabilité et de sa résistance aux intempéries.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Résistant à la rouille et à la corrosion</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Nécessite peu d'entretien</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Disponible dans une variété de couleurs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Longue durée de vie (30+ ans)</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Maisons résidentielles, propriétés dans des zones à forte humidité ou près
                      de l'eau.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="acier" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/soffites-fascias/materiau-acier.jpg"
                        alt="Soffites et fascias en acier"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Soffites et fascias en acier</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      L'acier offre une robustesse exceptionnelle et une excellente résistance aux conditions
                      météorologiques extrêmes.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Extrêmement robuste et durable</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Résistant aux impacts et aux déformations</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Excellente résistance au feu</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Idéal pour les climats rigoureux</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Régions à conditions météorologiques extrêmes, zones à risque d'impact
                      (grêle), propriétés nécessitant une durabilité maximale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vinyle" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/soffites-fascias/materiau-vinyle.jpg"
                        alt="Soffites et fascias en vinyle"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Soffites et fascias en vinyle</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le vinyle est une option économique qui offre une bonne durabilité et une facilité d'installation.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Option la plus économique</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Résistant à l'humidité et aux insectes</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Facile à installer et à remplacer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Ne nécessite pas de peinture</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Projets avec budget limité, maisons dans des climats modérés.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bois" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/soffites-fascias/materiau-bois.jpg"
                        alt="Soffites et fascias en bois"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Soffites et fascias en bois</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le bois offre une apparence naturelle et chaleureuse, idéale pour les maisons de style
                      traditionnel ou rustique.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Esthétique naturelle et chaleureuse</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Peut être peint ou teint dans n'importe quelle couleur
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Matériau renouvelable et écologique</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Facile à réparer et à modifier</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Maisons historiques, chalets, propriétés de style rustique ou traditionnel.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SectionContainer>

      {/* Notre processus Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Notre processus d'installation
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {[
            {
              title: "Évaluation et mesures",
              description:
                "Nous commençons par une évaluation complète de vos soffites et fascias existants pour identifier les problèmes et prendre des mesures précises.",
              image: "/images/services/soffites-fascias/etape-evaluation.jpg",
            },
            {
              title: "Sélection des matériaux",
              description:
                "Nous vous guidons dans le choix des matériaux et des styles qui correspondent le mieux à votre maison et à vos besoins spécifiques.",
              image: "/images/services/soffites-fascias/etape-selection.jpg",
            },
            {
              title: "Préparation",
              description:
                "Nous préparons soigneusement la zone de travail et retirons les anciens soffites et fascias en prenant soin de ne pas endommager votre maison.",
              image: "/images/services/soffites-fascias/etape-preparation.jpg",
            },
            {
              title: "Installation",
              description:
                "Nos techniciens qualifiés installent les nouveaux soffites et fascias avec précision, en veillant à une ventilation adéquate et à une étanchéité parfaite.",
              image: "/images/services/soffites-fascias/etape-installation.jpg",
            },
            {
              title: "Finition et nettoyage",
              description:
                "Nous finalisons l'installation, vérifions la qualité du travail et nettoyons complètement la zone pour vous laisser une propriété impeccable.",
              image: "/images/services/soffites-fascias/etape-verification.jpg",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-12 md:mb-20 last:mb-0`}
            >
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <motion.div
                  className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-14 h-14 md:w-16 md:h-16 bg-r2pro-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold rounded-tr-xl">
                    {index + 1}
                  </div>
                </motion.div>
              </div>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8 lg:pl-12" : "md:pr-8 lg:pr-12"}`}>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-r2pro-600">{step.title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6">{step.description}</p>
                <div className="w-16 h-1 bg-r2pro-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Galerie Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos réalisations de soffites et fascias
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/images/services/soffites-fascias/realisation-1.jpg",
              alt: "Installation de soffites en aluminium",
              title: "Soffites en aluminium",
            },
            {
              src: "/images/services/soffites-fascias/realisation-2.jpg",
              alt: "Installation de fascias en aluminium",
              title: "Fascias en aluminium",
            },
            {
              src: "/images/services/soffites-fascias/realisation-3.jpg",
              alt: "Soffites ventilés",
              title: "Soffites ventilés",
            },
            {
              src: "/images/services/soffites-fascias/realisation-4.jpg",
              alt: "Soffites et fascias en vinyle",
              title: "Ensemble en vinyle",
            },
            {
              src: "/images/services/soffites-fascias/realisation-5.jpg",
              alt: "Détail de fascias",
              title: "Détail de fascias",
            },
            {
              src: "/images/services/soffites-fascias/realisation-6.jpg",
              alt: "Avant/après remplacement",
              title: "Avant/après remplacement",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="inline-block"
          >
            <Link
              href="/realisations"
              className="bg-r2pro hover:bg-r2pro-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center shadow-lg transition-all duration-300"
            >
              <span>Voir plus de réalisations</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </SectionContainer>

      {/* CTA Section finale */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/soffites-fascias/cta-background.jpg"
            alt="Soffites et fascias de qualité"
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
                Protégez votre maison avec des soffites et fascias de qualité
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd'hui pour une évaluation gratuite et un devis personnalisé pour votre projet.
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
                        <CheckSquare className="w-5 h-5" />
                      </motion.span>
                      <span className="relative z-10">Demander une soumission gratuite</span>
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
