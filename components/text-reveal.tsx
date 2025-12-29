"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  className?: string
  staggerDelay?: number
}

export function TextReveal({ text, className = "", staggerDelay = 0.05 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const words = containerRef.current.querySelectorAll(".word")

    gsap.set(words, { opacity: 0, y: 20 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    tl.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: staggerDelay,
      ease: "power2.out",
    })

    return () => {
      tl.kill()
    }
  }, [text, staggerDelay])

  const words = text.split(" ")

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span key={index} className="word inline-block" style={{ marginRight: "0.3em" }}>
          {word}
        </span>
      ))}
    </div>
  )
}
