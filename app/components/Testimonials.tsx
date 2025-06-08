'use client'

export default function Testimonials() {
  const testimonios = [
    {
      nombre: 'Carlos',
      cargo: 'Gerente General, SAC',
      mensaje:
        'Gracias al equipo de Ibarra Co Group hemos automatizado procesos críticos en RRHH y ventas. ¡Gran acompañamiento y resultados!',
    },
    {
      nombre: 'Ana',
      cargo: 'CEO',
      mensaje:
        'Nos ayudaron desde la planificación digital hasta la puesta en producción de nuestras aplicaciones. 100% recomendados.',
    },
    {
      nombre: 'Fernando',
      cargo: 'Director TI, Perú',
      mensaje:
        'La integración con Microsoft 365 y Power Platform fue clave para nuestra evolución digital. Profesionales serios y apasionados.',
    },
  ]

  return (
    <section id="testimonios" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Testimonios</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <p className="italic text-gray-600 mb-4">"{t.mensaje}"</p>
              <h4 className="font-bold text-gray-800">{t.nombre}</h4>
              <small className="text-sm text-gray-500">{t.cargo}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
