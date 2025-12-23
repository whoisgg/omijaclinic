"use client"

import ScrollIndicator from "@/components/ui/scroll-indicator"

export default function HeroContent() {
  return (
    <>
      <main className="absolute bottom-8 left-8 z-20 max-w-xl">
        <div className="text-left">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl md:leading-[5rem] tracking-tight font-light text-white mb-4">
            <span className="font-medium italic instrument">Tu mejor versión,</span> naturalmente
          </h1>

          {/* Description */}
          <p className="text-sm font-light text-white/70 mb-4 leading-relaxed">
            Tratamientos estéticos que realzan tu belleza auténtica
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
              Conoce Mas
            </button>
            <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer">
              Agenda tu Cita
            </button>
          </div>
        </div>
      </main>
      <ScrollIndicator />
    </>
  )
}
