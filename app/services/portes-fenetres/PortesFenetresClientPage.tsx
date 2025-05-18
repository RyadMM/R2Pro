"use client"

import { SectionContainer } from "@/components/SectionContainer"
import { ServiceHero } from "@/components/ServiceHero"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, CheckSquare, DollarSign, Lock, Shield, Thermometer, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PortesFenetresClientPage() {
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
        title="Portes et Fenêtres de Qualité Supérieure"
        description="Améliorez l'efficacité énergétique et l'esthétique de votre maison avec nos solutions de portes et fenêtres sur mesure."
        ctaText="Demander un devis gratuit"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/services/portes-fenetres/hero-porte-fenetre.jpg"
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
                Pourquoi choisir R2Pro pour vos portes et fenêtres?
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                Les portes et fenêtres sont bien plus que de simples ouvertures dans votre maison. Elles jouent un rôle
                crucial dans l'efficacité énergétique, la sécurité, l'isolation acoustique et l'esthétique de votre
                propriété.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Chez R2Pro, nous comprenons l'importance de choisir les bonnes portes et fenêtres pour votre maison.
                C'est pourquoi nous offrons une gamme complète de produits de haute qualité, installés par des
                professionnels expérimentés pour garantir performance et durabilité.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">Notre engagement envers l'excellence</h3>
                <ul className="space-y-3">
                  {[
                    "Consultation personnalisée pour comprendre vos besoins spécifiques",
                    "Produits de haute qualité provenant des meilleurs fabricants",
                    "Installation professionnelle par des techniciens certifiés",
                    "Service après-vente impeccable et garantie sur tous nos produits",
                    "Solutions écoénergétiques pour réduire votre empreinte carbone",
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
                  src="/images/services/portes-fenetres/installation-fenetre.jpg"
                  alt="Installation professionnelle de fenêtres"
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
          Les avantages de nouvelles portes et fenêtres
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
              icon: Thermometer,
              title: "Efficacité énergétique",
              description:
                "Réduisez vos factures d'énergie grâce à une meilleure isolation thermique qui limite les pertes de chaleur en hiver et les gains de chaleur en été.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: Zap,
              title: "Confort amélioré",
              description:
                "Éliminez les courants d'air et maintenez une température constante dans votre maison tout au long de l'année.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: DollarSign,
              title: "Valeur ajoutée",
              description:
                "Augmentez la valeur de votre propriété grâce à des portes et fenêtres modernes qui améliorent l'apparence et la performance énergétique.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
            {
              icon: Shield,
              title: "Isolation acoustique",
              description:
                "Réduisez les bruits extérieurs et profitez d'un environnement intérieur plus calme et paisible.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: Lock,
              title: "Sécurité renforcée",
              description:
                "Protégez votre maison avec des systèmes de verrouillage modernes et des matériaux résistants aux tentatives d'effraction.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: CheckSquare,
              title: "Entretien minimal",
              description:
                "Profitez de matériaux durables et faciles à entretenir qui conservent leur apparence et leurs performances pendant des années.",
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




      {/* CTA Section finale */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/portes-fenetres/cta-background.jpg"
            alt="Portes et fenêtres de qualité"
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
                Transformez votre maison avec des portes et fenêtres de qualité
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé pour votre
                projet.
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
