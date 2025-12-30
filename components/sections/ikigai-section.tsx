"use client"

import { useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import type { JSX } from "react" // Declared JSX for linting

export default function IkigaiSection() {
  const refs = useRef<(HTMLSpanElement | null)[]>([])
  const container = useRef<HTMLDivElement>(null)

  const phrase =
    "Acompañar a la mujer adulta en su proceso de envejecimiento promoviendo el bienestar integral y la educación como caminos para fomentar armonía y comunidad"

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
    <section className="bg-white px-6 py-20 md:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-slate-500 md:mb-8 md:text-base lg:mb-8">
          Mi Ikigai
        </p>

        {/* Animated text with gradient opacity */}
        <div
          ref={container}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight text-pretty uppercase"
        >
          {splitWords(phrase)}
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-slate-100 md:mt-14 lg:mt-16" />
      </div>
    </section>
  )
}
