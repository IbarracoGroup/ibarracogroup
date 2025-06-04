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
      className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/hero-bg.jpg" // Usa aquí tu imagen real de portada
          alt="Ciudad digital"
          className="w-full h-full object-cover"
        />
        {/* Superposición oscura */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="uppercase text-gray-300 tracking-wider text-sm md:text-base mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Empresa de consultoría digital
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Impulsamos tu <br />
          transformación digital
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
          className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-3 rounded transition"
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
