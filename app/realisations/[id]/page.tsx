import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProjectGallery } from "@/components/ProjectGallery";
import { RelatedProjects } from "@/components/RelatedProjects";
import { SectionDivider } from "@/components/SectionDivider";
import { SoumissionCTA } from "@/components/SoumissionCTA";
import { CustomButton } from "@/components/ui/custom-button";
import { projects } from "@/lib/projectData";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id.toString())

  if (!project) {
    notFound()
  }

  // Trouver les projets liés
  const relatedProjects = project.relatedProjects
    ? projects.filter((p) => project.relatedProjects?.includes(p.id))
    : projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20">
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-4xl">
              <Link
                href="/realisations"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux réalisations
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{project.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-white/90 text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  {project.date}
                </div>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {project.location}
                </div>
                {project.clientRating && (
                  <div className="flex items-center text-white/90 text-sm">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < project.clientRating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    Satisfaction client
                  </div>
                )}
              </div>
              <p className="text-lg text-white/90 max-w-3xl">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width on desktop */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">À propos de ce projet</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.fullDescription}</p>

                {/* Features */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Caractéristiques du projet</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-r2pro/10 flex items-center justify-center mt-0.5">
                        <CheckCircle size={12} className="text-r2pro" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Before/After if available */}
                {project.beforeAfter && project.beforeAfter.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Avant / Après</h3>
                    <div className="space-y-6 mb-6">
                      {project.beforeAfter.map((item, index) => (
                        <div key={index}>
                          <p className="text-gray-700 mb-2">{item.description}</p>
                          <BeforeAfterSlider
                            beforeImage={item.before}
                            afterImage={item.after}
                            beforeLabel="Avant"
                            afterLabel="Après"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Call to Action */}
                <div className="mt-8">
                  <Link href="/contact">
                    <CustomButton className="w-full bg-r2pro hover:bg-r2pro-600 text-white group">
                      <span className="flex items-center justify-center">
                        Demander un devis pour un projet similaire
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </CustomButton>
                  </Link>
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Galerie du projet</h2>
                <ProjectGallery images={project.images} />
              </div>
            </div>

            {/* Sidebar - 1/3 width on desktop */}
            <div className="space-y-8">
              {/* Client Testimonial if available */}
              {project.clientTestimonial && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Témoignage client</h3>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    {project.clientRating && (
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < project.clientRating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-gray-700 italic mb-4">"{project.clientTestimonial}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 font-medium">
                          {project.clientName ? project.clientName.charAt(0) : "C"}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{project.clientName || "Client satisfait"}</p>
                        <p className="text-sm text-gray-500">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Vous avez un projet similaire?</h3>
                <p className="text-gray-700 mb-4">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit et sans
                  engagement.
                </p>
                <div className="space-y-4">
                  <Link href="/contact">
                    <CustomButton className="w-full bg-r2pro hover:bg-r2pro-600 text-white">
                      Nous contacter
                    </CustomButton>
                  </Link>
                  <Link href="/#services">
                    <CustomButton variant="outline" className="w-full border-r2pro text-r2pro hover:bg-r2pro/10">
                      Voir nos services
                    </CustomButton>
                  </Link>
                </div>
              </div>

              {/* Category Info */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Informations</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Catégorie:</span>
                    <span className="font-medium">
                      {project.category === "revetement"
                        ? "Revêtement extérieur"
                        : project.category === "peinture"
                          ? "Peinture au spray"
                          : project.category === "portes-fenetres"
                            ? "Portes et fenêtres"
                            : project.category === "gouttieres"
                              ? "Gouttières"
                              : project.category === "isolation"
                                ? "Isolation extérieure"
                                : project.category === "calfeutrage"
                                  ? "Calfeutrage"
                                  : project.category === "soffites-fascias"
                                    ? "Soffites et fascias"
                                    : project.category}
                    </span>
                  </li>
                  {project.subcategory && (
                    <li className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">
                        {project.subcategory.charAt(0).toUpperCase() + project.subcategory.slice(1)}
                      </span>
                    </li>
                  )}
                  <li className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-medium">{project.date}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Lieu:</span>
                    <span className="font-medium">{project.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <>
          <SectionDivider />
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Projets similaires</h2>
              <RelatedProjects projects={relatedProjects} />
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <SectionDivider />
      <SoumissionCTA
        title="Vous aimez ce projet ?"
        description="Contactez-nous pour discuter de votre projet et obtenir un devis gratuit."
        buttonText="Demander un devis similaire"
      />
    </div>
  )
}
