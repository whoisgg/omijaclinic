"use client"

import Image from "next/image"

export default function VerticalGallery() {
  const pictures = [
    "/modern-dental-clinic.png",
    "/dental-treatment-room.png",
    "/images/iamge3.png",
    "/patient-care-dentistry.jpg",
    "/images/image1.png",
    "/smile-makeover-results.jpg",
    "/aesthetic-dentistry.jpg",
  ]

  return (
    <>
      {/* Desktop - Collage Layout */}
      <div className="relative bg-[#f3f3ef] hidden sm:block py-24 md:py-32">
        <div className="sticky top-0 h-screen overflow-hidden">
          {pictures.map((src, index) => {
            const style =
              index === 0
                ? { width: "28vw", height: "35vh", top: "10vh", left: "8vw" }
                : index === 1
                  ? { width: "22vw", height: "28vh", top: "50vh", left: "5vw" }
                  : index === 2
                    ? { width: "25vw", height: "40vh", top: "15vh", left: "38vw" }
                    : index === 3
                      ? { width: "20vw", height: "30vh", top: "58vh", left: "30vw" }
                      : index === 4
                        ? { width: "26vw", height: "32vh", top: "8vh", right: "6vw" }
                        : index === 5
                          ? { width: "23vw", height: "35vh", top: "45vh", right: "8vw" }
                          : { width: "18vw", height: "25vh", top: "35vh", left: "52vw" }

            return (
              <div key={index} className="absolute" style={style}>
                <div className="relative w-full h-full group rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Dental practice image ${index + 1}`}
                    fill
                    priority={index < 3}
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile - Stacked Layout */}
      <div className="bg-[#f3f3ef] py-16 md:py-24 px-6 sm:hidden">
        <div className="flex flex-col gap-6 max-w-lg mx-auto">
          {pictures.map((src, index) => (
            <div key={index} className="relative w-full aspect-[4/3] group">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Dental practice image ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
