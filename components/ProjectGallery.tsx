"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ProjectGalleryProps {
  images?: string[]
}

export function ProjectGallery({ images = [] }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Ensure images is always an array
  const safeImages = Array.isArray(images) ? images : []

  // If no images are available, show a message
  if (safeImages.length === 0) {
    return <div className="text-center py-8 text-gray-500">Aucune image disponible</div>
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {safeImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => {
              setCurrentImageIndex(index)
              setOpen(true)
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Image du projet ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-8">
              <Image
                src={safeImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Image du projet ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentImageIndex + 1} / {safeImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

