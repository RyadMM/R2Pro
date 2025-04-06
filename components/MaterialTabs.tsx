"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { CategoryTabs } from "@/components/CategoryTabs"

interface MaterialInfo {
  title: string
  description: string
  advantages: string[]
  applications: string
  imagePath: string
}

interface MaterialTabsProps {
  materials: string[]
  materialInfo: Record<string, MaterialInfo>
  basePath?: string
}

export function MaterialTabs({ materials, materialInfo, basePath = "" }: MaterialTabsProps) {
  const [activeTab, setActiveTab] = useState(materials[0])

  return (
    <div className="w-full">
      <div className="mb-8">
        <CategoryTabs categories={materials} activeCategory={activeTab} onChange={setActiveTab} />
      </div>

      <div className="max-w-4xl mx-auto relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {materials.map(
            (material) =>
              material === activeTab && (
                <motion.div
                  key={material}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    exit: { duration: 0.3 },
                  }}
                  className="absolute w-full"
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={materialInfo[material].imagePath || `${basePath}${material}.jpg`}
                              alt={materialInfo[material].title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3 p-4 md:p-6">
                          <h3 className="text-xl font-semibold mb-3 text-r2pro-700">{materialInfo[material].title}</h3>
                          <p className="text-sm md:text-base mb-4 leading-relaxed">
                            {materialInfo[material].description}
                          </p>
                          <h4 className="font-semibold mb-2 text-sm md:text-base">Avantages:</h4>
                          <ul className="space-y-1 mb-4">
                            {materialInfo[material].advantages.map((advantage, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-sm md:text-base">{advantage}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Applications idéales: {materialInfo[material].applications}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

