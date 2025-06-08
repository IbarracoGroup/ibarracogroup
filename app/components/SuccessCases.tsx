// app/components/SuccessCases.tsx
'use client'

export default function SuccessCases() {
  const cases = [
    {
      title: 'Transformación Digital en Retail',
      description: 'Automatización en 50 tiendas con Power Platform.',
      image: '/assets/images/caso1.jpg',
    },
    {
      title: 'CRM Inteligente para Servicios',
      description: 'Solución low-code conectada con Outlook y Planner.',
      image: '/assets/images/caso2.jpg',
    },
    {
      title: 'Control Financiero en Tiempo Real',
      description: 'Dashboards Power BI con reducción del 70% de reportes manuales.',
      image: '/assets/images/caso3.jpg',
    },
  ]

  return (
    <section id="casos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Casos de Éxito
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
