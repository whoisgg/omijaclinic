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
      className="flex flex-col-reverse md:flex-row md:items-stretch bg-white"
    >
      {/* Left Column - Image */}
      <div
        ref={imageRef}
        className="
          w-full
          h-[420px]
          md:w-1/2 md:h-auto
          md:self-stretch
          overflow-hidden
          relative
        "
      >
        <Image
          src="/images/professional-portrait.jpg"
          alt="Dra. Antonieta Ortega"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[50%_20%]"
        />
      </div>

      {/* Right Column - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-8 lg:px-16 xl:px-20 py-16 md:py-12 lg:py-24">
        <div ref={subtitleRef} className="mb-8 md:mb-6 lg:mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] font-sans" style={{ color: "#C5A059" }}>
            Visión Clínica
          </p>
        </div>

        <h2
          ref={headingRef}
          className="text-4xl md:text-3xl lg:text-6xl font-serif font-thin mb-6 md:mb-4 lg:mb-6 leading-tight text-balance uppercase"
        >
          El verdadero cuidado comienza comprendiendo la historia de cada paciente
        </h2>

        <p
          ref={quoteRef}
          className="text-lg md:text-base lg:text-xl font-sans italic mb-8 md:mb-6 lg:mb-8 leading-relaxed text-gray-700 font-thin"
        >
          En OMIYA, entendemos como wellaging a la forma consciente de acompañar a cada persona en su proceso de
          bienestar, con criterio clínico, respeto y sensibilidad.
        </p>

        <div className="space-y-6 md:space-y-4 lg:space-y-6 mb-10 md:mb-6 lg:mb-10">
          <p
            ref={paragraph1Ref}
            className="text-base md:text-sm lg:text-base leading-relaxed text-gray-700 font-sans font-thin"
          >
            Cada decisión clínica se basa en la armonía entre salud, calma y precisión, priorizando siempre lo natural
            por sobre la corrección.
          </p>

          <p
            ref={paragraph2Ref}
            className="text-base md:text-sm lg:text-base leading-relaxed text-gray-700 font-sans font-thin"
          >
            Nuestro enfoque busca crear un espacio donde el bienestar se construye de manera consciente, personalizada y
            sostenible en cada etapa de la vida.
          </p>
        </div>

        <div ref={signatureRef} className="flex items-start gap-3">
          <div className="flex flex-col">
            <p className="text-xl md:text-lg lg:text-xl font-sans font-thin text-gray-900">Dra. Antonieta Ortega</p>
            <p className="text-sm md:text-xs lg:text-sm tracking-wider uppercase font-sans text-gray-500 mt-1 font-thin">
              Directora Clínica · Fundadora
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
