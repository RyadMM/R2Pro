"use client"

import { SectionContainer } from "@/components/SectionContainer"
import { TestimonialCard } from "@/components/TestimonialCard"
import { CustomButton } from "@/components/ui/custom-button"
import { getAverageRating, getTotalReviews, reviews } from "@/data/reviews"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Temoignages() {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalPages = Math.ceil(reviews.length / itemsPerPage)
  const averageRating = getAverageRating()
  const totalReviews = getTotalReviews()

  // Ajuster le nombre d'éléments par page en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize() // Exécuter immédiatement
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Recalculer le nombre total de pages lorsque itemsPerPage change
  useEffect(() => {
    if (currentPage >= Math.ceil(reviews.length / itemsPerPage)) {
      setCurrentPage(0)
    }
  }, [itemsPerPage, currentPage])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  // Obtenir les témoignages pour la page actuelle
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage
    return reviews.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <SectionContainer id="temoignages" className="py-16 md:py-24 relative overflow-hidden">
      {/* Motif d'arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/background-pattern.svg)",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-r2pro-100 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-r2pro-200 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-r2pro-800 mb-4 relative inline-block">
            Ce que disent nos clients
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-r2pro-500 rounded-full"></div>
          </h2>

          <div className="flex items-center justify-center mt-6">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm inline-flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-medium text-gray-900">{averageRating}/5</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-600">{totalReviews} avis Google</span>
            </div>
          </div>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-4 z-10 pointer-events-none">
            <button
              onClick={prevPage}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-r2pro-500 pointer-events-auto"
              aria-label="Témoignages précédents"
            >
              <ChevronLeft className="w-5 h-5 text-r2pro-600" />
            </button>
            <button
              onClick={nextPage}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-r2pro-500 pointer-events-auto"
              aria-label="Témoignages suivants"
            >
              <ChevronRight className="w-5 h-5 text-r2pro-600" />
            </button>
          </div>

          {/* Testimonials grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {getCurrentPageItems().map((review) => (
                  <TestimonialCard key={review.id} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === index ? "bg-r2pro-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Page ${index + 1}`}
                aria-current={currentPage === index ? "page" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <CustomButton asChild className="bg-white border-r2pro text-r2pro hover:bg-r2pro-50 group px-8 w-96">
              <a
                href="https://g.page/r/CVKZr9vILHA4EAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Laisser un avis sur Google
              </a>
            </CustomButton>
            <CustomButton asChild className="bg-white border-r2pro text-r2pro hover:bg-r2pro-50 group px-8 w-96">
              <a
                href="/reviews"
                className="inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Voir tous les avis
              </a>
            </CustomButton>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
