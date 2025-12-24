"use client"

import { useEffect, useRef } from "react"

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
            Acerca de
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl text-pretty">
            Creating meaningful experiences through innovative design and storytelling
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-sm uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
