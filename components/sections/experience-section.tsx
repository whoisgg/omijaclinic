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
    description: "Especialista en Armonización Orofacial Instituto de Estética Avanzada",
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
    <section className="py-20 px-6 md:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-black">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <p className="mb-4 text-sm font-normal uppercase tracking-widest text-gray-400">FORMACIÓN</p>
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
      <div className="relative min-h-[60px] md:min-h-[70px] lg:min-h-[80px] xl:min-h-[80px] flex items-center">
        <motion.div
          initial={{ opacity: 1 }}
          animate={isActive ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-start"
        >
          <p className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold uppercase m-0 mr-2 md:mr-3 text-white">
            {experience.title1}
          </p>
          <p className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold uppercase m-0 ml-2 md:ml-3 text-white">
            {experience.title2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-between gap-8"
        >
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-3xl text-gray-300 m-0 flex-1">
            {experience.description}
          </p>

          <div className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-24 xl:w-24 overflow-hidden flex-shrink-0">
            <Image
              src={experience.image || "/placeholder.svg"}
              alt={`${experience.title1} ${experience.title2}`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 96px, (min-width: 768px) 80px, 64px"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
