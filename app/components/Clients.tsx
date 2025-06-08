// app/components/Clients.tsx
'use client'

export default function Clients() {
  const logos = [
    '/assets/images/logo1.png',
    '/assets/images/logo2.png',
    '/assets/images/logo3.png',
    '/assets/images/logo4.png',
  ]

  return (
    <section id="clientes" className="bg-[#f0f2f5] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Empresas que confían en nosotros
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Cliente ${index + 1}`}
              className="h-16 grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
