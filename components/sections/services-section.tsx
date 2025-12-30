"use client"

import { useState, useEffect, useRef } from "react"
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
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const lastScrollY = useRef(0)
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!expandedCard) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current)
      }

      wheelTimeout.current = setTimeout(() => {
        if (e.deltaY < 0) {
          setCurrentIndex((prev) => {
            const next = (prev + 1) % treatments.length
            setExpandedCard(treatments[next].id)
            return next
          })
        } else if (e.deltaY > 0) {
          setExpandedCard(null)
        }
      }, 50)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleWheel)
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current)
      }
    }
  }, [expandedCard])

  useEffect(() => {
    if (expandedCard) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [expandedCard])

  useEffect(() => {
    if (expandedCard) {
      document.body.setAttribute("data-treatment-expanded", "true")
    } else {
      document.body.removeAttribute("data-treatment-expanded")
    }
  }, [expandedCard])

  const handleCardClick = (treatmentId: string) => {
    const index = treatments.findIndex((t) => t.id === treatmentId)
    setCurrentIndex(index)
    setExpandedCard(treatmentId)
  }

  return (
    <section data-section="services" className="relative bg-neutral-100 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight uppercase tracking-tight mb-6">
              NUESTROS
              <br />
              TRATAMIENTOS
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-800 font-normal">
              Ofrecemos tratamientos especializados que combinan salud y bienestar. Cada procedimiento es personalizado
              y realizado con dedicación, respeto y un profundo compromiso con tu cuidado integral.
            </p>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 md:gap-8 md:-mx-4">
              {treatments.map((treatment, index) => {
                const positionClasses =
                  index === 0
                    ? "sm:-translate-y-8 sm:z-10"
                    : index === 1
                      ? "sm:translate-y-16 sm:z-20"
                      : "sm:-translate-y-12 sm:z-10"

                return (
                  <div
                    key={treatment.id}
                    onClick={() => handleCardClick(treatment.id)}
                    className={`relative cursor-pointer overflow-hidden w-full sm:w-[280px] transition-opacity hover:opacity-90 ${positionClasses}`}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={treatment.image || "/placeholder.svg"}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-widest">
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
            <p className="text-base md:text-lg leading-relaxed text-gray-800 font-normal mb-6">
              En Omiya Clinic, cada tratamiento se realiza con paciencia, precisión y un enfoque personalizado que
              respeta tu bienestar y armonía natural.
            </p>
            <button className="text-sm md:text-base font-semibold tracking-wide underline underline-offset-4 hover:no-underline transition-all">
              Explora Nuestros Tratamientos
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Card Overlay - Gallery Mode */}
      <AnimatePresence mode="wait">
        {expandedCard && (
          <motion.div
            key="gallery-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
          >
            <AnimatePresence mode="wait">
              {treatments
                .filter((t) => t.id === expandedCard)
                .map((treatment) => (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
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
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
                          {treatment.title.toUpperCase()}
                        </h3>
                        <p className="text-xl md:text-2xl leading-relaxed mb-6 font-medium">{treatment.description}</p>
                        <p className="text-base md:text-lg leading-relaxed opacity-90 mb-10 font-normal">
                          {treatment.longDescription}
                        </p>
                        <button className="px-8 py-4 bg-white text-black text-sm md:text-base font-semibold tracking-wide hover:bg-gray-100 transition-colors">
                          Agenda Tu Consulta
                        </button>

                        <div className="mt-12 pt-8 border-t border-white/30">
                          <p className="text-xs opacity-70 font-light">
                            Desplázate hacia arriba para ver más tratamientos • Desplázate hacia abajo para cerrar
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="absolute top-20 md:top-24 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-50"
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

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                      {treatments.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentIndex === idx ? "bg-white w-8" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
