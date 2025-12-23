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
          <Image
            src="/images/untitled.webp"
            fill
            alt="Omija Clinic Reception"
            className="object-cover object-[10%_center] md:object-left"
            quality={95}
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      <p className="absolute bottom-12 right-6 z-10 max-w-xs text-xl text-white sm:max-w-md sm:text-2xl md:max-w-lg md:text-3xl lg:max-w-xl lg:text-4xl xl:max-w-5xl xl:text-5xl text-pretty">
        OMIYA (大宮) significa gran santuario en japonés y hace referencia a la ciudad reconocida como cuna del bonsái.
        Un símbolo de respeto, paciencia y armonía entre el ser humano y la naturaleza.
      </p>
    </section>
  )
}
