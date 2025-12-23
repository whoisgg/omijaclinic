"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems = [
    { label: "OUR SHOP", href: "#shop", image: "/luxury-fashion-products.jpg" },
    { label: "HOME", href: "#home", image: "/modern-interior-home.jpg" },
    { label: "ABOUT US", href: "#about", image: "/team-portrait-professional.jpg" },
    { label: "CONTACT", href: "#contact", image: "/contact-workspace.jpg" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-transparent">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <a href="/" className="text-white font-light text-xl tracking-tight">
            Omiya Clinic
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 text-white transition-all duration-300 hover:opacity-70"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[3px] w-10">
              <span className="h-[1px] bg-white w-full transition-all duration-300" />
              <span className="h-[1px] bg-white w-full transition-all duration-300" />
            </div>
            <span className="text-sm font-light tracking-[0.2em] uppercase">Menu</span>
          </button>

          <a
            href="#follow"
            className="text-white text-sm font-light tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          >
            Follow us
          </a>
        </nav>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 h-[70vh] z-[100] bg-[#f5f5f0] transition-all duration-500 ${
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
        <div className="absolute top-8 left-8 w-52 h-64 z-10 overflow-hidden">
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
          {/* Navigation items centered */}
          <div className="flex-1 flex items-start justify-center pt-8">
            <nav className="flex flex-col items-start justify-start gap-3 h-64 ml-64">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-[54px] leading-[1.1] font-semibold uppercase tracking-tight transition-all duration-500 ${
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
