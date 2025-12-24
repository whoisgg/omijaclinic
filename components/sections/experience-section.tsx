"use client"

export default function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#f5f5f0]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-4">Experiencia</h2>
          <div className="w-20 h-[1px] bg-gray-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Formación</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Cirujano Dentista egresada de la Universidad de los Andes con especialización en Endodoncia y
                Armonización Orofacial.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Enfoque</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Mi práctica integra técnicas avanzadas de odontología estética con un enfoque holístico en el bienestar
                facial y el envejecimiento saludable.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] overflow-hidden rounded-lg">
            <img src="/professional-dental-clinic-interior-modern-equipme.jpg" alt="Clínica profesional" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
