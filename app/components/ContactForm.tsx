'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess(false)
    setError(null)
    setLoading(true)

    const data = new FormData(e.currentTarget)

    const payload = {
      nombre: data.get('nombre'),
      apellido: data.get('apellido'),
      email: data.get('email'),
      empresa: data.get('empresa'),
      pais: data.get('pais'),
      mensaje: data.get('mensaje'),
      boletin: data.get('boletin') === 'on'
    }

    try {
      const res = await fetch('https://ibarracogroup-api.azurewebsites.net/api/registrarformulario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await res.json()

      if (result.ok) {
        setSuccess(true)
        const form = e.target as HTMLFormElement
        form.reset()
        setTimeout(() => setSuccess(false), 5000)
      } else {
        throw new Error(result.error || 'Error al enviar')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10">
        {/* Título izquierdo */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 leading-tight mb-4">
            Lleva tu negocio al <span className="text-white">futuro</span>
          </h2>
          <p className="text-lg text-black">
            Conéctate con nosotros y descubre cómo acelerar tu transformación digital con tecnología y talento.
          </p>
        </div>

        {/* Formulario derecho */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="nombre" placeholder="Nombre" required className="form-input" />
            <input type="text" name="apellido" placeholder="Apellido" required className="form-input" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="email" name="email" placeholder="Email" required className="form-input" />
            <input type="text" name="empresa" placeholder="Empresa" required className="form-input" />
          </div>
          <select name="pais" required className="form-input">
            <option value="">Selecciona tu país...</option>
            <option value="Perú">Perú</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Otro">Otro</option>
          </select>
          <textarea name="mensaje" placeholder="Mensaje" required className="form-input h-32 resize-none" />

          <div className="flex items-start space-x-3">
            <input type="checkbox" name="boletin" id="boletin" className="mt-1" />
            <label htmlFor="boletin" className="text-sm text-black">
              Me gustaría recibir el boletín con recursos útiles y actualizaciones.
            </label>
          </div>

          <p className="text-xs text-gray-300">
            Al completar este formulario, aceptas nuestra{' '}
            <a href="/politica.html" target="_blank" className="text-lime-400 underline">
              política de confidencialidad
            </a>.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-lime-400 text-black font-bold px-8 py-3 rounded-md hover:bg-lime-300 transition"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

          {success && <p className="text-green-400 text-sm mt-3">✅ ¡Formulario enviado correctamente!</p>}
          {error && <p className="text-red-400 text-sm mt-3">⚠️ {error}</p>}
        </form>
      </div>
    </section>
  )
}
