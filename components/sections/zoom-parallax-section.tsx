"use client"

import Picture1 from "@/public/wellagingclub.webp"
import Picture2 from "@/public/tratamientowell.webp"
import Picture3 from "@/public/historiaomiya.webp"
import Picture4 from "@/public/renacerpiel.webp"
import Picture5 from "@/public/exotox.webp"
import Picture6 from "@/public/verdadwellaging.webp"
import Picture7 from "@/public/mujerespoderas.webp"

import Image from "next/image"

export default function ZoomParallaxSection() {
  const pictures = [
    Picture1, // Wellaging Club group photo - center
    Picture2, // Tratamiento Wellaging
    Picture3, // La Historia Detrás de Omiya
    Picture4, // Renacer en la Piel
    Picture5, // EXO TOX treatment
    Picture6, // La Verdad del Wellaging hourglass
    Picture7, // Mujeres Poderosas
  ]

  return (
    <>
      <div className="relative h-[100vh] bg-white hidden sm:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          {pictures.map((src, index) => {
            return (
              <div key={index} className="w-full h-full top-0 absolute flex items-center justify-center">
                <div
                  className="relative"
                  style={
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
                  }
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Clinic image ${index + 1}`}
                    fill
                    className="object-cover"
                    style={index === 2 ? { objectPosition: "30% center" } : undefined}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-white py-12 px-4 sm:hidden">
        <div className="flex flex-col gap-6 max-w-lg mx-auto">
          {pictures.map((src, index) => (
            <div key={index} className="relative w-full aspect-[4/3]">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Clinic image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                style={index === 2 ? { objectPosition: "center 20%" } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
