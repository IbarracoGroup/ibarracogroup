// app/components/CtaBanner.tsx

export default function CtaBanner() {
  return (
    <section className="bg-secondary text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
      <p className="mb-6">Conversemos sobre tus objetivos y cómo podemos ayudarte a lograr resultados sostenibles.</p>
      <a
        href="https://wa.me/51999908810"
        className="bg-black hover:bg-gray-800 transition px-6 py-3 text-white rounded-lg font-semibold"
      >
        Contáctanos vía WhatsApp
      </a>
    </section>
  )
}
