import { motion } from 'framer-motion';
import Link from 'next/link'; // Ensure Link is imported for the CTA
import React from 'react';

const timelineSteps = [
  {
    title: 'Écoute et Compréhension',
    description: 'Nous commençons par discuter de vos idées et de vos besoins. C\'est l\'occasion de partager votre vision, et nous vous offrons des conseils personnalisés pour bien démarrer.',
  },
  {
    title: 'Planification Détaillée',
    description: 'Notre équipe crée un plan précis et adapté à votre projet. Nous vous présentons les différentes options pour que vous puissiez choisir en toute confiance.',
  },
  {
    title: 'Préparation du Chantier',
    description: 'Avant les travaux, nous préparons soigneusement votre espace. Votre propriété est protégée, et les surfaces sont prêtes pour une installation de qualité.',
  },
  {
    title: 'Installation Professionnelle',
    description: 'Nos experts installent votre revêtement avec rigueur et souci du détail. Nous nous assurons que le travail est fait avec la plus grande qualité et durabilité.',
  },
  {
    title: 'Finitions et Nettoyage',
    description: 'Une fois l\'installation terminée, nous nous occupons des finitions pour un résultat impeccable. Nous laissons votre espace propre et rangé, comme si nous n\'étions jamais venus.',
  },
  {
    title: 'Votre Satisfaction Garantie',
    description: 'La dernière étape est de s\'assurer que vous êtes entièrement satisfait. Nous faisons une vérification finale ensemble pour que vous puissiez profiter pleinement de votre nouveau revêtement extérieur.',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-gray-800 relative"
      >
        Processus de Revêtement Extérieur
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.h2>
      <div className="relative wrap overflow-hidden py-10"> {/* Removed p-10, will add padding to steps */}
        {/* Vertical Line - now on the left for mobile-first */}
        <div className="absolute left-5 w-0.5 bg-gray-700 h-full opacity-20 md:left-1/2"></div> {/* Adjusted left for mobile */}

        {timelineSteps.map((step, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`} // Alternating on desktop
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Text block with card styling */}
            {/* Card with integrated number */}
            <div className={`timeline-card relative w-11/12 md:w-5/12 px-6 py-4 rounded-lg shadow-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center md:text-left
              ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}> {/* Added margin to push away from center line */}
              <h3 className="mb-3 font-bold text-gray-800 text-xl flex items-center">
                <span className="timeline-number flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 text-sm font-semibold mr-2">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* New Integrated CTA */}
      <motion.div
        className="mt-16 group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col mx-auto w-full max-w-3xl will-change-transform p-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: timelineSteps.length * 0.2 + 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        style={{ transform: "translateZ(0)" }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4 text-gray-800 relative inline-block"
        >
          Prêt à transformer votre extérieur ?
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.h3>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons concrétiser votre projet.
        </p>
        <Link href="/contact#contact-form">
          <motion.button
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-medium text-lg transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Parlez à un expert dès aujourd'hui
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Timeline;
