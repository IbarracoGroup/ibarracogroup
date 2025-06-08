// app/components/Portfolio.tsx
'use client'

import Image from 'next/image'

export default function Portfolio() {
  const proyectos = [
    {
      titulo: 'Página web de farmacia',
      url: '🌐 www.ibarracogroup.com',
      imagen: '/assets/images/portafolio1.jpg'
    },
    {
      titulo: 'Página web de clinica dental',
      url: '📊 www.ibarracogroup.com',
      imagen: '/assets/images/portafolio2.jpg'
    },
    {
      titulo: 'Página web de alimento para canes',
      url: '📰 www.ibarracogroup.com',
      imagen: '/assets/images/portafolio3.jpg'
    }
  ]

  return (
    <section id="portafolio" className="bg-[#f5f7fb] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-blue-600 font-semibold mb-1">Nuestros productos digitales</p>
            <h2 className="text-4xl font-bold text-gray-900">Portafolio</h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600 max-w-xl">
            Nuestros productos digitales están orientados a resolver necesidades reales de negocio, desde sistemas internos hasta posicionamiento y contenido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <p className="text-white font-bold">{proyecto.url}</p>
                <p className="text-white text-sm">{proyecto.titulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
