"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextReveal } from "@/components/text-reveal"
import { ScrollReveal } from "@/components/scroll-reveal"

gsap.registerPlugin(ScrollTrigger)

export default function IkigaiSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".ikigai-word")

      gsap.from(words, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: "50% 50%",
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-500">Mi Ikigai</p>
        </ScrollReveal>

        <TextReveal
          text="Busco acompañar a la mujer adulta en su proceso de envejecimiento promoviendo el bienestar integral y la educación como caminos para fomentar armonía y comunidad"
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-snug text-gray-900 text-justify"
          staggerDelay={0.04}
        />
      </div>
    </section>
  )
}
