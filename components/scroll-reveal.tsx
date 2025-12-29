"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
  delay?: number
  scale?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  distance = 60,
  duration = 0.8,
  delay = 0,
  scale = 1,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Initial state
    const initialState: Record<string, number | string> = {
      opacity: 0,
      scale: scale,
    }

    switch (direction) {
      case "up":
        initialState.y = distance
        break
      case "down":
        initialState.y = -distance
        break
      case "left":
        initialState.x = distance
        break
      case "right":
        initialState.x = -distance
        break
    }

    gsap.set(element, initialState)

    // Animation
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      animation.kill()
    }
  }, [direction, distance, duration, delay, scale])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
