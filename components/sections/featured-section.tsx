"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraph1Ref = useRef<HTMLParagraphElement>(null)
  const paragraph2Ref = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
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
        delay: 0.1,
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
        delay: 0.2,
        scrollTrigger: {
          trigger: paragraph2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(nameRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 20,
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
    <section ref={sectionRef} data-section="featured" className="flex flex-col lg:flex-row lg:items-stretch bg-white">
      <div className="flex flex-1 flex-col justify-center px-6 py-16 md:py-20 lg:py-32 lg:px-12 xl:px-20 max-w-4xl lg:max-w-none">
        <h2
          ref={headingRef}
          className="mb-12 text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight uppercase"
        >
          El wellaging es una forma consciente de acompañar el paso del tiempo.
        </h2>

        <div className="space-y-8 mb-16">
          <p ref={paragraph1Ref} className="text-lg md:text-xl leading-relaxed text-pretty text-foreground/90">
            En OMIYA Clinic, entendemos el bienestar como un equilibrio entre salud, calma y cuidado, priorizando lo
            natural por sobre la corrección.
          </p>

          <p ref={paragraph2Ref} className="text-lg md:text-xl leading-relaxed text-pretty text-foreground/90">
            Bajo la guía clínica de la <span className="font-semibold">Dra. Antonieta Ortega</span>, cada tratamiento se
            diseña de manera personalizada, respetando el ritmo y las necesidades de cada etapa de la vida.
          </p>
        </div>

        <a
          ref={nameRef}
          href="/acerca-de"
          className="mt-auto border-t pt-8 hover:opacity-70 transition-opacity duration-300"
        >
          <p className="text-xs font-semibold tracking-widest mb-1.5 uppercase">Dra. Antonieta Ortega</p>
          <p className="text-xs text-muted-foreground tracking-wide uppercase">
            Endodoncia · Armonización Orofacial · Cosmetóloga
          </p>
        </a>
      </div>

      <div ref={imageRef} className="h-[500px] flex-1 lg:h-auto lg:min-h-[700px]">
        <Image
          src="/images/professional-portrait.jpg"
          alt="Dra. Antonieta Ortega"
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
