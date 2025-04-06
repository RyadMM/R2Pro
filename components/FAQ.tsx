"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "./AnimatedSection"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "Quels types de revêtements proposez-vous ?",
    answer:
      "Nous proposons une large gamme de revêtements extérieurs, notamment en vinyle, en aluminium et en bois. Chaque type de revêtement a ses propres avantages en termes de durabilité, d'esthétique et de coût.",
  },
  {
    question: "Combien de temps dure généralement l'installation d'un revêtement ?",
    answer:
      "La durée d'installation varie en fonction de la taille de votre maison et du type de revêtement choisi. En général, l'installation peut prendre de 1 à 2 semaines pour une maison de taille moyenne.",
  },
  {
    question: "Offrez-vous une garantie sur vos travaux ?",
    answer:
      "Oui, nous offrons une garantie sur tous nos travaux d'installation. La durée de la garantie peut varier selon le type de revêtement, mais nous garantissons généralement notre travail pour au moins 10 ans.",
  },
  {
    question: "Pouvez-vous travailler pendant l'hiver ?",
    answer:
      "Oui, nous pouvons travailler pendant l'hiver, mais certaines conditions météorologiques extrêmes peuvent affecter notre calendrier. Nous évaluons chaque situation au cas par cas pour assurer la sécurité de notre équipe et la qualité du travail.",
  },
  {
    question: "Comment puis-je obtenir un devis pour mon projet ?",
    answer:
      "Vous pouvez obtenir un devis gratuit en nous contactant via notre formulaire en ligne, par téléphone, ou en prenant rendez-vous pour une visite à domicile. Nous évaluerons vos besoins et vous fournirons un devis détaillé.",
  },
]

// Ajouter un ID à la section FAQ pour permettre la navigation par ancre
export function FAQ() {
  return (
    <section id="faq" className="py-16 relative overflow-hidden">
      {/* Arrière-plan avec motif et dégradé */}
      <div className="absolute inset-0 z-0">{/* Le fond est maintenant géré globalement */}</div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-r2pro-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-r2pro-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="scaleIn">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-r2pro-800 relative mx-auto"
          >
            Foire Aux Questions
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-r2pro-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
        </AnimatedSection>
        <AnimatedSection animation="slideIn">
          <div className="relative">
            {/* Élément décoratif */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-r2pro-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border-4 border-r2pro-200 rounded-full opacity-20 z-0"></div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative z-10">
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {faqData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-r2pro-100/30">
                      <AccordionTrigger className="text-left font-heading text-r2pro-800 hover:text-r2pro-600">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 font-sans">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

