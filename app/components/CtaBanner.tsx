'use client'

export default function CtaBanner() {
  const mensajeWhatsApp = encodeURIComponent(
    "Hola, estoy interesado en transformar mi empresa con tecnología, estrategia y talento. ¿Podemos conversar?"
  )
  const enlaceWhatsApp = `https://wa.me/51999908810?text=${mensajeWhatsApp}`

  return (
    <section className="bg-[#bfa173] text-white py-20 px-6 text-center relative overflow-hidden">
      {/* Fondo decorativo opcional */}
      <div className="absolute inset-0 bg-[url('/fondo-patron.png')] opacity-5 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          ¿Listo para transformar tu negocio?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90 font-light">
          Más que consultoría digital: integramos soluciones tecnológicas, visión estratégica y profesionales clave para lograr resultados sostenibles.
        </p>
        <a
          href={enlaceWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#bfa173] font-bold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300 text-lg"
        >
          Contáctanos ahora por WhatsApp
        </a>
      </div>
    </section>
  )
}


