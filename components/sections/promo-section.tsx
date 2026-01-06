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
      data-section="promo"
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src="/images/bonsai-tree-festival-stock.jpg"
            fill
            alt="Bonsai Tree - Symbol of Omiya"
            className="object-cover object-center"
            quality={95}
            priority
            sizes="100vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        <p className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-pretty leading-relaxed">
          <span>OMIYA (大宮) significa </span>
          <span className="text-[#D4AF37]">gran santuario</span>
          <span> en japonés y hace referencia a la ciudad reconocida como cuna del bonsái. Un símbolo de </span>
          <span className="text-[#D4AF37]">respeto, paciencia y armonía</span>
          <span> entre el ser humano y la naturaleza.</span>
        </p>
      </div>
      {/* </CHANGE> */}
    </section>
  )
}
