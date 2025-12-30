"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    title1: "2025 -",
    title2: "Cosmetóloga",
    description: "Cosmetóloga Profesional Academia Expertas",
    image: "/academia-expertas-logo.jpg",
    direction: "up" as const,
  },
  {
    title1: "2024 -",
    title2: "Skin Care",
    description: "Especialista en Cuidado de la Piel",
    image: "/skincare-facial-treatment-spa.jpg",
    direction: "left" as const,
  },
  {
    title1: "2024 - Armonización",
    title2: "Orofacial",
    description: "Instituto de Estética Avanzada",
    image: "/images/logo-inro.png",
    direction: "up" as const,
  },
  {
    title1: "2022 -",
    title2: "Endodoncia",
    description: "Especialista en Endodoncia Universidad los Andes",
    image: "/images/logo-andes.png",
    direction: "right" as const,
  },
  {
    title1: "2018 - Cirujano",
    title2: "Dentista",
    description: "Cirujano Dentista  Universidad de los Andes",
    image: "/images/logo-andes.png",
    direction: "left" as const,
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-32 px-6 bg-[#f5f5f0]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <p className="mb-4 text-sm font-normal uppercase tracking-widest text-gray-500">FORMACIÓN</p>
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <LineReveal key={index}>
              <ScrollReveal direction={exp.direction} distance={100}>
                <ExperienceItem experience={exp} />
              </ScrollReveal>
            </LineReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ experience }: { experience: (typeof experiences)[0] }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="cursor-pointer py-6 relative"
    >
      <div className="relative min-h-[60px] md:min-h-[70px] flex items-center">
        {/* Default titles (fade out on hover) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={isActive ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-start"
        >
          <p className="text-xl md:text-4xl lg:text-5xl font-bold uppercase m-0 mr-2 md:mr-3">{experience.title1}</p>
          <p className="text-xl md:text-4xl lg:text-5xl font-bold uppercase m-0 ml-2 md:ml-3">{experience.title2}</p>
        </motion.div>

        {/* Hover content (description + image) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-between gap-8"
        >
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 m-0 flex-1">{experience.description}</p>

          <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden flex-shrink-0">
            <Image
              src={experience.image || "/placeholder.svg"}
              alt={`${experience.title1} ${experience.title2}`}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 80px, 64px"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
