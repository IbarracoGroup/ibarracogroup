// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
     /*  className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"*/
      className="relative w-full bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      {/* Capa oscura semitransparente */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido animado con entrada elegante */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-300 mb-2"
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
          Impulsamos tu <br /> transformación digital
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Más que tecnología: soluciones, visión estratégica y resultados sostenibles.
        </motion.p>

        <motion.a
          href="https://wa.me/51999908810"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-black px-6 py-3 rounded font-semibold hover:bg-lime-400 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Contáctanos en WhatsApp
        </motion.a>
      </motion.div>
    </section>
  )
}
