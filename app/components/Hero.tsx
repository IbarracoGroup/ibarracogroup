'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/hero-bg.jpg"
          alt="Fondo hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido alineado tipo Globant */}
      <div className="relative z-10 w-full max-w-7xl px-6 mx-auto flex flex-col items-center justify-between gap-6">

        {/* Texto alineado a la izquierda */}
        <motion.div
          className="text-center max-w-2xl ml-4 md:ml-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm md:text-base uppercase tracking-wide text-gray-200 mb-3">
            Empresa de consultoría digital
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Impulsamos tu <br /> transformación digital
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Más que tecnología: soluciones, visión estratégica y resultados sostenibles.
          </p>
        </motion.div>

        {/* Botón alineado a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={scrollToForm}
            className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-4 text-lg rounded font-bold transition-transform transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </button>
        </motion.div>
      </div>
    </section>
  )
}
