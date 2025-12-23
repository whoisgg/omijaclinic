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
  const buttonRef = useRef<HTMLButtonElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate heading
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

      // Animate first paragraph
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

      // Animate second paragraph
      gsap.from(paragraph2Ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: paragraph2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate button
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate image
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
    <section ref={sectionRef} className="flex flex-col lg:flex-row lg:items-center bg-white py-12 md:py-20 lg:py-32">
      <div className="flex flex-1 flex-col justify-center text-left px-6 py-12 lg:py-0 lg:h-[800px] max-w-7xl mx-auto lg:ml-auto lg:mr-0 lg:pl-8">
        <h3 ref={headingRef} className="mb-4 uppercase text-sm tracking-wider">
          Doctora Antonieta Ortega
        </h3>

        <p ref={paragraph1Ref} className="mb-8 text-2xl lg:text-4xl leading-relaxed text-pretty">
          El wellaging es una forma consciente de vivir el paso del tiempo, priorizando la salud, el equilibrio y el
          bienestar integral por sobre la corrección o la perfección. Es acompañar el envejecimiento con respeto,
          naturalidad y cuidado, entendiendo que cada etapa de la vida merece atención y propósito.
        </p>

        <p ref={paragraph2Ref} className="mb-8 text-2xl lg:text-4xl leading-relaxed text-pretty">
          Este enfoque guía el trabajo de la Dra. Antonieta Ortega, quien integra su experiencia clínica con una mirada
          humana y personalizada para acompañar a la mujer en su bienestar a lo largo del tiempo.
        </p>

        <button
          ref={buttonRef}
          className="w-fit cursor-pointer border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          conoce mas
        </button>
      </div>

      <div ref={imageRef} className="h-[400px] flex-1 lg:h-[800px]">
        <Image
          src="/images/professional-portrait.jpg"
          alt="Professional portrait"
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
