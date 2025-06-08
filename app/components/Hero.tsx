'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white"
    >
      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Capa oscura para mejorar contraste de texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 w-full max-w-7xl px-6 mx-auto flex flex-col items-center justify-between gap-6">
        {/* Texto alineado tipo Globant */}
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
            Transformamos empresas con <span className="text-green-400">tecnología</span>, estrategia y talento
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Más que consultoría digital: integramos soluciones tecnológicas, visión estratégica y profesionales clave para lograr resultados sostenibles.
          </p>
        </motion.div>

        {/* Botón de contacto */}
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
