"use client"

import { ServiceHero } from "@/components/ServiceHero"
import { AnimatedSection } from "@/components/AnimatedSection"
import Image from "next/image"
import { motion } from "framer-motion"
import { PenToolIcon as Tool, Users, Clock, Award, CheckCircle2, ArrowRight, CheckSquare } from "lucide-react"
import { CountUp } from "@/components/CountUp"
import { SectionContainer } from "@/components/SectionContainer"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalfeutrageClientPage() {
  const processSteps = [
    {
      title: "Inspection et évaluation",
      description:
        "Notre équipe d'experts examine minutieusement votre propriété pour identifier toutes les zones nécessitant du calfeutrage et vous fournit un diagnostic détaillé.",
      image: "/images/services/calfeutrage/etape-inspection.jpg",
    },
    {
      title: "Préparation des surfaces",
      description:
        "Nous nettoyons et préparons soigneusement chaque surface pour assurer une adhérence optimale du scellant, garantissant ainsi une durabilité maximale.",
      image: "/images/services/calfeutrage/etape-preparation.jpg",
    },
    {
      title: "Application du scellant",
      description:
        "Nos techniciens certifiés appliquent des scellants de haute qualité, spécifiquement choisis selon le type de surface et les conditions environnementales de votre propriété.",
      image: "/images/services/calfeutrage/etape-application.jpg",
    },
    {
      title: "Finition et vérification",
      description:
        "Chaque joint est soigneusement fini pour un résultat esthétique et durable, suivi d'une vérification complète pour garantir l'étanchéité parfaite de votre propriété.",
      image: "/images/services/calfeutrage/etape-verification.jpg",
    },
  ]

  const trustCards = [
    {
      icon: Users,
      title: "Clients satisfaits",
      value: 500,
      suffix: "+",
      description: "Des propriétaires satisfaits partout au Québec nous recommandent pour la qualité de notre travail.",
      delay: 0.1,
      gradient: "from-r2pro-100 to-r2pro-200",
    },
    {
      icon: Clock,
      title: "Années d'expérience",
      value: 15,
      suffix: "+",
      description: "Notre équipe possède plus de 15 ans d'expérience dans le domaine du calfeutrage professionnel.",
      delay: 0.2,
      gradient: "from-r2pro-200 to-r2pro-300",
    },
    {
      icon: Award,
      title: "Satisfaction garantie",
      value: 100,
      suffix: "%",
      description: "Nous nous engageons à offrir un service de qualité supérieure et une satisfaction totale.",
      delay: 0.3,
      gradient: "from-r2pro-300 to-r2pro-400",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <ServiceHero
        title="Calfeutrage Professionnel"
        description="Protection optimale contre les infiltrations d'eau et d'air pour votre propriété"
        ctaText="Demander une soumission"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/services/calfeutrage/hero-calfeutrage.jpg"
        ctaIcon={<CheckSquare className="w-5 h-5 mr-2" />}
      />

      {/* Introduction - Maintenant en premier */}
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
                L&apos;importance du calfeutrage professionnel
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                Le calfeutrage est un investissement essentiel pour préserver votre propriété et réaliser des économies
                d&apos;énergie significatives. Une mauvaise étanchéité peut augmenter votre facture d&apos;énergie
                jusqu&apos;à 15% et causer des dommages structurels à long terme.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Chez R2Pro, nous utilisons des techniques avancées et des matériaux de première qualité pour assurer une
                étanchéité parfaite et durable de votre maison.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">
                  Pourquoi choisir R2Pro pour votre calfeutrage?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Expertise technique et connaissance approfondie des matériaux de calfeutrage",
                    "Équipe de professionnels certifiés et expérimentés",
                    "Utilisation de produits de haute qualité adaptés à chaque application",
                    "Garantie sur tous nos travaux pour votre tranquillité d'esprit",
                    "Service personnalisé et conseils d'experts pour des solutions durables",
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
                  src="/images/services/calfeutrage/calfeutrage-maison.jpg"
                  alt="Application professionnelle de calfeutrage"
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

      {/* Bannière de confiance - Maintenant en deuxième */}
      <SectionContainer className="py-16 md:py-24 section-alt">
        <div className="absolute top-0 right-0 w-64 h-64 bg-r2pro-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/3 left-0 w-32 h-32 bg-r2pro-300 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-r2pro-400 rounded-full opacity-10 blur-2xl pointer-events-none"></div>

        <AnimatedSection animation="fadeIn" className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-6 text-r2pro-800 relative mx-auto"
          >
            Faites confiance aux experts
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Plus de 500 propriétaires nous ont fait confiance pour leurs travaux de calfeutrage. Rejoignez-les et
            profitez d&apos;une maison parfaitement étanche et économe en énergie.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 border border-gray-100 p-8 text-center relative">
                  {/* Gradient background that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-r2pro-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Animated counter */}
                    <div className="text-4xl font-bold text-r2pro-600 mb-3 transition-all duration-300 group-hover:text-r2pro-700 group-hover:scale-110">
                      <CountUp end={card.value} suffix={card.suffix} />
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold mb-3 text-r2pro-700 transition-all duration-300 group-hover:text-r2pro-800">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-r2pro-50/0 to-r2pro-100/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* CTA Additionnel avec image de fond */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/calfeutrage/cta-mid-background.jpg"
            alt="Calfeutrage professionnel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-r2pro-800/80 to-r2pro-900/60"></div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Formes décoratives */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-r2pro-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-r2pro-300/10 rounded-full blur-3xl"></div>

        {/* Contenu */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Protégez votre investissement
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-8 text-white/90"
            >
              Un calfeutrage professionnel peut prolonger la durée de vie de votre propriété et réduire vos coûts
              énergétiques.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-white text-r2pro-600 hover:bg-r2pro-50 px-8 py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 flex items-center shadow-lg group"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10 flex items-center">
                    <CheckSquare className="w-5 h-5 mr-3 text-r2pro-500" />
                    <span>Obtenir une évaluation gratuite</span>
                    <motion.div
                      className="ml-3 opacity-70 group-hover:opacity-100 transition-all"
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
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <AnimatedSection animation="fadeIn" className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-6 text-r2pro-800 relative mx-auto"
          >
            Les avantages du calfeutrage professionnel
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Un calfeutrage professionnel offre de nombreux avantages pour votre maison et votre confort au quotidien.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-r2pro-500 rounded-full"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Économies d'énergie",
                description:
                  "Réduisez votre facture d'électricité en éliminant les fuites d'air et les pertes de chaleur.",
                icon: "droplet",
                gradient: "from-r2pro-400 to-r2pro-500",
              },
              {
                title: "Protection contre l'humidité",
                description: "Prévenez les infiltrations d'eau qui peuvent causer des dommages structurels coûteux.",
                icon: "tool",
                gradient: "from-r2pro-500 to-r2pro-600",
              },
              {
                title: "Durabilité accrue",
                description: "Prolongez la durée de vie de vos portes, fenêtres et revêtements extérieurs.",
                icon: "trash",
                gradient: "from-r2pro-600 to-r2pro-700",
              },
              {
                title: "Barrière contre les insectes",
                description: "Empêchez les insectes et nuisibles de pénétrer dans votre maison.",
                icon: "shield",
                gradient: "from-r2pro-400 to-r2pro-500",
              },
              {
                title: "Confort amélioré",
                description: "Éliminez les courants d'air et maintenez une température constante dans votre maison.",
                icon: "link",
                gradient: "from-r2pro-500 to-r2pro-600",
              },
              {
                title: "Investissement rentable",
                description: "Un calfeutrage professionnel offre un excellent retour sur investissement à long terme.",
                icon: "droplets",
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
                        {advantage.icon === "droplet" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                          </svg>
                        )}
                        {advantage.icon === "tool" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                          </svg>
                        )}
                        {advantage.icon === "trash" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                        )}
                        {advantage.icon === "shield" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        )}
                        {advantage.icon === "link" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                        )}
                        {advantage.icon === "droplets" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                          </svg>
                        )}
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
        </AnimatedSection>
      </SectionContainer>

      {/* Notre processus Section - Cartes en zig-zag */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Notre processus de calfeutrage
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="fadeIn"
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
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>

      {/* Applications Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos applications de calfeutrage
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <Tabs defaultValue="fenetres" className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <TabsList className="inline-flex p-1 rounded-full bg-white shadow-md">
              {["fenetres", "portes", "joints", "exterieur"].map((application) => (
                <TabsTrigger
                  key={application}
                  value={application}
                  className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
                >
                  {application === "fenetres"
                    ? "Fenêtres"
                    : application === "portes"
                      ? "Portes"
                      : application === "joints"
                        ? "Joints de maçonnerie"
                        : "Revêtement extérieur"}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Contenu des onglets */}
          <TabsContent value="fenetres" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/calfeutrage/application-fenetres.jpg"
                        alt="Calfeutrage de fenêtres"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Calfeutrage de fenêtres</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le calfeutrage des fenêtres est essentiel pour prévenir les infiltrations d&apos;air et
                      d&apos;eau, réduire les pertes de chaleur et améliorer l&apos;efficacité énergétique de votre
                      maison.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Élimine les courants d&apos;air</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Réduit les pertes de chaleur</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Prévient les infiltrations d&apos;eau</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Améliore l&apos;isolation acoustique</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications: Fenêtres de tous types, cadres de fenêtres, contours de fenêtres, joints entre le
                      cadre et le mur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portes" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/calfeutrage/application-portes.jpg"
                        alt="Calfeutrage de portes"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Calfeutrage de portes</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le calfeutrage des portes est crucial pour maintenir une température confortable dans votre maison
                      et réduire vos factures d&apos;énergie.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Élimine les courants d&apos;air</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Améliore l&apos;efficacité énergétique</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Empêche les insectes d&apos;entrer</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Réduit le bruit extérieur</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications: Portes d&apos;entrée, portes-patio, portes de garage, cadres de portes, seuils.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="joints" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/calfeutrage/application-joints.jpg"
                        alt="Calfeutrage de joints de maçonnerie"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Calfeutrage de joints de maçonnerie</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le calfeutrage des joints de maçonnerie protège l&apos;intégrité structurelle de votre maison en
                      empêchant l&apos;eau de s&apos;infiltrer dans les fissures et les joints.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Prévient les dommages causés par l&apos;eau</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Prolonge la durée de vie de la maçonnerie</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Améliore l&apos;apparence extérieure</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Prévient la formation de moisissure</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications: Joints de briques, joints de pierres, fissures dans la maçonnerie, joints entre
                      différents matériaux.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exterieur" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/calfeutrage/application-exterieur.jpg"
                        alt="Calfeutrage de revêtement extérieur"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Calfeutrage de revêtement extérieur</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le calfeutrage du revêtement extérieur est essentiel pour protéger votre maison contre les
                      éléments et maintenir son apparence et sa valeur.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Protège contre les infiltrations d&apos;eau</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Prévient les dommages structurels</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Prolonge la durée de vie du revêtement</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Améliore l&apos;apparence générale</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications: Joints de revêtement, coins extérieurs, pénétrations (tuyaux, ventilation),
                      jonctions entre différents matériaux.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SectionContainer>

      {/* Notre expertise */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <AnimatedSection animation="fadeIn" className="max-w-4xl mx-auto">
          <div className="bg-r2pro-50 p-6 md:p-8 lg:p-12 rounded-2xl shadow-md border border-r2pro-100">
            <div className="flex items-center justify-center mb-6">
              <Tool className="h-8 w-8 text-r2pro-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-r2pro-600 font-heading">Notre expertise</h2>
            </div>

            <p className="text-base md:text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Chez R2Pro, nous utilisons exclusivement des scellants de première qualité, spécifiquement choisis en
              fonction du type de surface à calfeutrer. Notre équipe d&apos;experts suit rigoureusement les normes de
              l&apos;industrie pour vous offrir une protection durable contre les éléments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="w-8 h-8 bg-r2pro-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-r2pro-600 font-bold">1</span>
                  </span>
                  Types de surfaces
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Fenêtres et portes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Joints de maçonnerie
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Revêtements extérieurs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Fondations
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="w-8 h-8 bg-r2pro-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-r2pro-600 font-bold">2</span>
                  </span>
                  Nos garanties
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Matériaux de qualité supérieure
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Travail soigné et précis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Garantie de 5 ans sur nos travaux
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-r2pro-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Service après-vente réactif
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 pt-6 border-t border-r2pro-200">
              <h3 className="text-center text-lg font-semibold mb-4 text-gray-800">
                Nos certifications et affiliations
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-xs font-semibold text-gray-500">RBQ Certifié</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-xs font-semibold text-gray-500">APCHQ</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center w-24 h-16">
                  <span className="text-xs font-semibold text-gray-500">CAA Québec</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>

      {/* CTA Section finale */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/calfeutrage/cta-background.jpg"
            alt="Calfeutrage professionnel"
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
                Protégez votre propriété dès maintenant
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd&apos;hui pour une évaluation gratuite et un devis personnalisé pour vos
                besoins de calfeutrage.
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

