"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function PromoSection() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  return (
    <section
      ref={container}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image src="/images/spiral-circles.jpg" fill alt="Abstract spiral circles" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>

      <h3 className="absolute right-6 top-12 z-10 text-sm uppercase text-white md:text-base lg:text-lg">
        Anatomy of Possibility
      </h3>

      <p className="absolute bottom-12 right-6 z-10 max-w-xs text-xl text-white sm:max-w-md sm:text-2xl md:max-w-lg md:text-3xl lg:max-w-xl lg:text-4xl xl:max-w-5xl xl:text-5xl text-pretty">
        Every section is a frame for your story. Shape it, remix it, and let your content spill into unexpected patterns
        that keep people scrolling.
      </p>
    </section>
  )
}
