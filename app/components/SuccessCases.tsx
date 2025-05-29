// app/components/SuccessCases.tsx

export default function SuccessCases() {
  const cases = [
    {
      title: 'Transformación Digital para Retail',
      description: 'Automatizamos los procesos de ventas y stock en más de 50 tiendas con Power Platform.',
      image: '/assets/images/caso1.jpg'
    },
    {
      title: 'CRM Inteligente para Servicios',
      description: 'Diseñamos una solución low-code de atención al cliente con integración a Outlook y Planner.',
      image: '/assets/images/caso2.jpg'
    },
    {
      title: 'Control Financiero en Tiempo Real',
      description: 'Implementamos dashboards con Power BI y Azure SQL que redujeron el 70% de reportes manuales.',
      image: '/assets/images/caso3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="casos">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Casos de Éxito</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}