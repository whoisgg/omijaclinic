"use client"

import Picture1 from "@/public/aesthetic-clinic-reception-area-with-minimalist-de.jpg"
import Picture2 from "@/public/modern-aesthetic-clinic-treatment-room-with-natura.jpg"
import Picture3 from "@/public/la-historia-detras-de-omiya.png"
import Picture4 from "@/public/modern-clinic-waiting-room-with-comfortable-seatin.jpg"
import Picture5 from "@/public/dental-clinic-interior.png"
import Picture6 from "@/public/modern-endodontic-treatment-room.jpg"
import Picture7 from "@/public/aesthetic-dental-treatment.jpg"

import Image from "next/image"

export default function ZoomParallaxSection() {
  const pictures = [
    Picture1, // Reception - center
    Picture2, // Treatment room
    Picture3, // La Historia Detrás de Omiya
    Picture4, // Waiting room
    Picture5, // Dental interior
    Picture6, // Treatment room
    Picture7, // Dental treatment
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
