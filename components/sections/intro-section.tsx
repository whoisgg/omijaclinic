"use client"

import { useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import type { JSX } from "react"

export default function IntroSection() {
  const refs = useRef<(HTMLSpanElement | null)[]>([])
  const container = useRef<HTMLDivElement>(null)

  const phrase = "Omiya Clinic Un espacio donde bienestar, calma y salud se vuelven uno."

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    createAnimation()
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    })
  }

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = []
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word)
      body.push(
        <p key={word + "_" + i} className="inline">
          {letters}{" "}
        </p>,
      )
    })
    return body
  }

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = []
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el)
          }}
          className="opacity-20"
        >
          {letter}
        </span>,
      )
    })
    return letters
  }

  return (
    <section className="bg-white px-6 md:px-8 lg:px-12 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-row gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#C5A059] md:text-base">
          <span>大</span>
          <span>宮</span>
        </div>

        <div
          ref={container}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight text-pretty uppercase"
        >
          {splitWords(phrase)}
        </div>
      </div>
    </section>
  )
}
