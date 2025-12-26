"use client"

import Link from "next/link"
import Image from "next/image"

import Picture1 from "@/public/wellagingclub.webp"
import Picture2 from "@/public/tratamientowell.webp"
import Picture3 from "@/public/historiaomiya.webp"
import Picture4 from "@/public/renacerpiel.webp"
import Picture5 from "@/public/exotox.webp"
import Picture6 from "@/public/verdadwellaging.webp"
import Picture7 from "@/public/mujerespoderas.webp"

export default function ZoomParallaxSection() {
  const pictures = [
    Picture1,
    Picture2,
    Picture3,
    Picture4,
    Picture5,
    Picture6,
    Picture7,
  ]

const links = [
  "https://www.instagram.com/p/DSDr7ERD_hj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/C_J8d8Jyc3p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DSTGpqCD0VJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DSV2BN2EYfV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DSa-B9sD-AS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DSYUCsLDzjh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/reel/DSI0AUnjxBe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
]


  return (
    <>
      {/* Desktop */}
      <div className="relative h-[100vh] bg-white hidden sm:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          {pictures.map((src, index) => {
            const style =
              index === 0
                ? { width: "25vw", height: "25vh" }
                : index === 1
                ? { top: "-30vh", left: "5vw", width: "35vw", height: "30vh" }
                : index === 2
                ? { top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" }
                : index === 3
                ? { left: "27.5vw", width: "25vw", height: "25vh" }
                : index === 4
                ? { top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" }
                : index === 5
                ? { top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" }
                : { top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" }

            return (
              <div
                key={index}
                className="w-full h-full top-0 absolute flex items-center justify-center pointer-events-none"
              >
                <div className="relative group" style={style}>
                  <Link
                    href={links[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 cursor-pointer pointer-events-auto"
                    aria-label={`Open image link ${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`Clinic image ${index + 1}`}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={index === 2 ? { objectPosition: "30% center" } : undefined}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white py-12 px-4 sm:hidden">
        <div className="flex flex-col gap-6 max-w-lg mx-auto">
          {pictures.map((src, index) => (
            <div key={index} className="relative w-full aspect-[4/3] group">
              <Link
                href={links[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label={`Open image link ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Clinic image ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  style={index === 2 ? { objectPosition: "center 20%" } : undefined}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
