"use client"

import { MaterialTabs } from "@/components/MaterialTabs";
import { SectionContainer } from "@/components/SectionContainer";
import { ServiceHero } from "@/components/ServiceHero";
import { motion } from "framer-motion"; // Add motion
import { ArrowRight, CheckCircle2, CheckSquare, DollarSign, Droplets, Home, Shield, Thermometer, Zap } from "lucide-react"; // Add ArrowRight
import Image from "next/image";
import Link from "next/link"; // Add Link

// Matériaux d'isolation
const materiaux = ["polystyrene", "polyurethane", "laine", "fibre"]

// Informations sur les matériaux
const materialInfo = {
  polystyrene: {
    title: "Polystyrène expansé (EPS)",
    description:
      "Le polystyrène expansé est un matériau isolant léger, économique et facile à installer, offrant un bon rapport qualité-prix pour l'isolation thermique par l'extérieur.",
    advantages: [
      "Excellent rapport qualité-prix",
      "Léger et facile à manipuler",
      "Bonne résistance thermique",
      "Disponible en différentes épaisseurs et densités",
    ],
    applications: "Maisons résidentielles, projets avec budget limité, climats modérés.",
    imagePath: "/images/services/isolation-exterieure/materiau-polystyrene.jpg",
  },
  polyurethane: {
    title: "Polyuréthane (PUR/PIR)",
    description:
      "Le polyuréthane offre une performance thermique supérieure et une excellente résistance à l'humidité, idéal pour les climats rigoureux et les projets nécessitant une isolation maximale.",
    advantages: [
      "Performance thermique exceptionnelle",
      "Excellente résistance à l'humidité",
      "Bonne étanchéité à l'air",
      "Durabilité supérieure",
    ],
    applications: "Climats extrêmes, zones à forte humidité, projets nécessitant une performance maximale.",
    imagePath: "/images/services/isolation-exterieure/materiau-polyurethane.jpg",
  },
  laine: {
    title: "Laine minérale (roche/verre)",
    description:
      "La laine minérale (laine de roche ou de verre) offre d'excellentes propriétés acoustiques en plus de l'isolation thermique, et une bonne résistance au feu.",
    advantages: [
      "Excellente isolation acoustique",
      "Bonne résistance au feu",
      "Perméabilité à la vapeur d'eau",
      "Matériau écologique et recyclable",
    ],
    applications:
      "Projets exigeant une bonne isolation acoustique, zones urbaines bruyantes, bâtiments à haute performance énergétique.",
    imagePath: "/images/services/isolation-exterieure/materiau-laine.jpg",
  },
  fibre: {
    title: "Fibre de bois",
    description:
      "La fibre de bois est un matériau isolant naturel et écologique qui offre d'excellentes propriétés thermiques et acoustiques, ainsi qu'une bonne régulation de l'humidité.",
    advantages: [
      "Matériau 100% naturel et renouvelable",
      "Excellente inertie thermique",
      "Bonnes propriétés acoustiques",
      "Régulation naturelle de l'humidité",
    ],
    applications:
      "Maisons écologiques, construction durable, rénovation de bâtiments anciens, projets visant une faible empreinte carbone.",
    imagePath: "/images/services/isolation-exterieure/materiau-fibre.jpg",
  },
}

export default function IsolationExterieureClientPage() {

  return (
    <div className="flex-1 flex flex-col relative overflow-x-hidden overflow-y-auto">
      <ServiceHero
        title="Isolation Extérieure Professionnelle"
        description="Améliorez l'efficacité énergétique de votre maison et réduisez vos factures d'énergie avec nos solutions d'isolation extérieure de haute qualité."
        ctaText="Demander un devis gratuit"
        ctaLink="#contact-form"
        backgroundImage="/images/services/isolation-exterieure/hero-isolation.jpg"
        ctaIcon={<CheckSquare className="w-5 h-5 mr-2" />}
      />

      {/* Description Section - Sans animations complexes */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-r2pro-800 relative">
                Pourquoi isoler l'extérieur de votre maison?
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"></div>
              </h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                L'isolation extérieure est une solution efficace pour améliorer la performance énergétique de votre
                maison. Elle consiste à appliquer une couche isolante sur les murs extérieurs de votre bâtiment, créant
                une enveloppe thermique continue qui protège votre maison contre les variations de température.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Contrairement à l'isolation intérieure, l'isolation par l'extérieur permet d'éliminer les ponts
                thermiques, ces zones où la chaleur s'échappe facilement, tout en préservant votre espace habitable.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">
                  Pourquoi choisir R2Pro pour votre isolation extérieure?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Expertise technique et connaissance approfondie des matériaux isolants",
                    "Solutions personnalisées adaptées à votre maison et à vos besoins",
                    "Installation professionnelle garantissant une efficacité maximale",
                    "Matériaux de haute qualité pour une durabilité et performance optimales",
                    "Service complet incluant l'évaluation, l'installation et la finition",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-r2pro mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-r2pro/10 rounded-2xl transform rotate-3"></div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/images/services/isolation-exterieure/isolation-maison.jpg"
                  alt="Installation professionnelle d'isolation extérieure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg inline-block">
                    <p className="text-r2pro-800 font-semibold">Installation professionnelle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Avantages Section - Sans animations complexes */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto">
          Les avantages de l'isolation extérieure
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Thermometer,
              title: "Confort thermique optimal",
              description:
                "Maintient une température agréable dans votre maison toute l'année, en limitant les variations de température entre les saisons.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: Zap,
              title: "Économies d'énergie",
              description:
                "Réduit considérablement vos factures de chauffage et de climatisation en limitant les pertes de chaleur en hiver et les gains de chaleur en été.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: DollarSign,
              title: "Valorisation immobilière",
              description:
                "Augmente la valeur de votre propriété grâce à une meilleure performance énergétique et une apparence extérieure rénovée.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
            {
              icon: Droplets,
              title: "Protection contre l'humidité",
              description:
                "Prévient les problèmes de condensation et de moisissures en maintenant les murs à une température adéquate.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: Shield,
              title: "Durabilité accrue",
              description:
                "Protège vos murs extérieurs contre les intempéries et les variations de température, prolongeant ainsi la durée de vie de votre bâtiment.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: Home,
              title: "Rénovation esthétique",
              description:
                "Permet de moderniser l'apparence extérieure de votre maison tout en améliorant ses performances énergétiques.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
          ].map((advantage, index) => (
            <div key={index} className="h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-xl border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${advantage.gradient}`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-lg mb-4`}
                    >
                      <advantage.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-r2pro-800 mb-2">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>

                  {/* Élément décoratif simplifié */}
                  <div className="mt-4 h-1 w-10 bg-r2pro-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Matériaux Section avec le composant réutilisable */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto">
          Nos matériaux d'isolation
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"></div>
        </h2>

        <MaterialTabs
          materials={materiaux}
          materialInfo={materialInfo}
          basePath="/images/services/isolation-exterieure/materiau-"
        />
      </SectionContainer>

      {/* CTA Section - Transformez l'apparence de votre maison */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/revetements-exterieurs/IMG_7491.jpg"
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
                Améliorez le confort et l'efficacité de votre maison
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé pour votre projet
                d'isolation extérieure.
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
