import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { GenericHero } from "@/components/GenericHero"; // Import GenericHero
import { ProjectGallery } from "@/components/ProjectGallery";
import { RelatedProjects } from "@/components/RelatedProjects";
import { SectionDivider } from "@/components/SectionDivider";
import { SoumissionCTA } from "@/components/SoumissionCTA";
import { CustomButton } from "@/components/ui/custom-button";
import { projects } from "@/lib/projectData";
import { getReviewsFromJson } from "@/lib/server/reviews";
import { ArrowRight, CalendarDays, CheckCircle, MapPin, Star } from "lucide-react"; // Added CalendarDays, MapPin
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react"; // Import ReactNode

// Removed duplicate imports below
// import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
// import { ProjectGallery } from "@/components/ProjectGallery";
// import { RelatedProjects } from "@/components/RelatedProjects";
// import { SectionDivider } from "@/components/SectionDivider";


export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  const project = projects.find((p) => p.id === awaitedParams.id.toString())

  if (!project) {
    return notFound()
  }

  const reviews = await getReviewsFromJson();
  // Find the review based on the reviewerName in projectData
  const projectReview = project.reviewerName
    ? reviews.find(review => review.name === project.reviewerName)
    : undefined;

  // Trouver les projets liés
  const relatedProjects = project.relatedProjects
    ? projects.filter((p) => project.relatedProjects?.includes(p.id))
    : projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  // Define content for GenericHero
  const heroTitle: ReactNode = (
    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
      {project.title}
    </h1>
  );

  // Combine description and meta info into subtitle node
  const heroSubtitle: ReactNode = (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <div className="flex items-center text-white/90 text-sm">
          <CalendarDays className="mr-2 h-4 w-4" /> {/* Use Lucide icon */}
          {project.date}
        </div>
        <div className="flex items-center text-white/90 text-sm">
          <MapPin className="mr-2 h-4 w-4" /> {/* Use Lucide icon */}
          {project.location}
        </div>
        {project.clientRating && (
          <div className="flex items-center text-white/90 text-sm">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < (project.clientRating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  strokeWidth={i < (project.clientRating || 0) ? 0 : 1} // Adjust stroke for unfilled stars
                />
              ))}
            </div>
            Satisfaction client
          </div>
        )}
      </div>
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        {project.description}
      </p>
    </>
  );

  const heightClass = "h-[85vh] md:h-[75vh]"; // Original height
  const overlayClass = "bg-opacity-40"; // Original overlay

  return (
    <div className="min-h-screen bg-[url('/images/background-pattern.svg')] overflow-x-hidden w-full">
      <GenericHero
        backgroundImageSrc={project.images[0] || "/placeholder.svg"}
        backgroundImageAlt={project.title}
        title={heroTitle}
        subtitle={heroSubtitle}
        // No button in this hero
        heightClass={heightClass}
        overlayOpacityClass={overlayClass}
        contentAlignment="center"
        imagePriority={true} // Assume first image is priority
        imageClassName="object-cover w-full h-full" // Ensure image covers, replicating img tag behavior
        // Using default scroll indicator from GenericHero for consistency
      />
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
                        Demander un devis
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
              {projectReview && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Témoignage client</h3>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    {projectReview.rating && (
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < (projectReview.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                  </div>
                )}
                {/* Display review text if available, otherwise display a placeholder or nothing */}
                {projectReview.text && (
                  <p className="text-gray-700 italic mb-4">"{projectReview.text}"</p>
                )}
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      {projectReview.name ? projectReview.name.charAt(0) : ""}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{projectReview.name || "Client"}</p>
                    {projectReview.location && <p className="text-sm text-gray-500">{projectReview.location}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Card */}
              {/*
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Vous avez un projet similaire?</h3>
                <p className="text-gray-700 mb-4">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit et sans
                  engagement.
                </p>
                <div className="space-y-4">
                  <Link href="/contact">
                    <CustomButton className="w-full bg-r2pro hover:bg-r2pro-600 text-white flex items-center justify-center">
                      Nous contacter
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </CustomButton>
                  </Link>

                  <Link href="/#services">
                    <CustomButton variant="outline" className="w-full border-r2pro text-r2pro hover:bg-r2pro/10 mt-4">
                      Voir nos services
                    </CustomButton>
                  </Link>
                </div>
              </div>
              */}

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
                    <CustomButton variant="outline" className="w-full border-r2pro text-r2pro hover:bg-r2pro/10 mt-4">
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
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Projets similaires</h2>
              <RelatedProjects projects={relatedProjects} />
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <SectionDivider />
      <SoumissionCTA />
    </div>
  )
}
