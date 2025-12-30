"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const panels = [
  {
    id: 1,
    topText: "ODONTOLOGÍA ESTÉTICA Y FUNCIONAL",
    headline: "Tratamientos que combinan salud y belleza",
    headlineGrey: "para sonrisas naturales.",
    bottomText: "CADA SONRISA ES ÚNICA Y MERECE UN CUIDADO PERSONALIZADO",
    images: [
      { src: "/dental-clinic-interior-modern-design.jpg", alt: "Clínica dental moderna", y: 0 },
      { src: "/dental-treatment-room-equipment.jpg", alt: "Equipamiento dental", y: -20 },
      { src: "/dental-aesthetic-procedures.jpg", alt: "Procedimientos estéticos", y: 10 },
    ],
  },
  {
    id: 2,
    topText: "ARMONIZACIÓN OROFACIAL CONSCIENTE",
    headline: "Técnicas mínimamente invasivas",
    headlineGrey: "que respetan tu identidad.",
    bottomText: "LA BELLEZA NO SE IMPONE, SE DESCUBRE Y SE ACOMPAÑA",
    images: [
      { src: "/dental-patient-care-comfortable.jpg", alt: "Cuidado del paciente", y: 15 },
      { src: "/dental-technology-advanced-equipment.jpg", alt: "Tecnología avanzada", y: -15 },
      { src: "/dental-results-before-after-smile.jpg", alt: "Resultados de sonrisa", y: 5 },
    ],
  },
]

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // keep references so we can cleanly rebuild on resize
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const stRef = useRef<ScrollTrigger | null>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    const build = () => {
      // kill only our instances (don’t kill all triggers)
      stRef.current?.kill()
      tweenRef.current?.kill()
      stRef.current = null
      tweenRef.current = null

      // measure AFTER layout settles
      const scrollDistance = container.scrollWidth - window.innerWidth
      if (scrollDistance <= 0) return

      tweenRef.current = gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        overwrite: true,
      })

      stRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance + window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        animation: tweenRef.current,
        invalidateOnRefresh: true,
      })

      ScrollTrigger.refresh()
    }

    // run build after paint (so widths are correct)
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(build)
      ;(build as any)._raf2 = raf2
    })

    const onResize = () => {
      // rebuild after resize settles
      requestAnimationFrame(() => requestAnimationFrame(build))
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(raf1)
      if ((build as any)._raf2) cancelAnimationFrame((build as any)._raf2)
      stRef.current?.kill()
      tweenRef.current?.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-zinc-900">
      <div ref={containerRef} className="flex h-full w-max items-center px-[10vw]" style={{ willChange: "transform" }}>
        {panels.map((panel) => (
          <div key={panel.id} className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-8">
            {/* Central panel with rounded corners */}
            <div className="relative w-[420px] max-w-[88vw] h-[86vh] rounded-[32px] bg-[#f3f3ef] px-10 py-10">
              {/* Top text */}
              <div className="text-center mb-8">
                <p className="text-[11px] md:text-xs font-bold tracking-[0.14em] leading-snug text-zinc-900/85">
                  {panel.topText}
                </p>
              </div>

              {/* Yellow accent squiggle top-left */}
              <svg
                className="absolute left-12 top-32 w-10 h-8"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15c3-8 8-12 15-10 7 2 5 10 0 12-5 2-8-2-6-6"
                  stroke="#d4ff00"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Main headline with mixed weights */}
              <div className="text-center mt-16 mb-4 px-2">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-zinc-900">{panel.headline}</h2>
                <h2 className="text-3xl md:text-4xl font-light leading-tight text-zinc-400 mt-1">
                  {panel.headlineGrey}
                </h2>
              </div>

              {/* Yellow accent lightning bolt bottom-right */}
              <svg
                className="absolute right-12 top-[50%] w-8 h-12"
                viewBox="0 0 32 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2L2 26h14L14 46l16-24H16L18 2z" fill="#d4ff00" />
              </svg>

              {/* Staggered image collage at bottom */}
              <div className="absolute left-1/2 top-[64%] -translate-x-1/2 w-[110%] flex items-end justify-center gap-5">
                {panel.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                    style={{
                      width: idx === 1 ? 150 : 130,
                      height: idx === 1 ? 200 : 175,
                      transform: `translateY(${img.y}px)`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom text */}
              <div className="absolute left-10 right-10 bottom-10 text-center">
                <p className="text-[11px] md:text-xs font-bold tracking-[0.14em] leading-snug text-zinc-900/85">
                  {panel.bottomText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
