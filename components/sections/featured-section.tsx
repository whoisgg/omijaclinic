"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const quoteRef = useRef<HTMLParagraphElement>(null)
  const paragraph1Ref = useRef<HTMLParagraphElement>(null)
  const paragraph2Ref = useRef<HTMLParagraphElement>(null)
  const signatureRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(paragraph1Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: paragraph1Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(paragraph2Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: paragraph2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(signatureRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: signatureRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(imageRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="featured"
      className="flex flex-col-reverse lg:flex-row lg:items-stretch bg-white"
    >
      {/* Left Column - Image */}
      <div ref={imageRef} className="h-[500px] w-full lg:w-1/2 lg:h-auto lg:min-h-[700px]">
        <Image
          src="/images/professional-portrait.jpg"
          alt="Dra. Antonieta Ortega"
          width={800}
          height={1000}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Right Column - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24">
        <div ref={subtitleRef} className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] font-sans" style={{ color: "#C5A059" }}>
            Visión Clínica
          </p>
        </div>

        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-thin mb-6 leading-tight text-balance uppercase"
        >
          El verdadero cuidado comienza comprendiendo la historia de cada paciente
        </h2>

        <p ref={quoteRef} className="text-lg md:text-xl font-sans italic mb-8 leading-relaxed text-gray-700 font-thin">
          En OMIYA, entendemos como wellaging a la forma consciente de acompañar a cada persona en su proceso de
          bienestar, con criterio clínico, respeto y sensibilidad.
        </p>

        <div className="space-y-6 mb-10">
          <p ref={paragraph1Ref} className="text-base leading-relaxed text-gray-700 font-sans font-thin">
            Cada decisión clínica se basa en la armonía entre salud, calma y precisión, priorizando siempre lo natural
            por sobre la corrección.
          </p>

          <p ref={paragraph2Ref} className="text-base leading-relaxed text-gray-700 font-sans font-thin">
            Nuestro enfoque busca crear un espacio donde el bienestar se construye de manera consciente, personalizada y
            sostenible en cada etapa de la vida.
          </p>
        </div>

        <div ref={signatureRef} className="flex items-start gap-3">
          <div className="flex flex-col">
            <p className="text-xl font-sans font-thin text-gray-900">Dra. Antonieta Ortega</p>
            <p className="text-sm tracking-wider uppercase font-sans text-gray-500 mt-1 font-thin">
              Directora Médica · Fundadora
            </p>
          </div>
          <Link
            href="/acerca-de"
            className="inline-flex items-center transition-opacity hover:opacity-70 mt-1"
            style={{ color: "#C5A059" }}
            aria-label="Ver perfil de Dra. Antonieta Ortega"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
