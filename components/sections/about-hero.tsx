"use client"

import { useEffect, useRef } from "react"
import ScrollIndicator from "@/components/ui/scroll-indicator"

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imageElements: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 0; i < 1; i++) {
      // Only preload frame 00
      const img = new Image()
      img.src = `/images/hero-frames/frame_${String(i).padStart(2, "0")}_delay-0.04s.png`
      img.onload = () => {
        loadedCount++
        if (loadedCount === 1) {
          // No longer needed to set state
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === 1) {
          // No longer needed to set state
        }
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

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Hero Image - First Frame */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-frames/frame_00_delay-0.04s.png"
          alt="Dra. Antonieta Ortega"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight text-balance">
            Dra.
            <br />
            Antonieta Ortega
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl text-pretty">
            Cirujano Dentista con especialización en Endodoncia y Armonización Orofacial.
          </p>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
