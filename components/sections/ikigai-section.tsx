"use client"

export default function IkigaiSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-4">Mi Ikigai</h2>
          <div className="w-20 h-[1px] bg-gray-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-gray-900">
              Busco acompañar a la mujer adulta en su proceso de envejecimiento, promoviendo el bienestar integral y la
              educación como caminos para fomentar armonía y comunidad.
            </p>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <img src="/serene-woman-meditating-wellness-harmony.jpg" alt="Bienestar integral" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
