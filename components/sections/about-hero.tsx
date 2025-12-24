"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutHero() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const totalFrames = 44

  useEffect(() => {
    const imageElements: HTMLImageElement[] = []
    let loadedCount = 0

    console.log("[v0] Starting to preload 44 frames...")

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image()
      img.src = `/images/hero-frames/frame_${String(i).padStart(2, "0")}_delay-0.04s.png`
      img.onload = () => {
        loadedCount++
        console.log(`[v0] Loaded frame ${i + 1}/${totalFrames}`)
        if (loadedCount === totalFrames) {
          setImagesLoaded(true)
          console.log("[v0] All frames loaded successfully")
        }
      }
      img.onerror = () => {
        console.error(`[v0] Failed to load frame ${i}`)
        loadedCount++
        if (loadedCount === totalFrames) {
          setImagesLoaded(true)
        }
      }
      imageElements.push(img)
    }

    return () => {
      imageElements.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      const scrollStart = Math.max(0, -rect.top)
      const scrollRange = sectionHeight - windowHeight
      const scrollProgress = scrollRange > 0 ? Math.min(1, Math.max(0, scrollStart / scrollRange)) : 0

      const frameIndex = Math.min(Math.max(0, Math.floor(scrollProgress * (totalFrames - 1))), totalFrames - 1)

      setCurrentFrame(frameIndex)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const getParallaxStyle = (layer: "background" | "subject" | "text") => {
    const progress = currentFrame / (totalFrames - 1)

    switch (layer) {
      case "background":
        return { transform: `translateY(${progress * 15}%)` }
      case "subject":
        return { transform: `translateY(${progress * 30}%)` }
      case "text":
        return {
          transform: `translateY(${progress * 50}%)`,
          opacity: Math.max(0, 1 - progress * 1.3),
        }
      default:
        return {}
    }
  }

  return (
    <section ref={sectionRef} className="relative h-[300vh] w-full overflow-hidden bg-black">
      <div className="sticky top-0 h-screen w-full">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-40"
          style={getParallaxStyle("background")}
        />

        <div className="absolute inset-0" style={getParallaxStyle("subject")}>
          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-white text-xl">Loading frames...</div>
            </div>
          )}

          <img
            key={currentFrame}
            src={`/images/hero-frames/frame_${String(currentFrame).padStart(2, "0")}_delay-0.04s.png`}
            alt="Dra. Antonieta Ortega"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div
          className="relative z-10 h-full flex items-center justify-start px-6 lg:px-12"
          style={getParallaxStyle("text")}
        >
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Acerca de
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
              Creating meaningful experiences through innovative design and storytelling
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - (currentFrame / totalFrames) * 3) }}
        >
          <span className="text-white/60 text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded text-sm font-mono backdrop-blur-sm">
            Frame: {currentFrame + 1} / {totalFrames}
          </div>
        )}
      </div>
    </section>
  )
}
