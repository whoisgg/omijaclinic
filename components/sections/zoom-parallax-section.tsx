"use client"

import Picture1 from "@/public/wellaging-club.png"
import Picture2 from "@/public/renacer-en-la-piel.png"
import Picture3 from "@/public/la-historia-detras-de-omiya.png"
import Picture4 from "@/public/modern-clinic-waiting-room-with-comfortable-seatin.jpg"
import Picture5 from "@/public/exo-tox-full-face.png"
import Picture6 from "@/public/la-verdad-del-wellaging.png"
import Picture7 from "@/public/mujeres-poderosas.png"

import Image from "next/image"

export default function ZoomParallaxSection() {
  const pictures = [
    Picture1, // Wellaging Club group photo - center
    Picture2, // Treatment room
    Picture3, // La Historia Detrás de Omiya
    Picture4, // Waiting room
    Picture5, // EXO TOX treatment
    Picture6, // Wellaging hourglass
    Picture7, // Mujeres Poderosas
  ]

  return (
    <div className="relative h-[100vh] bg-white">
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
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
