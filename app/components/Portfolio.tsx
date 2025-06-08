'use client'

import Image from 'next/image'

export default function Portfolio() {
  const proyectos = [
    {
      titulo: 'Página web de farmacia',
      url: '🌐 www.ibarracogroup.com',
      imagen: '/assets/images/portafolio1.png'
    },
    {
      titulo: 'Página web de clínica dental',
      url: '📊 www.ibarracogroup.com',
      imagen: '/assets/images/portafolio2.png'
    },
    {
      titulo: 'Página web de alimento para canes',
      url: '📰 www.ibarracogroup.com',
      imagen: '/assets/images/portafolio3.png'
    }
  ]

  return (
    <section id="portafolio" className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <p className="text-secondary font-semibold uppercase tracking-widest mb-2">
              Nuestros productos digitales
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Portafolio destacado
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600 max-w-xl text-md">
            Creamos soluciones que resuelven problemas reales: presencia digital, eficiencia operativa y experiencia de usuario.
          </p>
        </div>

        {/* Tarjetas de portafolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-bold text-sm">{proyecto.url}</p>
                <p className="text-white text-xs">{proyecto.titulo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#a48c5a] transition"
          >
            Ver más proyectos →
          </a>
        </div>
      </div>
    </section>
  )
}
