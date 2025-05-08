"use client"

import { SectionContainer } from "@/components/SectionContainer"
import { ServiceHero } from "@/components/ServiceHero"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

      {/* CTA Section après Avantages */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/portes-fenetres/cta-mid-section.jpg"
            alt="Portes et fenêtres de qualité"
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
                Transformez votre maison
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                avec style et efficacité
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
              Nos experts vous aideront à choisir les portes et fenêtres parfaites pour votre maison, en tenant compte
              de votre style, de votre budget et de vos besoins énergétiques.
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

      {/* Nos Produits Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos produits de qualité
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
              <TabsTrigger
                value="fenetres"
                className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
              >
                Fenêtres
              </TabsTrigger>
              <TabsTrigger
                value="portes"
                className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
              >
                Portes
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Contenu des onglets - Fenêtres */}
          <TabsContent value="fenetres" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Fenêtres à battant",
                  description:
                    "S'ouvrent vers l'extérieur comme une porte, offrant une ventilation maximale et une excellente étanchéité.",
                  image: "/images/services/portes-fenetres/fenetre-battant.jpg",
                  features: [
                    "Ventilation optimale",
                    "Excellente étanchéité à l'air",
                    "Facilité de nettoyage",
                    "Sécurité renforcée",
                  ],
                },
                {
                  title: "Fenêtres coulissantes",
                  description:
                    "Se déplacent horizontalement sur des rails, idéales pour les espaces restreints et les grandes ouvertures.",
                  image: "/images/services/portes-fenetres/fenetre-coulissante.jpg",
                  features: [
                    "Parfaites pour les espaces limités",
                    "Grande surface vitrée",
                    "Facilité d'utilisation",
                    "Design contemporain",
                  ],
                },
                {
                  title: "Fenêtres à guillotine",
                  description:
                    "Se déplacent verticalement, offrant un style classique et intemporel avec une bonne ventilation.",
                  image: "/images/services/portes-fenetres/fenetre-guillotine.jpg",
                  features: [
                    "Style traditionnel",
                    "Bonne ventilation",
                    "Idéales pour les maisons d'époque",
                    "Facilité d'entretien",
                  ],
                },
                {
                  title: "Fenêtres panoramiques",
                  description:
                    "Grandes surfaces vitrées fixes qui maximisent la lumière naturelle et offrent une vue imprenable.",
                  image: "/images/services/portes-fenetres/fenetre-panoramique.jpg",
                  features: ["Luminosité maximale", "Vue dégagée", "Excellente isolation", "Design moderne"],
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden h-full">
                  <CardContent className="p-0 h-full">
                    <div className="flex flex-col h-full">
                      <div className="relative h-48 rounded-t-xl overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-4 md:p-6 flex-grow">
                        <h3 className="text-xl font-semibold mb-3 text-r2pro-700">{item.title}</h3>
                        <p className="text-sm md:text-base mb-4 leading-relaxed">{item.description}</p>
                        <h4 className="font-semibold mb-2 text-sm md:text-base">Caractéristiques:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contenu des onglets - Portes */}
          <TabsContent value="portes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Portes d'entrée",
                  description:
                    "Portes robustes et élégantes qui offrent sécurité et isolation tout en créant une première impression remarquable.",
                  image: "/images/services/portes-fenetres/porte-entree.jpg",
                  features: [
                    "Sécurité renforcée",
                    "Isolation thermique supérieure",
                    "Multiples designs disponibles",
                    "Durabilité exceptionnelle",
                  ],
                },
                {
                  title: "Portes-patio",
                  description:
                    "Grandes portes coulissantes vitrées qui relient harmonieusement votre intérieur à votre espace extérieur.",
                  image: "/images/services/portes-fenetres/porte-patio.jpg",
                  features: [
                    "Luminosité maximale",
                    "Accès facile à l'extérieur",
                    "Excellente isolation",
                    "Design contemporain",
                  ],
                },
                {
                  title: "Portes françaises",
                  description:
                    "Portes élégantes à double battant qui ajoutent une touche de sophistication et de charme à votre maison.",
                  image: "/images/services/portes-fenetres/porte-francaise.jpg",
                  features: [
                    "Élégance intemporelle",
                    "Grande ouverture",
                    "Luminosité accrue",
                    "Parfaites pour les terrasses",
                  ],
                },
                {
                  title: "Portes de garage",
                  description:
                    "Portes fonctionnelles et esthétiques qui complètent le style de votre maison tout en offrant sécurité et isolation.",
                  image: "/images/services/portes-fenetres/porte-garage.jpg",
                  features: [
                    "Isolation thermique",
                    "Sécurité renforcée",
                    "Multiples styles disponibles",
                    "Fonctionnement silencieux",
                  ],
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden h-full">
                  <CardContent className="p-0 h-full">
                    <div className="flex flex-col h-full">
                      <div className="relative h-48 rounded-t-xl overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-4 md:p-6 flex-grow">
                        <h3 className="text-xl font-semibold mb-3 text-r2pro-700">{item.title}</h3>
                        <p className="text-sm md:text-base mb-4 leading-relaxed">{item.description}</p>
                        <h4 className="font-semibold mb-2 text-sm md:text-base">Caractéristiques:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm md:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>

      {/* Matériaux Section */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos matériaux de qualité
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h2>
      </SectionContainer>

        <Tabs defaultValue="pvc" className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <TabsList className="inline-flex p-1 rounded-full bg-white shadow-md">
              {["pvc", "aluminium", "hybride", "bois"].map((material) => (
                <TabsTrigger
                  key={material}
                  value={material}
                  className="px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 data-[state=active]:bg-r2pro data-[state=active]:text-white hover:bg-r2pro-100"
                >
                  {material === "pvc"
                    ? "PVC"
                    : material === "aluminium"
                      ? "Aluminium"
                      : material === "hybride"
                        ? "Hybride"
                        : "Bois"}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Contenu des onglets */}
          <TabsContent value="pvc" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/portes-fenetres/materiau-pvc.jpg"
                        alt="Portes et fenêtres en PVC"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">PVC (Polychlorure de vinyle)</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le PVC est l'un des matériaux les plus populaires pour les portes et fenêtres en raison de son
                      excellent rapport qualité-prix et de ses propriétés isolantes.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Excellente isolation thermique et acoustique</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Résistant aux intempéries et à la corrosion</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Entretien minimal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Excellent rapport qualité-prix</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Résidences familiales, projets avec budget limité, zones à forte exposition
                      aux intempéries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aluminium" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/portes-fenetres/materiau-aluminium.jpg"
                        alt="Portes et fenêtres en aluminium"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Aluminium</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      L'aluminium offre une résistance et une durabilité exceptionnelles, idéal pour les grandes
                      ouvertures et les designs contemporains.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Extrêmement durable et résistant</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          Profilés minces permettant de maximiser la surface vitrée
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Large gamme de couleurs et de finitions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Idéal pour les grandes ouvertures</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Designs contemporains, bâtiments commerciaux, grandes baies vitrées,
                      portes-patio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hybride" className="mt-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/images/services/portes-fenetres/materiau-hybride.jpg"
                        alt="Portes et fenêtres hybrides"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Hybride (Aluminium-PVC)</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Les fenêtres hybrides combinent un extérieur en aluminium avec un intérieur en PVC, offrant le
                      meilleur des deux matériaux.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Durabilité de l'aluminium à l'extérieur</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Isolation thermique du PVC à l'intérieur</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Performance énergétique supérieure</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Multiples options de couleurs et de finitions</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Maisons haut de gamme, climats extrêmes, propriétaires recherchant le
                      meilleur compromis entre esthétique et performance.
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
                        src="/images/services/portes-fenetres/materiau-bois.jpg"
                        alt="Portes et fenêtres en bois"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-3 text-r2pro-700">Bois</h3>
                    <p className="text-sm md:text-base mb-4 leading-relaxed">
                      Le bois offre une beauté naturelle et une chaleur incomparables, parfait pour les maisons
                      traditionnelles ou les propriétés historiques.
                    </p>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Esthétique naturelle et chaleureuse</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Excellente isolation thermique naturelle</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Matériau écologique et renouvelable</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">Idéal pour les propriétés historiques</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Applications idéales: Maisons traditionnelles, propriétés historiques, chalets, projets de
                      restauration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
