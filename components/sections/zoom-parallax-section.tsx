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

  // Scale transforms - center image (25vw*4=100vw, 25vh*4=100vh = fullscreen)
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    { src: "/dental-clinic-interior.png", scale: scale4, width: "25vw", height: "25vh" },
    {
      src: "/modern-endodontic-treatment-room.jpg",
      scale: scale5,
      top: "-30vh",
      left: "5vw",
      width: "35vw",
      height: "30vh",
    },
    {
      src: "/aesthetic-dental-treatment.jpg",
      scale: scale6,
      top: "-10vh",
      left: "-25vw",
      width: "20vw",
      height: "45vh",
    },
    {
      src: "/modern-aesthetic-clinic-treatment-room-with-natura.jpg",
      scale: scale5,
      left: "27.5vw",
      width: "25vw",
      height: "25vh",
    },
    {
      src: "/aesthetic-clinic-reception-area-with-minimalist-de.jpg",
      scale: scale6,
      top: "27.5vh",
      left: "5vw",
      width: "20vw",
      height: "25vh",
    },
    {
      src: "/professional-aesthetic-treatment-being-performed.jpg",
      scale: scale8,
      top: "27.5vh",
      left: "-22.5vw",
      width: "30vw",
      height: "25vh",
    },
    {
      src: "/modern-clinic-waiting-room-with-comfortable-seatin.jpg",
      scale: scale9,
      top: "22.5vh",
      left: "25vw",
      width: "15vw",
      height: "15vh",
    },
  ]

  return (
    <div ref={container} style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        {pictures.map(({ src, scale, top, left, width, height }, index) => (
          <motion.div
            key={index}
            style={{
              scale,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                top: top || undefined,
                left: left || undefined,
                width,
                height,
              }}
            >
              <Image
                src={src || "/placeholder.svg"}
                fill
                alt={`Clinic image ${index + 1}`}
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
