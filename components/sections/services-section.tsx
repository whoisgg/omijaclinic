export default function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16 text-center">Nuestros Servicios</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Service 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Wellaging</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tratamientos personalizados para acompañar el proceso natural del envejecimiento con respeto y
              consciencia.
            </p>
          </div>

          {/* Service 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Medicina Estética</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Procedimientos mínimamente invasivos para realzar tu belleza natural de forma armoniosa.
            </p>
          </div>

          {/* Service 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Bienestar Integral</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enfoque holístico que integra salud física, mental y emocional en un plan personalizado.
            </p>
          </div>

          {/* Service 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Ginecología</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cuidado integral de la salud femenina en todas las etapas de la vida.
            </p>
          </div>

          {/* Service 5 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Tratamientos Faciales</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cuidado especializado del rostro con técnicas avanzadas y productos de alta calidad.
            </p>
          </div>

          {/* Service 6 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Consulta Personalizada</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Evaluación completa para diseñar un plan de tratamiento adaptado a tus necesidades únicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
