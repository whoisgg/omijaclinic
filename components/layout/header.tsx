"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isInLightSection, setIsInLightSection] = useState(false)
  const [isTreatmentExpanded, setIsTreatmentExpanded] = useState(false)
  const pathname = usePathname()

  const isWellagingPage = pathname === "/wellaging"

  useEffect(() => {
    const handleScroll = () => {
      const featuredSection = document.querySelector('[data-section="featured"]')
      const servicesSection = document.querySelector('[data-section="services"]')
      const treatmentExpanded = document.body.getAttribute("data-treatment-expanded") === "true"
      setIsTreatmentExpanded(treatmentExpanded)

      if (featuredSection || servicesSection) {
        const featuredRect = featuredSection?.getBoundingClientRect()
        const servicesRect = servicesSection?.getBoundingClientRect()

        const inFeatured = featuredRect && featuredRect.top <= 100 && featuredRect.bottom >= 0
        const inServices = servicesRect && servicesRect.top <= 100 && servicesRect.bottom >= 0

        setIsInLightSection(!treatmentExpanded && (inFeatured || inServices))
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    const observer = new MutationObserver(handleScroll)
    observer.observe(document.body, { attributes: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const menuItems = [
    { label: "Acerca de", href: "/acerca-de", image: "/images/hero-frames/frame_00_delay-0.04s.png" },
    { label: "Well Aging", href: "/wellaging", image: "/luxury-fashion-products.jpg" },
    { label: "Tratamientos", href: "#treatments", image: "/modern-interior-home.jpg" },
  ]

  const textColor = isWellagingPage
    ? "text-black"
    : isTreatmentExpanded
      ? "text-white"
      : isInLightSection
        ? "text-black"
        : "text-white"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] px-4 md:px-6 py-4 md:py-6 transition-colors duration-300 bg-transparent ${textColor}`}
      >
        <nav className="flex items-center justify-between relative">
          <a
            href="/"
            className={`font-light text-base md:text-2xl tracking-tight transition-colors duration-300 w-[100px] md:w-auto`}
          >
            Omiya Clinic
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 transition-all duration-300 hover:opacity-70 group`}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[3px] w-10 md:w-[4.5rem]">
              <span
                className={`h-[1px] w-full transition-all duration-300 ${
                  isWellagingPage
                    ? "bg-black"
                    : isTreatmentExpanded
                      ? "bg-white"
                      : isInLightSection
                        ? "bg-black"
                        : "bg-white"
                }`}
              />
              <span
                className={`h-[1px] w-full transition-all duration-300 ${
                  isWellagingPage
                    ? "bg-black"
                    : isTreatmentExpanded
                      ? "bg-white"
                      : isInLightSection
                        ? "bg-black"
                        : "bg-white"
                }`}
              />
            </div>
            <span className="text-xs md:text-sm font-light tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
              Menu
            </span>
          </button>

          <a
            href="#follow"
            className={`text-[10px] md:text-base font-light tracking-[0.15em] uppercase hover:opacity-70 transition-all duration-300 flex items-center gap-1 whitespace-nowrap`}
          >
            Síguenos
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:w-[14px] md:h-[14px]"
            >
              <path
                d="M4 12L12 4M12 4H5.5M12 4V10.5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 h-[70vh] z-[250] bg-[#f5f5f0] transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black text-sm font-medium tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            CLOSE
          </button>
        </div>

        {/* Small image in top-left corner */}
        <div className="absolute top-8 left-8 w-52 h-64 z-10 overflow-hidden hidden sm:block">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`absolute inset-0 transition-all duration-700 ${
                hoveredItem === item.label ? "opacity-100 scale-110" : "opacity-0 scale-100"
              }`}
            >
              <img src={item.image || "/placeholder.svg"} alt={item.label} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-start justify-start sm:justify-center pt-8 px-4 sm:px-0">
            <nav className="flex flex-col items-start sm:items-center justify-start gap-2 md:gap-3 h-64">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-[32px] md:text-[54px] leading-[1.1] font-semibold uppercase tracking-tight transition-all duration-500 ${
                    hoveredItem === item.label ? "text-gray-400" : "text-black"
                  } ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : "0ms" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div
            className={`px-16 py-8 flex items-end justify-between transition-all duration-500 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
          >
            <div className="flex flex-col text-black text-xs font-bold tracking-wide">
              <span>By</span>
              <span>Antonieta Ortega M</span>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
