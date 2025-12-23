import Image from "next/image"

export default function FeaturedSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center bg-white py-12 md:py-20 lg:py-32">
      <div className="flex flex-1 flex-col justify-center text-left px-6 py-12 lg:py-0 lg:h-[800px] max-w-7xl mx-auto lg:ml-auto lg:mr-0 lg:pl-8">
        <h3 className="mb-4 uppercase text-sm tracking-wider">Doctora Antonieta Ortega</h3>
        <p className="mb-8 text-2xl lg:text-4xl leading-relaxed text-pretty">
          El wellaging es una forma consciente de vivir el paso del tiempo, priorizando la salud, el equilibrio y el
          bienestar integral por sobre la corrección o la perfección. Es acompañar el envejecimiento con respeto,
          naturalidad y cuidado, entendiendo que cada etapa de la vida merece atención y propósito.
        </p>
        <p className="mb-8 text-2xl lg:text-4xl leading-relaxed text-pretty">
          Este enfoque guía el trabajo de la Dra. Antonieta Ortega, quien integra su experiencia clínica con una mirada
          humana y personalizada para acompañar a la mujer en su bienestar a lo largo del tiempo.
        </p>
        <button className="w-fit cursor-pointer border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
          conoce mas
        </button>
      </div>
      <div className="h-[400px] flex-1 lg:h-[800px]">
        <Image
          src="/images/professional-portrait.jpg"
          alt="Professional portrait"
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
