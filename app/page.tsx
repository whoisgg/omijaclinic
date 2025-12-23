"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import ShaderBackground from "@/components/sections/shader-background"
import Header from "@/components/layout/header"
import HeroContent from "@/components/sections/hero-content"
import IntroSection from "@/components/sections/intro-section"
import FeaturedSection from "@/components/sections/featured-section"
import PromoSection from "@/components/sections/promo-section"
import ServicesSection from "@/components/sections/services-section"
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
      <div className="sticky top-0 h-screen">
        <ShaderBackground>
          <Header />
          <HeroContent />
        </ShaderBackground>
      </div>

      <div className="relative z-10 bg-white">
        <IntroSection />
        <FeaturedSection />
        <PromoSection />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  )
}
