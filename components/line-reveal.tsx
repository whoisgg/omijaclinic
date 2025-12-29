"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface LineRevealProps {
  children: React.ReactNode
}

export function LineReveal({ children }: LineRevealProps) {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lineRef.current) return

    const line = lineRef.current.querySelector(".reveal-line")

    if (line) {
      gsap.set(line, { scaleX: 0, transformOrigin: "left" })

      gsap.to(line, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  return (
    <div ref={lineRef}>
      {children}
      <div className="reveal-line mt-8 h-px w-full bg-border" />
    </div>
  )
}
