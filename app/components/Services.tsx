'use client'

export default function Services() {
  const servicios = [
    {
      titulo: 'Sistemas Administrativos y Operativos Inteligentes',
      descripcion:
        'Diseñamos sistemas hechos a medida para optimizar tus procesos clave, integrando áreas como finanzas, RR.HH., ventas o logística.',
    },
    {
      titulo: 'Plataformas SaaS empresariales',
      descripcion:
        'Creamos plataformas escalables para ofrecer servicios digitales sostenibles, bajo modelos de negocio recurrentes y eficientes.',
    },
    {
      titulo: 'MVPs con Enfoque de Validación de Mercado',
      descripcion:
        'Creamos Productos Mínimos Viables (MVPs) funcionales para probar hipótesis de negocio con rapidez y bajo costo.',
    },
    {
      titulo: 'Aplicaciones Móviles con Lógica de Negocio',
      descripcion:
        'Desarrollamos aplicaciones móviles con lógica integrada a tus sistemas y procesos internos, listas para transformar la experiencia de usuarios y colaboradores.',
    },
    {
      titulo: 'Consultoría y acompañamiento estratégico',
      descripcion:
        'Te guiamos con una mirada integral y ágil para implementar soluciones de alto impacto, con foco en transformación digital y cultura organizacional.',
    },
    {
      titulo: 'Outsourcing Tecnológico Especializado',
      descripcion:
        'Incorporamos profesionales técnicos a tu equipo según tus necesidades, con enfoque en resultados, eficiencia y calidad en cada entrega.',
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
              className="bg-white p-6 rounded-xl border border-blue-200 shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105"
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
