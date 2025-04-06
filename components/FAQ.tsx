"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { AnimatedSection } from "./AnimatedSection"

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

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="scaleIn">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Foire Aux Questions</h2>
        </AnimatedSection>
        <AnimatedSection animation="slideIn">
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}

