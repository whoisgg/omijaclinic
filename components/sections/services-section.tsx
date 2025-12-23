"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const treatments = [
  {
    id: "odontologia",
    title: "Odontología",
    image: "/dental-clinic-interior.png",
    description:
      "Cuidado dental integral con enfoque preventivo y estético. Tratamientos personalizados que priorizan tu salud bucal y bienestar.",
    longDescription:
      "Nuestros servicios de odontología combinan técnicas avanzadas con un enfoque holístico del cuidado dental. Desde limpiezas preventivas hasta tratamientos estéticos, cada procedimiento se realiza con la máxima atención al detalle y respeto por tu bienestar. Trabajamos para mantener tu sonrisa saludable de forma natural y sostenible en el tiempo.",
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    image: "/modern-endodontic-treatment-room.jpg",
    description:
      "Tratamientos especializados de conducto con tecnología avanzada y mínima molestia para preservar tu dentadura natural.",
    longDescription:
      "La endodoncia es fundamental para salvar dientes que de otra manera se perderían. Utilizamos tecnología de última generación y técnicas mínimamente invasivas para tratar infecciones del nervio dental con máxima eficiencia y comodidad. Nuestro objetivo es preservar tu dentadura natural el mayor tiempo posible.",
  },
  {
    id: "estetica",
    title: "Estética",
    image: "/aesthetic-dental-treatment.jpg",
    description:
      "Diseño de sonrisa personalizado que realza tu belleza natural mediante procedimientos estéticos armoniosos.",
    longDescription:
      "La estética dental va más allá de tener dientes blancos. Se trata de crear una sonrisa que refleje tu personalidad y armonía facial. Ofrecemos blanqueamientos, carillas, y diseños de sonrisa personalizados que respetan la estructura natural de tus dientes mientras realzan tu belleza de manera equilibrada y natural.",
  },
]

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (expandedCard) {
      const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)

        // Close expanded card if scrolled down significantly
        if (position > 100) {
          setExpandedCard(null)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [expandedCard])

  useEffect(() => {
    if (expandedCard) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [expandedCard])

  return (
    <section className="relative bg-neutral-100 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              NUESTROS
              <br />
              TRATAMIENTOS
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-800">
              Ofrecemos tratamientos especializados que combinan salud y bienestar. Cada procedimiento es personalizado
              y realizado con dedicación, respeto y un profundo compromiso con tu cuidado integral.
            </p>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-8 md:-mx-4">
              {treatments.map((treatment, index) => {
                const positionClasses =
                  index === 0
                    ? "md:-translate-y-8 md:z-10"
                    : index === 1
                      ? "md:translate-y-16 md:z-20"
                      : "md:-translate-y-12 md:z-10"

                return (
                  <div
                    key={treatment.id}
                    onClick={() => setExpandedCard(treatment.id)}
                    className={`relative cursor-pointer overflow-hidden w-full md:w-[280px] transition-opacity hover:opacity-90 ${positionClasses}`}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={treatment.image || "/placeholder.svg"}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                          {treatment.title.toUpperCase()}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 flex justify-end">
          <div className="max-w-md text-right">
            <p className="text-sm md:text-base leading-relaxed text-gray-800 mb-6">
              En Omiya Clinic, cada tratamiento se realiza con paciencia, precisión y un enfoque personalizado que
              respeta tu bienestar y armonía natural.
            </p>
            <button className="text-xs md:text-sm font-medium underline underline-offset-4 hover:no-underline transition-all uppercase tracking-wide">
              Explora Nuestros Tratamientos
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {expandedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={() => setExpandedCard(null)}
          >
            {treatments
              .filter((t) => t.id === expandedCard)
              .map((treatment) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
                    <div className="max-w-2xl text-white">
                      <h3 className="text-5xl md:text-7xl font-light mb-8">{treatment.title.toUpperCase()}</h3>
                      <p className="text-lg md:text-2xl leading-relaxed mb-6">{treatment.description}</p>
                      <p className="text-base md:text-lg leading-relaxed mb-10 opacity-90">
                        {treatment.longDescription}
                      </p>
                      <button className="px-8 py-4 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors uppercase tracking-wide">
                        Agenda Tu Consulta
                      </button>

                      <div className="mt-12 pt-8 border-t border-white/30">
                        <p className="text-xs opacity-70">Desplázate hacia abajo para volver a los tratamientos</p>
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-50"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
