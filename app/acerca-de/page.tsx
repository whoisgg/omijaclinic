"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "@/components/layout/header"
import AboutHero from "@/components/sections/about-hero"
import IkigaiSection from "@/components/sections/ikigai-section"
import ExperienceSection from "@/components/sections/experience-section"
import VerticalGallery from "@/components/sections/vertical-gallery"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"

export default function AboutPage() {
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
    <main className="overflow-x-hidden max-w-[100vw] bg-white">
      <Header />
      <AboutHero />
      <IkigaiSection />
      <ExperienceSection />
      <VerticalGallery />
      <ContactSection />
      <Footer />
    </main>
  )
}
