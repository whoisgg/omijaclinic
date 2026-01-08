"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ScrollIndicator from "@/components/ui/scroll-indicator"
import { ArrowRight, Check } from "lucide-react"
import { gsap } from "gsap"

export default function TreatmentsPage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return

    const ctx = gsap.context(() => {
      const titleLines = titleRef.current?.querySelectorAll(".hero-title-line")

      gsap.from(titleLines, {
        opacity: 0,
        y: 100,
        rotationX: -45,
        transformOrigin: "50% 100%",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      })

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        delay: 0.9,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="overflow-x-hidden max-w-[100vw] bg-white">
      <Header />

      <section
        data-section="hero"
        className="relative w-full min-h-screen bg-white overflow-hidden flex items-end pb-24 lg:pb-32"
      >
        {/* Hero Image - Soft Rose */}
        <div className="absolute inset-0">
          <img
            src="/images/image.png"
            alt="Soft rose petals"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl" style={{ perspective: "1000px" }}>
            <span className="text-[#C5A059] font-semibold tracking-widest uppercase text-xs mb-4 block">
              Tratamientos
            </span>
            <h1
              ref={titleRef}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-thin tracking-tighter leading-[0.95] mb-8"
            >
              <span className="hero-title-line block">ARMONÍA Y</span>
              <span className="hero-title-line block">PRECISIÓN</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-stone-200/80 text-lg md:text-xl font-sans font-thin leading-relaxed max-w-2xl"
            >
              Descubra nuestros pilares de cuidado integral, donde la tecnología avanzada se combina con un enfoque
              minimalista y humano.
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Odontología Integral */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] order-2 lg:order-1">
            <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
            <img
              src="/dental-tools-white-surface.jpg"
              alt="Instrumental dental sobre superficie blanca"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-400">01</span>
              <div className="h-px w-8 bg-[#C5A059]"></div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.2em]">General</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-thin text-zinc-900 tracking-tight">
              Odontología Integral
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base md:text-lg font-thin">
              La base de una salud oral duradera. Nuestro enfoque en odontología general prioriza la prevención, el
              diagnóstico temprano y restauraciones mínimamente invasivas. Utilizamos tecnología digital para asegurar
              que cada procedimiento sea cómodo y preciso.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Diagnóstico digital 3D
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Limpiezas ultrasónicas
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Restauraciones estéticas
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-zinc-900 font-semibold hover:text-[#C5A059] transition-colors w-fit group/link"
            >
              Más detalles
              <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Endodoncia Avanzada */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
          {/* Content */}
          <div className="flex flex-col gap-6 order-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-400">02</span>
              <div className="h-px w-8 bg-[#C5A059]"></div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.2em]">Especialidad</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-thin text-zinc-900 tracking-tight">
              Endodoncia Avanzada
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base md:text-lg font-thin">
              Preservar sus dientes naturales es nuestra prioridad. Nuestros tratamientos de conducto se realizan bajo
              microscopía clínica, permitiendo una limpieza profunda y precisa que elimina el dolor y la infección,
              salvando piezas dentales que de otro modo se perderían.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Microscopía operativa
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Tratamiento indoloro
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Recuperación rápida
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-zinc-900 font-semibold hover:text-[#C5A059] transition-colors w-fit group/link"
            >
              Más detalles
              <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] order-2">
            <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
            <img
              src="/abstract-minimal-microscopic-precision.jpg"
              alt="Imagen abstracta representando precisión microscópica"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Estética Dental */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] order-2 lg:order-1">
            <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
            <img
              src="/bright-natural-smile-healthy-teeth.jpg"
              alt="Sonrisa natural brillante con dientes saludables"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-400">03</span>
              <div className="h-px w-8 bg-[#C5A059]"></div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.2em]">Belleza</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-thin text-zinc-900 tracking-tight">
              Estética Dental
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base md:text-lg font-thin">
              El arte de diseñar sonrisas. Combinamos la ciencia dental con principios estéticos para crear sonrisas que
              armonizan con sus rasgos faciales. Desde blanqueamientos sutiles hasta carillas de porcelana hechas a
              mano.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Diseño de sonrisa digital
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Carillas de porcelana
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-thin">
                <Check className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                Blanqueamiento profesional
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-zinc-900 font-semibold hover:text-[#C5A059] transition-colors w-fit group/link"
            >
              Más detalles
              <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-thin mb-6 tracking-tight">
            Comience su transformación hoy
          </h2>
          <p className="text-gray-300 font-sans text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-thin">
            Agende una consulta de valoración y descubra cómo podemos mejorar su salud y estética dental con nuestro
            enfoque único.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#B08F4A] text-white font-semibold rounded-lg transition-all duration-300 text-center"
            >
              Agendar Cita
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
