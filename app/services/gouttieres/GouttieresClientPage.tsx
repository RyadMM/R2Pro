"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ServiceHero } from "@/components/ServiceHero"
import { CheckCircle2, ArrowRight, CheckSquare } from "lucide-react"
import Link from "next/link"
import { SectionContainer } from "@/components/SectionContainer"

export default function GouttieresClientPage() {
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
        title="Gouttières de Qualité Supérieure"
        description="Protégez votre maison contre les dommages causés par l'eau avec nos solutions de gouttières durables et efficaces."
        ctaText="Demander un devis gratuit"
        ctaLink="/contact#contact-form"
        backgroundImage="/images/services/gouttieres/hero-gouttieres.jpg"
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
                L'importance des gouttières
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <p className="text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                Les gouttières jouent un rôle crucial dans la protection de votre maison contre les dommages causés par
                l'eau. Elles recueillent l'eau de pluie qui s'écoule de votre toit et la dirigent loin des fondations de
                votre maison.
              </p>
              <p className="text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                Sans gouttières efficaces, l'eau peut s'accumuler autour des fondations, entraînant des problèmes
                d'humidité, des dommages structurels et même des inondations dans votre sous-sol.
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-r2pro-700">
                  Pourquoi choisir R2Pro pour vos gouttières?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Installation professionnelle par des experts certifiés",
                    "Matériaux de haute qualité pour une durabilité maximale",
                    "Solutions personnalisées adaptées à votre maison",
                    "Garantie sur tous nos travaux d'installation",
                    "Service d'entretien et de nettoyage disponible",
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
                  src="/images/services/gouttieres/service-installation.jpg"
                  alt="Installation professionnelle de gouttières"
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

      {/* Services Section - Version sans photos */}
      <SectionContainer className="py-12 md:py-16 section-alt">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-r2pro-800 relative mx-auto"
        >
          Nos services de gouttières
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
              icon: "droplet",
              title: "Installation de gouttières",
              description:
                "Installation professionnelle de gouttières sur mesure pour votre propriété, avec un système complet incluant descentes pluviales et accessoires.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: "tool",
              title: "Réparation de gouttières",
              description:
                "Réparation de gouttières endommagées, remplacement de sections défectueuses et correction des problèmes d'écoulement pour restaurer la fonctionnalité.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: "trash",
              title: "Nettoyage de gouttières",
              description:
                "Nettoyage complet des gouttières et des descentes pluviales pour éliminer les débris, les feuilles et les obstructions qui empêchent l'écoulement de l'eau.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
            {
              icon: "shield",
              title: "Protection contre les feuilles",
              description:
                "Installation de protège-gouttières pour empêcher l'accumulation de feuilles et de débris tout en permettant à l'eau de s'écouler librement.",
              gradient: "from-r2pro-400 to-r2pro-500",
            },
            {
              icon: "link",
              title: "Gouttières sans joints",
              description:
                "Installation de gouttières sans joints fabriquées sur place pour s'adapter parfaitement à votre maison, éliminant les risques de fuites aux jonctions.",
              gradient: "from-r2pro-500 to-r2pro-600",
            },
            {
              icon: "droplets",
              title: "Récupération d'eau de pluie",
              description:
                "Installation de systèmes de récupération d'eau de pluie connectés à vos gouttières pour une utilisation écologique de l'eau dans votre jardin.",
              gradient: "from-r2pro-600 to-r2pro-700",
            },
          ].map((service, index) => (
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
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      {service.icon === "droplet" && (
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
                      {service.icon === "tool" && (
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
                      {service.icon === "trash" && (
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
                      {service.icon === "shield" && (
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
                      {service.icon === "link" && (
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
                      {service.icon === "droplets" && (
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
                    <h3 className="text-xl font-bold text-r2pro-800 mb-2">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>

                  {/* Élément décoratif au survol */}
                  <div className="mt-4 h-1 w-10 bg-r2pro-200 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section après Services - Version améliorée */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gouttieres/cta-mid-section.jpg"
            alt="Installation de gouttières professionnelles"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-r2pro/30 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 top-1/3 w-40 h-40 bg-r2pro/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-heading"
            >
              Améliorez l'efficacité de votre système d'évacuation d'eau
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-10 max-w-2xl mx-auto text-white/90"
            >
              Nos experts sont à votre disposition pour vous conseiller sur les meilleures solutions adaptées à votre
              propriété.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              {/* Effet de halo animé derrière le bouton */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
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
                  className="bg-white text-r2pro-600 hover:bg-r2pro hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center shadow-lg border-2 border-white/80 group relative z-10"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 114, 206, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="mr-2 text-xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    👋
                  </motion.span>
                  <span>Prendre contact</span>
                  <motion.div
                    className="ml-2"
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
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/20 blur-xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gouttieres/cta-background.jpg"
            alt="Gouttières de qualité"
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
                Protégez votre maison avec des gouttières de qualité
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">
                Contactez-nous dès aujourd'hui pour une évaluation gratuite et un devis personnalisé pour votre projet
                de gouttières.
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

