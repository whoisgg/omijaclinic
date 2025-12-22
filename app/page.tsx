"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import ShaderBackground from "@/components/sections/shader-background"
import Header from "@/components/layout/header"
import HeroContent from "@/components/sections/hero-content"
import PulsingCircle from "@/components/sections/pulsing-circle"
import FeaturedSection from "@/components/sections/featured-section"
import PromoSection from "@/components/sections/promo-section"
import Footer from "@/components/layout/footer"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>

      <FeaturedSection />
      <PromoSection />
      <Footer />
    </main>
  )
}
