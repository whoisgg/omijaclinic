"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WellagingPillars from "@/components/sections/wellaging-pillars"
import Image from "next/image"

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

      {/* Hero Section */}
      <section
        data-section="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-24 md:pt-32 pb-16 md:pb-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative w-full aspect-[3/4] md:aspect-[3/5] overflow-hidden rounded-lg">
              <Image
                src="/images/image.png"
                alt="Dra. Antonieta Ortega - Wellaging"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded">
                <p className="text-xs uppercase tracking-[0.2em] text-black font-light">Dra. Antonieta Ortega</p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight">
                  <span className="italic font-medium">Acerca de</span>
                  <br />
                  <span className="font-normal">WELLAGING</span>
                </h1>
              </div>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
                <p>
                  Según los últimos estudios sobre factores que inciden en el envejecimiento tenemos que entre el{" "}
                  <strong className="text-black font-semibold">70%</strong> y el{" "}
                  <strong className="text-black font-semibold">80%</strong> de cómo envejecemos depende de nuestros
                  hábitos y estilo de vida... lo que significa que{" "}
                  <strong className="text-black font-semibold">TENEMOS EL PODER</strong> de{" "}
                  <strong className="text-black font-semibold">VERNOS, SENTIRNOS</strong> y{" "}
                  <strong className="text-black font-semibold">ENVEJECER MEJOR</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Wellaging Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Three Images Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/sunset-yoga-meditation-silhouette.jpg"
                  alt="Yoga y bienestar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image src="/happy-woman-laughing-authentic.jpg" alt="Mujer feliz" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/artistic-head-flowers-mental-health.jpg"
                  alt="Salud mental"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                <span className="italic font-medium">Acerca de</span> WELLAGING
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto text-gray-700">
                Iniciativa que busca cambiar la forma de cómo vemos el envejecimiento, pasando de un concepto
                restrictivo como el "ANTIAGING" a una forma más positiva y natural:{" "}
                <strong className="text-black font-semibold">"WELLAGING"</strong> (buen envejecer).
              </p>
            </div>

            {/* Description */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                Generando contenido en redes sociales y actividades que buscan ACOMPAÑAR y EDUCAR a las mujeres en el
                conocimiento de los factores que influyen en su proceso de envejecimiento, para que puedan tomar las
                riendas de su cuerpo y generar pequeños cambios{" "}
                <strong className="text-black font-semibold">saludables</strong>, con{" "}
                <strong className="text-black font-semibold">consciencia</strong>,{" "}
                <strong className="text-black font-semibold">conocimiento</strong> y{" "}
                <strong className="text-black font-semibold">amor propio</strong>.
              </p>
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
