'use client'

export default function Services() {
  const servicios = [
    {
      titulo: 'Sistemas de Gestión a Medida',
      descripcion:
        'Diseñamos plataformas inteligentes para integrar y optimizar procesos clave como finanzas, RR.HH., ventas o logística.',
    },
    {
      titulo: 'Plataformas SaaS escalables',
      descripcion:
        'Creamos soluciones SaaS robustas y sostenibles con modelos de negocio recurrentes, listos para escalar.',
    },
    {
      titulo: 'MVPs para validar modelos de negocio',
      descripcion:
        'Desarrollamos productos mínimos viables listos para validar hipótesis de mercado rápidamente y con bajo riesgo.',
    },
    {
      titulo: 'Apps móviles con lógica de negocio',
      descripcion:
        'Aplicaciones conectadas a tus sistemas internos, optimizando la experiencia de tus usuarios y equipos.',
    },
    {
      titulo: 'Staffing Tecnológico Especializado',
      descripcion:
        'Integramos perfiles técnicos a tu equipo con agilidad, foco en resultados y alto estándar de calidad.',
    },
    {
      titulo: 'Reclutamiento de Talento Tecnológico y Comercial',
      descripcion:
        'Seleccionamos perfiles técnicos, vendedores y personal operativo que se alineen con tu cultura y objetivos de negocio.',
    },
    {
      titulo: 'Consultoría Estratégica en Transformación Digital',
      descripcion:
        'Acompañamos a tu equipo en la implementación de soluciones con mirada ágil, organizacional y orientada a resultados.',
    },
  ]

  return (
    <section
      id="servicios"
      className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-4 text-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary leading-snug">
          Soluciones inteligentes y talento especializado <br />
          <span className="text-secondary">
            para que tu empresa crezca con agilidad y visión digital
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-blue-800 transition">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="mt-12">
          <a
            href="#contacto"
            className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#a48c5a] transition"
          >
            Ver más soluciones → 
          </a>
        </div>
      </div>
    </section>
  )
}
