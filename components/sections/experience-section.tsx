"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import Image from "next/image"

const experiences = [
  {
    title: "Especialización en Armonización Orofacial",
    organization: "Instituto de Estética Avanzada - 2024",
    description: "Técnicas innovadoras en armonización facial y tratamientos estéticos mínimamente invasivos.",
    direction: "up" as const,
    image: "/images/logo-inro.png",
  },
  {
    title: "Especialista en Endodoncia",
    organization: "Universidad de los Andes - 2022",
    description:
      "Enfoque integral en tratamientos de conducto con tecnología de vanguardia y protocolos de excelencia.",
    direction: "left" as const,
    image: "/images/logo-andes.png",
  },
  {
    title: "Cirujano Dentista",
    organization: "Universidad de los Andes - 2018",
    description: "Formación integral en odontología general con énfasis en estética dental y atención personalizada.",
    direction: "right" as const,
    image: "/images/logo-andes.png",
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-32 px-6 bg-[#f5f5f0]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">FORMACIÓN</p>
        </ScrollReveal>


        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index}>
              <ScrollReveal direction={exp.direction} distance={100}>
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg md:text-xl text-gray-600">{exp.organization}</p>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-3xl">{exp.description}</p>
                  </div>
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0 bg-white p-4">
                    <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-contain" />
                  </div>
                </div>
              </ScrollReveal>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
