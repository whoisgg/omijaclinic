"use client"

import ScrollIndicator from "@/components/ui/scroll-indicator"

export default function HeroContent() {
  return (
    <>
      <main className="absolute inset-0 z-20 flex items-end pb-24 lg:pb-32">
        <div className="w-full px-6 md:px-12 lg:px-24">
          {/* Left: Title */}
          {/* Right: Description & CTAs */}
          <div className="max-w-4xl">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4 block">
              Clínica de Estética
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-2">
              <span className="font-medium italic instrument">Acompañamos tu bienestar,</span>
            </h1>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-8">
              en cada etapa
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-6">
              Tratamientos estéticos que realzan tu belleza auténtica
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs md:text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
                Conoce Más
              </button>
              <button className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-black font-normal text-xs md:text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer">
                Agenda tu Cita
              </button>
            </div>
          </div>
        </div>
      </main>

      <ScrollIndicator />
    </>
  )
}
