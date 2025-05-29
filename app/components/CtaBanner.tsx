// app/components/CtaBanner.tsx

export default function CtaBanner() {
  return (
    <section className="bg-[#bfa173] text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        ¿Listo para transformar tu negocio?
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Descubre cómo nuestra consultoría puede ayudarte a crecer con tecnología, estrategia y resultados sostenibles.
      </p>
      <a
        href="#formulario"
        className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
      >
        Contáctanos ahora
      </a>
    </section>
  )
}

