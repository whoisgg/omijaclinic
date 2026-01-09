"use client"

import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden">
            <Image
              src="/images/screenshot-202025-12-24-20100619.png"
              alt="Dra. Antonieta Ortega"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-thin leading-tight uppercase text-gray-900">
              ¿Te gustaría conversar?
            </h2>

            <p className="text-xl md:text-2xl font-serif text-gray-600 leading-relaxed font-light">
              Siempre estoy abierta a nuevas ideas, proyectos y colaboraciones alineadas con una visión consciente del
              bienestar.
            </p>

            <a
              href="mailto:doctora@antonietaortega.cl"
              className="text-2xl md:text-3xl font-thin text-gray-900 hover:text-gray-600 transition-colors"
            >
              doctora@antonietaortega.cl
            </a>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <a
                href="https://instagram.com/dra.antonietaortegamunoz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-600" />
              </a>

              <a
                href="https://facebook.com/dra.antonietaortega"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
