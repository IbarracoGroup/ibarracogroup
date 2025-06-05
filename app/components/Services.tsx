'use client'

export default function Services() {
  const servicios = [
    {
      titulo: 'Sistemas administrativos y operativos a medida',
      descripcion:
        'Optimiza procesos internos, mejora el control y centraliza la información crítica de tu operación con soluciones hechas a tu medida.',
    },
    {
      titulo: 'Plataformas SaaS empresariales',
      descripcion:
        'Creamos plataformas escalables para ofrecer servicios digitales sostenibles, bajo modelos de negocio recurrentes y eficientes.',
    },
    {
      titulo: 'MVPs listos para validación con visión de negocio',
      descripcion:
        'Desarrollamos productos mínimos viables listos para testear en el mercado real, reduciendo riesgos y acelerando la validación.',
    },
    {
      titulo: 'Aplicaciones móviles con lógica integrada',
      descripcion:
        'Diseñamos apps que no solo lucen bien, sino que están integradas a flujos de negocio, sistemas existentes y visión estratégica.',
    },
    {
      titulo: 'Consultoría y acompañamiento estratégico',
      descripcion:
        'Te guiamos desde el diagnóstico hasta la implementación y mejora continua de soluciones tecnológicas y procesos.',
    },
    {
      titulo: 'Outsourcing',
      descripcion:
        'Sumamos talento técnico especializado a tu equipo bajo demanda, con foco en entregas, calidad y cumplimiento.',
    },
  ]

  return (
    <section id="servicios" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Servicios clave para tu empresa
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-blue-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{servicio.titulo}</h3>
              <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
