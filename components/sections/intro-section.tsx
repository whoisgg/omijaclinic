"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !socialRef.current || !headingRef.current) return

    const ctx = gsap.context(() => {
      // Animate social links
      gsap.from(socialRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate heading with delay
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left side - Social links */}
          <div ref={socialRef} className="md:col-span-3">
            <nav className="flex flex-row md:flex-col gap-4 md:gap-2">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">
                Instagram
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">
                Facebook
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">
                TikTok
              </a>
            </nav>
          </div>

          {/* Right side - Large text */}
          <div className="md:col-span-9">
            <h2
              ref={headingRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase"
            >
              OMIYA CLINIC Un espacio donde bienestar, calma y salud se vuelven uno.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
