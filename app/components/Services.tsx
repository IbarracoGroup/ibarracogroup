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
      className="bg-gray-50 py-20 px-4 text-gray-800"
    >

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Soluciones inteligentes y talento especializado para que tu empresa crezca con agilidad, eficiencia y enfoque en el futuro.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-sm text-gray-800 p-6 rounded-xl border border-blue-200 shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{servicio.titulo}</h3>
              <p className="text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
