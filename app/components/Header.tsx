'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-black text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold tracking-wide">
          <img
            src="/assets/images/logo.png"
            alt="Logo Ibarra Co Group"
            className="h-8 w-auto"
          />
          <span>Ibarra Co Group</span>
        </Link>

        {/* Menú grande */}
        <nav className="hidden md:flex space-x-8 font-semibold text-sm items-center">
          <a href="#inicio" className="hover:text-lime-500 transition">Inicio</a>
          <a href="#servicios" className="hover:text-lime-500 transition">Servicios</a>
          <a href="#portafolio" className="hover:text-lime-500 transition">Portafolio</a>
          <a href="#formulario" className="hover:text-lime-500 transition">Contáctanos</a>
        </nav>

        {/* Redes sociales */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f hover:text-lime-500 transition"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram hover:text-lime-500 transition"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in hover:text-lime-500 transition"></i>
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl focus:outline-none"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-black text-white px-6 pb-4 space-y-3 text-center font-medium">
          <a href="#inicio" className="block hover:text-lime-500">Inicio</a>
          <a href="#servicios" className="block hover:text-lime-500">Servicios</a>
          <a href="#portafolio" className="block hover:text-lime-500">Portafolio</a>
          <a href="#formulario" className="block hover:text-lime-500">Contáctanos</a>
        </nav>
      )}
    </header>
  )
}
