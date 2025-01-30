import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "./servicesData"
import { motion } from "framer-motion"
import { AnimatedSection } from "./AnimatedSection"

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100" aria-labelledby="services-title">
      <div className="container">
        <AnimatedSection>
          <h2 id="services-title" className="text-4xl font-bold text-center mb-16 text-r2pro-800">
            Nos Services de Revêtement Extérieur
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg bg-white">
                  <CardHeader>
                    {service.icon && (
                      <div className="mb-4 text-r2pro">
                        <service.icon size={48} />
                      </div>
                    )}
                    <CardTitle className="text-xl font-bold text-r2pro-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

