"use client"

import { useEffect, useRef } from "react"
import ScrollIndicator from "@/components/ui/scroll-indicator"
import { gsap } from "gsap"

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const imageElements: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 0; i < 1; i++) {
      const img = new Image()
      img.src = `/images/hero-frames/frame_${String(i).padStart(2, "0")}_delay-0.04s.png`
      img.onload = () => {
        loadedCount++
      }
      img.onerror = () => {
        loadedCount++
      }
      imageElements.push(img)
    }

    return () => {
      imageElements.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
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
    <section
      ref={sectionRef}
      data-section="hero"
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-end pb-24 lg:pb-32"
    >
      {/* Hero Image - First Frame */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-acerca.png"
          alt="Dra. Antonieta Ortega"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl" style={{ perspective: "1000px" }}>
          <span className="text-[#C5A059] font-thin tracking-widest uppercase text-xs mb-4 block">Acerca de</span>
          <h1
            ref={titleRef}
            className="text-white text-5xl md:text-7xl lg:text-8xl  font-thin tracking-tight leading-[0.95] mb-8"
          >
            <span className="hero-title-line block font-serif">DRA.</span>
            <span className="hero-title-line block md:whitespace-nowrap font-serif ">ANTONIETA ORTEGA</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-stone-200/80 text-xl md:text-2xl font-serif  font-light leading-relaxed max-w-2xl"
          >
            Cirujano Dentista con especialización en Endodoncia y Armonización Orofacial.
          </p>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
