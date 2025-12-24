"use client"

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-4">Colaboraciones</h2>
          <div className="w-20 h-[1px] bg-gray-300" />
        </div>

        <div className="max-w-4xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-900 mb-12">
            Si tu marca resuena con esta propuesta y deseas explorar formas de colaboración, escríbeme a{" "}
            <a href="mailto:antonietaortegam@gmail.com" className="underline hover:text-gray-600 transition-colors">
              antonietaortegam@gmail.com
            </a>
          </p>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Será un placer conversar sobre ideas, propuestas y cómo construir juntas una experiencia que inspire y deje
            huella.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-3">Email</h3>
            <a
              href="mailto:antonietaortegam@gmail.com"
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              antonietaortegam@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-3">Instagram</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
            >
              @omiyaclinic
            </a>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-3">Ubicación</h3>
            <p className="text-lg text-gray-900">Santiago, Chile</p>
          </div>
        </div>
      </div>
    </section>
  )
}
