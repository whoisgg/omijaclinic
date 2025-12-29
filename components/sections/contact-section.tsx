"use client"

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">Conectemos</h2>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Siempre abierta a nuevas oportunidades, colaboraciones y conversaciones sobre bienestar y estética
              consciente.
            </p>

            <a
              href="mailto:antonietaortegam@gmail.com"
              className="inline-flex items-center gap-2 text-xl md:text-2xl text-gray-900 hover:text-gray-600 transition-colors group"
            >
              doctora@antonietaortega.cl
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right side - Links grid */}
          <div>
         

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://instagram.com/omiyaclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 rounded-lg p-6 hover:border-gray-900 transition-colors group"
              >
                <div className="text-xl font-light text-gray-900 mb-2">Instagram</div>
                <div className="text-gray-600">@dra.antonietaortegamunoz</div>
              </a>

              <div className="border border-gray-300 rounded-lg p-6">
                <div className="text-xl font-light text-gray-900 mb-2">WhatsApp</div>
                <div className="text-gray-600">+56 9 8464 4659</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
