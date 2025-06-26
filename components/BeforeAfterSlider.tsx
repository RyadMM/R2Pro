"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const mouseX = e.clientX - containerRect.left

      // Calculate position as percentage
      let newPosition = (mouseX / containerWidth) * 100

      // Clamp between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition))

      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const touchX = e.touches[0].clientX - containerRect.left

      // Calculate position as percentage
      let newPosition = (touchX / containerWidth) * 100

      // Clamp between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition))

      setSliderPosition(newPosition)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleMouseUp)
      document.body.classList.add("no-select")
    } else {
      document.body.classList.remove("no-select")
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
      document.body.classList.remove("no-select") // Clean up on unmount
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={afterImage || "/placeholder.svg"} alt="Après" fill className="object-cover" sizes="100vw" draggable="false" />
        <div className="absolute top-4 right-4 bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Partial width based on slider) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt="Avant" fill className="object-cover" sizes="100vw" draggable="false" />
        <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <path d="M21 12H3M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
