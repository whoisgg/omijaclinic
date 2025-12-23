"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ZoomParallaxSection() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: "/aesthetic-clinic-reception-area-with-minimalist-de.jpg",
      scale: scale4,
    },
    {
      src: "/modern-aesthetic-clinic-treatment-room-with-natura.jpg",
      scale: scale5,
    },
    {
      src: "/professional-aesthetic-treatment-being-performed.jpg",
      scale: scale6,
    },
    {
      src: "/modern-clinic-waiting-room-with-comfortable-seatin.jpg",
      scale: scale5,
    },
    {
      src: "/dental-clinic-interior.png",
      scale: scale6,
    },
    {
      src: "/modern-endodontic-treatment-room.jpg",
      scale: scale8,
    },
    {
      src: "/aesthetic-dental-treatment.jpg",
      scale: scale9,
    },
  ]

  const getImageContainerStyle = (index: number) => {
    const baseStyle = {
      position: "relative" as const,
      width: "25vw",
      height: "25vh",
    }

    switch (index) {
      case 1:
        return { ...baseStyle, top: "-30vh", left: "5vw", width: "35vw", height: "30vh" }
      case 2:
        return { ...baseStyle, top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" }
      case 3:
        return { ...baseStyle, left: "27.5vw", width: "25vw", height: "25vh" }
      case 4:
        return { ...baseStyle, top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" }
      case 5:
        return { ...baseStyle, top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" }
      case 6:
        return { ...baseStyle, top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" }
      default:
        return baseStyle
    }
  }

  return (
    <section ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <div key={index} className="absolute inset-0 flex items-center justify-center">
            <motion.div
              style={{
                ...getImageContainerStyle(index),
                scale,
                transformOrigin: "center center",
              }}
            >
              <Image
                src={src || "/placeholder.svg"}
                fill
                alt={`Clinic image ${index + 1}`}
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 50vw"
                priority={index === 0}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
