"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ServiceHero } from "@/components/ServiceHero"
import { CheckCircle2, ArrowRight, CheckSquare } from "lucide-react"
import { projects } from "@/lib/projectData"
import Link from "next/link"
import { SectionContainer } from "@/components/SectionContainer"
import { AnimatedSection } from "@/components/AnimatedSection"
import { MaterialTabs } from "@/components/MaterialTabs"
import { ProjectGallery } from "@/components/ProjectGallery"

const categories = ["tout", "aluminium", "vinyle", "fibrociment", "bois"]
const materiaux = ["aluminium", "acier", "vinyle", "fibrociment", "bois"]

// Informations sur les matériaux
const materialInfo = {
  aluminium: {
    title: "Revêtement en aluminium",
    description:
      "L'aluminium est un matériau léger, durable et résistant à la corrosion, idéal pour les climats québécois avec des hivers rigoureux.",
    advantages: [
      "Extrêmement durable (durée de vie de 40+ ans)",
      "Résistant à la rouille, à la corrosion et aux intempéries",
      "Nécessite peu d'entretien",
      "Large gamme de couleurs et de finitions disponibles",
    ],
    applications:
      "Maisons résidentielles, bâtiments commerciaux, régions avec des conditions météorologiques extrêmes.",
    imagePath: "/images/services/revetements-exterieurs/materiau-aluminium.jpg",
  },
  acier: {
    title: "Revêtement en acier",
    description:
      "L'acier offre une résistance exceptionnelle aux impacts et aux intempéries, parfait pour les propriétés exposées à des conditions difficiles.",
    advantages: [
      "Extrêmement robuste et résistant aux impacts",
      "Excellente résistance au feu",
      "Longue durée de vie (50+ ans avec un bon entretien)",
      "Disponible en différentes épaisseurs et finitions",
    ],
    applications:
      "Bâtiments commerciaux, propriétés dans des zones à risque d'impact (grêle), régions avec des vents forts.",
    imagePath: "/images/services/revetements-exterieurs/materiau-acier.jpg",
  },
  vinyle: {
    title: "Revêtement en vinyle",
    description:
      "Le vinyle est une option économique et polyvalente qui offre un excellent rapport qualité-prix tout en nécessitant peu d'entretien.",
    advantages: [
      "Économique et facile à installer",
      "Résistant à l'humidité et aux insectes",
      "Disponible dans une large gamme de couleurs et de styles",
      "Ne nécessite pas de peinture et est facile à nettoyer",
    ],
    applications: "Maisons résidentielles, projets avec budget limité, propriétés nécessitant peu d'entretien.",
    imagePath: "/images/services/revetements-exterieurs/materiau-vinyle.jpg",
  },
  fibrociment: {
    title: "Revêtement en fibrociment",
    description:
      "Le fibro-ciment combine la durabilité et l'apparence du bois avec une résistance supérieure au feu, aux insectes et à l'humidité.",
    advantages: [
      "Extrêmement durable (durée de vie de 50+ ans)",
      "Résistant au feu, aux insectes et à la pourriture",
      "Imite l'apparence du bois sans ses inconvénients",
      "Stable dimensionnellement (ne se dilate pas ou ne se contracte pas)",
    ],
    applications:
      "Maisons haut de gamme, propriétés dans des zones humides ou à risque d'incendie, styles architecturaux traditionnels.",
    imagePath: "/images/services/revetements-exterieurs/materiau-fibrociment.jpg",
  },
  bois: {
    title: "Revêtement en bois",
    description:
      "Les revêtements en bois comme CanExel et Maibec offrent une beauté naturelle et une chaleur incomparable à votre propriété.",
    advantages: [
      "Esthétique naturelle et chaleureuse",
      "Matériau renouvelable et écologique",
      "Excellente isolation thermique et acoustique",
      "Disponible en différentes essences, textures et finitions",
    ],
    applications: "Chalets, maisons de style rustique ou traditionnel, propriétés dans des environnements boisés.",
    imagePath: "/images/services/revetements-exterieurs/materiau-bois.jpg",
  },
}

export default function RevetementsExterieursClientPage() {
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
    <div className="min-h-screen relative">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-r2pro-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <ServiceHero
        title="Revêtements Extérieurs de Qualité Supérieure"
        description="Transformez l'apparence de votre maison avec nos solutions de revêtements extérieurs durables, esthétiques et adaptées à votre style."
        ctaText="Demander un devis gratuit"
        ctaLink="/contact#contact-form"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-revetement.jpg-2K86O48EfANHr085RNSm3Y3DOwzJTP.jpeg"
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
                Nos Matériaux de Revêtement Extérieur
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                Chez R2Pro, nous offrons une gamme complète de services d'installation, de remplacement et de réparation
                de revêtements extérieurs pour les propriétés résidentielles et commerciales.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Notre équipe d'experts utilise des matériaux de première qualité et des techniques d'installation
                éprouvées pour garantir un résultat durable, esthétique et résistant aux intempéries du Québec.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">
                  Pourquoi choisir R2Pro pour votre revêtement extérieur?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Plus de 15 ans d'expérience dans l'installation de revêtements extérieurs",
                    "Équipe de professionnels certifiés et formés aux dernières techniques",
                    "Large sélection de matériaux de qualité supérieure",
                    "Garantie sur tous nos travaux d'installation",
                    "Service personnalisé et conseils d'experts pour choisir le meilleur revêtement",
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
                  src="/images/services/revetements-exterieurs/service-installation.jpg"
                  alt="Installation professionnelle de revêtement extérieur"
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

      {/* Réalisations Section - Avec le nouveau composant ProjectGallery */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <AnimatedSection animation="rotateIn">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-r2pro-800 relative mx-auto"
          >
            Nos Réalisations de Revêtements
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <p className="text-center text-gray-800 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Découvrez nos projets récents de revêtements extérieurs réalisés par notre équipe d'experts
          </p>
        </AnimatedSection>

        <ProjectGallery
          projects={projects}
          categories={categories}
          baseCategory="revetement"
          linkPrefix="/services/revetements-exterieurs"
        />
      </SectionContainer>

      {/* Matériaux Section - Avec le nouveau composant MaterialTabs */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <AnimatedSection animation="rotateIn">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-r2pro-800 relative mx-auto"
          >
            Nos Matériaux de Revêtement
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <p className="text-center text-gray-800 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Découvrez les différents matériaux que nous utilisons pour vos projets de revêtements extérieurs
          </p>
        </AnimatedSection>

        <MaterialTabs
          materials={materiaux}
          materialInfo={materialInfo}
          basePath="/images/services/revetements-exterieurs/materiau-"
        />
      </SectionContainer>

      {/* CTA Section - Transformez l'apparence de votre maison */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7491.JPG-9MDIcElScHwlX4ezp3lpeDzJB5GCHH.jpeg"
            alt="Revêtement extérieur de qualité"
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
                Transformez l'apparence de votre maison
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé pour votre projet
                de revêtement extérieur.
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
                      <span className="mr-2 relative z-10">
                        <CheckSquare className="w-5 h-5" />
                      </span>
                      <span className="relative z-10">Demander une soumission gratuite</span>
                      <span className="ml-2 relative z-10">
                        <ArrowRight className="w-5 h-5" />
                      </span>
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
// Vérifier comment le composant ProjectGallery est utilisé et s'assurer que la propriété images est correctement passée

// Si le composant ProjectGallery est utilisé, assurez-vous qu'il reçoit un tableau d'images valide
// Par exemple, si vous avez un code comme:
// <ProjectGallery images={someImages} />
// Assurez-vous que someImages est défini et est un tableau

// Exemple de correction:
// Avant: <ProjectGallery images={someImages} />
// Après: <ProjectGallery images={someImages || []} />

// Ou si vous avez besoin de définir des images par défaut:
// const defaultImages = [
//   "/images/services/revetements-exterieurs/realisation-1.jpg",
//   "/images/services/revetements-exterieurs/realisation-2.jpg",
//   "/images/services/revetements-exterieurs/realisation-3.jpg"
// ];
// <ProjectGallery images={someImages || defaultImages} />

