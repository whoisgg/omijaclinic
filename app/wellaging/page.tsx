"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WellagingPillars from "@/components/sections/wellaging-pillars"

export default function WellagingPage() {
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

  return (
    <main className="overflow-x-hidden max-w-[100vw] bg-white">
      <Header />

      <section
        className="relative w-full min-h-screen flex items-end pb-24 lg:pb-32 overflow-hidden bg-zinc-900"
        data-section="hero"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-overlay">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animate_waterfall_and_1080p_202601051001-OmJEPz6ipVWS13LrgQ2Wt0xYBUnC34.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/20 pt-8">
            {/* Left: Title */}
            <div className="lg:col-span-7">
              <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4 block">
                El Arte de Vivir
              </span>
              <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-6">
                WELL AGING
              </h1>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-5 flex flex-col justify-end h-full">
              <p className="text-stone-200/80 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Redefiniendo el tiempo a través de la salud interna, la belleza externa y la paz mental. Una ingeniería
                holística de tu mejor versión.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Japanese Text */}
        <div
          className="absolute right-6 top-32 lg:right-12 lg:top-1/3 text-white/70 text-4xl lg:text-6xl font-serif select-none pointer-events-none"
          style={{ writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: "0.5em" }}
        >
          ウェルエイジング
        </div>
      </section>

      {/* Merged Manifesto and Acerca de Wellaging Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 max-w-[1400px] mx-auto">
          {/* Left: Sticky Title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-6">Acerca de</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">Wellaging</h3>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 font-light leading-tight mb-12">
              El wellaging es una forma consciente de acompañar el paso del tiempo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  El wellaging propone una nueva forma de relacionarnos con el envejecimiento.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mt-4">
                  Una mirada que prioriza la salud, el equilibrio y el bienestar integral, dejando atrás la lógica de la
                  corrección y la perfección.
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  En OMIYA Clinic, el wellaging guía nuestra forma de acompañar a la mujer adulta.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mt-4">
                  Cada tratamiento busca <strong className="text-black font-semibold">educar</strong>,{" "}
                  <strong className="text-black font-semibold">cuidar</strong> y{" "}
                  <strong className="text-black font-semibold">acompañar</strong> el proceso de envejecimiento de manera
                  natural, con <strong className="text-black font-semibold">conciencia</strong>,{" "}
                  <strong className="text-black font-semibold">conocimiento</strong> y{" "}
                  <strong className="text-black font-semibold">amor propio</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <WellagingPillars />

      {/* Why Join Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 md:mb-12 text-center">
              <span className="font-normal">PORQUÉ</span> <span className="italic font-medium">UNIRTE?</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Ser parte de este encuentro significa integrarte de forma orgánica a una experiencia auténtica, creada
                para generar un impacto positivo en la salud y el bienestar de muchas mujeres.
              </p>

              <p>
                Es una oportunidad para visibilizar tu marca dentro de un espacio lleno de energía, comunidad y
                movimiento, donde el contenido fluye de manera natural y genuina.
              </p>

              <p>
                Tu marca se vinculará a una experiencia enriquecedora y significativa para cada mujer que participe,
                fortaleciendo su conexión con valores de bienestar, educación y consciencia.
              </p>

              <p>
                Esta colaboración representa el inicio de una alianza a largo plazo, tanto en futuras jornadas como en
                mi práctica clínica diaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jornadas Wellaging Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left Column */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                  <span className="font-normal">JORNADAS</span>
                  <br />
                  <span className="font-normal">WELLAGING</span>
                </h2>

                <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
                  <p>
                    Encuentros de bienestar y educación dirigido a mujeres entre 35 y 60 años que desean formar parte de
                    una comunidad consciente, orientada a vivir cada etapa del ciclo vital femenino con conocimiento,
                    equilibrio y propósito.
                  </p>
                </div>

                <div className="bg-black rounded-full w-48 h-48 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-xs uppercase tracking-[0.2em] mb-2">Antonieta Ortega Muñoz</div>
                    <div className="text-4xl font-light">W</div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
                  La experiencia combina actividad física y un brunch/coffee educativo, donde se abordarán temas clave
                  para el bienestar integral de la mujer:
                </h3>

                <ul className="space-y-3 text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1">•</span>
                    <span className="text-gray-700">Cuidado facial y skincare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1">•</span>
                    <span className="text-gray-700">Cambios hormonales en menopausia y embarazo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1">•</span>
                    <span className="text-gray-700">Nutrición y estilo de vida saludable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1">•</span>
                    <span className="text-gray-700">Promoción de hábitos conscientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1">•</span>
                    <span className="text-gray-700">Salud mental</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-12 md:mt-16 bg-black text-white p-8 md:p-12 rounded-lg">
              <p className="text-lg md:text-2xl leading-relaxed text-center font-light">
                Más que un evento, es un espacio de conexión, aprendizaje y autocuidado, creado para inspirar a cada
                mujer a sentirse acompañada y empoderada en su proceso de evolución.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
