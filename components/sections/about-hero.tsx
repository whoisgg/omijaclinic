"use client"

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/professional-female-doctor-in-white-coat-smiling-c.jpg" alt="Dra. Antonieta Ortega" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">Acerca de</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed">
            Por Dra. Antonieta Ortega
          </p>
        </div>
      </div>
    </section>
  )
}
