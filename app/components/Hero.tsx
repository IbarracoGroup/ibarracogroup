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
      className="relative w-screen h-[90vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/hero-bg.jpg"
          alt="Fondo hero"
          className="w-full h-full object-cover"
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido animado */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p
          className="text-base md:text-lg uppercase tracking-widest text-gray-300 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Empresa de consultoría digital
        </motion.p>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Impulsamos tu <br /> transformación digital
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Más que tecnología: soluciones, visión estratégica y resultados sostenibles.
        </motion.p>

        <motion.button
          onClick={scrollToForm}
          className="inline-block bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded font-semibold transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Contáctanos
        </motion.button>
      </motion.div>
    </section>
  )
}
