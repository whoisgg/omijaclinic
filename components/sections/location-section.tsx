"use client"

export default function LocationSection() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-tight text-foreground">
              Visítanos
            </h2>

            {/* Address & Contact in Two Columns */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-sm uppercase tracking-wider font-medium mb-4" style={{ color: "#D4AF37" }}>
                  Dirección
                </h3>
                <div className="text-foreground space-y-1">
                  <p>1-2-3 Sakuragi-cho, Omiya-ku</p>
                  <p>Saitama City, Saitama 330-0854</p>
                </div>
              </div>

              {/* Contact */}
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-sm uppercase tracking-wider font-medium mb-4" style={{ color: "#D4AF37" }}>
                  Contacto
                </h3>
                <div className="text-foreground space-y-2">
                  <p>048-123-4567</p>
                  <a href="mailto:info@omiyaclinic.jp" className="hover:opacity-70 transition-opacity block">
                    info@omiyaclinic.jp
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-sm uppercase tracking-wider font-medium mb-6" style={{ color: "#D4AF37" }}>
                Horario de Atención
              </h3>
              <div className="space-y-4 text-foreground">
                <div className="flex justify-between items-center">
                  <span>Lun - Vie</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <span>Sábado</span>
                  <span className="font-medium">09:00 - 13:00</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <span>Dom / Festivos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="relative h-[500px] lg:h-full min-h-[400px] rounded-lg overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.2784614287895!2d139.62406631525895!3d35.90609108014656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1b8c1b8c1b8%3A0x1b8c1b8c1b8c1b8c!2sOmiya%2C%20Saitama!5e0!3m2!1sen!2sjp!4v1704067200000!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Omiya Clinic Location"
            />
            <a
              href="https://www.google.com/maps/place/Omiya,+Saitama/@35.9060911,139.6240663,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow-lg text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors"
              style={{ color: "#D4AF37" }}
            >
              Abrir en Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
