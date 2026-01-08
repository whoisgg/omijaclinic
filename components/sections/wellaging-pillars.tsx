"use client"

export default function WellagingPillars() {
  const pillars = [
    {
      title: "Conocimiento y Autoconciencia",
      description: "Comprender los cambios físicos, mentales y emocionales en cada etapa de la vida.",
      position: "top-left",
    },
    {
      title: "Salud Mental y Autoestima",
      description: "Fortalecer la confianza y el amor propio a lo largo del tiempo.",
      position: "top-right",
    },
    {
      title: "Bienestar Integral",
      description: "Promover hábitos saludables, cuidado físico y balance emocional.",
      position: "middle-left",
    },
    {
      title: "Conexión y Comunidad",
      description: "Fomentar relaciones significativas y un sentido de pertenencia que nutra la vida cotidiana.",
      position: "middle-right",
    },
    {
      title: "Cuidado Personal y Belleza Consciente",
      description: "Prevención y tratamientos estéticos mínimamente invasivos, respetando la naturalidad.",
      position: "bottom",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl tracking-tight">
            <span className="font-thin text-black">PILARES DEL </span>
            <span className="italic font-thin text-[#C5A059]">Wellaging</span>
          </h2>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mt-6 font-thin">
            WELLAGING FRAMEWORK
          </p>
        </div>

        {/* Desktop Layout - Lotus Pattern */}
        <div className="hidden md:block relative max-w-7xl mx-auto">
          {/* Central Circle with Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-48 h-48 rounded-full bg-black flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-[10px] uppercase tracking-[0.2em] mb-2 opacity-80">Dra.</div>
                <div className="text-sm uppercase tracking-[0.15em] leading-tight">
                  ANTONIETA
                  <br />
                  ORTEGA
                  <br />
                  MUÑOZ
                </div>
              </div>
            </div>
          </div>

          {/* Lotus Petals - SVG Lines */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
            viewBox="0 0 1200 800"
            style={{ maxWidth: "1200px", maxHeight: "800px" }}
          >
            {/* Top Left Petal */}
            <path d="M 600 400 L 200 150" stroke="currentColor" strokeWidth="1" className="text-gray-300" />
            {/* Top Right Petal */}
            <path d="M 600 400 L 1000 150" stroke="currentColor" strokeWidth="1" className="text-gray-300" />
            {/* Middle Left Petal */}
            <path d="M 600 400 L 100 400" stroke="currentColor" strokeWidth="1" className="text-gray-300" />
            {/* Middle Right Petal */}
            <path d="M 600 400 L 1100 400" stroke="currentColor" strokeWidth="1" className="text-gray-300" />
            {/* Bottom Petal */}
            <path d="M 600 400 L 600 700" stroke="currentColor" strokeWidth="1" className="text-gray-300" />
          </svg>

          {/* Pillars positioned around the center */}
          <div className="relative" style={{ minHeight: "800px" }}>
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-[280px] text-left">
              <h3 className="text-xl font-thin mb-3 text-balance">{pillars[0].title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-balance font-thin">{pillars[0].description}</p>
            </div>

            {/* Top Right */}
            <div className="absolute top-0 right-0 w-[280px] text-right">
              <h3 className="text-xl font-thin mb-3 text-balance">{pillars[1].title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-balance font-thin">{pillars[1].description}</p>
            </div>

            {/* Middle Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[280px] text-left">
              <h3 className="text-xl font-thin mb-3 text-balance">{pillars[2].title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-balance font-thin">{pillars[2].description}</p>
            </div>

            {/* Middle Right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[280px] text-right">
              <h3 className="text-xl font-thin mb-3 text-balance">{pillars[3].title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-balance font-thin">{pillars[3].description}</p>
            </div>

            {/* Bottom Center */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] text-center">
              <h3 className="text-xl font-thin mb-3 text-balance">{pillars[4].title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-balance font-thin">{pillars[4].description}</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-thin mb-3 text-balance">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-balance font-thin">{pillar.description}</p>
            </div>
          ))}

          {/* Mobile Center Logo */}
          <div className="flex justify-center mt-12">
            <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-[8px] uppercase tracking-[0.2em] mb-1 opacity-80">Dra.</div>
                <div className="text-[10px] uppercase tracking-[0.15em] leading-tight">
                  ANTONIETA
                  <br />
                  ORTEGA
                  <br />
                  MUÑOZ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
