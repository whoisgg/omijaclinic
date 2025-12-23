"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocationSection() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">Visítanos</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Principal 123
                    <br />
                    Colonia Centro
                    <br />
                    Ciudad de México, 01000
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                  <a href="tel:+525555555555" className="text-muted-foreground hover:text-accent transition-colors">
                    +52 55 5555 5555
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:contacto@omiyaclinic.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contacto@omiyaclinic.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                    <p>Sábado: 10:00 AM - 3:00 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6873156545874!2d-99.16540132408639!3d19.432607981886176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAnge%CC%81l%20de%20la%20Independencia!5e0!3m2!1sen!2smx!4v1704067200000!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Omiya Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
