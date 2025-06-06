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
        if (form) form.reset()
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
    <section id="contacto" className="bg-[#020518] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Título */}
        <div>
          <h2 className="text-5xl font-bold text-lime-400 leading-tight mb-6">
            Lleva tu negocio<br />al futuro
          </h2>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="nombre" placeholder="Nombre" required
              className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none" />
            <input type="text" name="apellido" placeholder="Apellido" required
              className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="email" name="email" placeholder="Email" required
              className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none" />
            <input type="text" name="empresa" placeholder="Compañía" required
              className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none" />
          </div>
          <select name="pais" required
            className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none">
            <option value="">Selecciona tu país...</option>
            <option value="Perú">Perú</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Otro">Otro</option>
          </select>
          <textarea name="mensaje" placeholder="Mensaje" required
            className="w-full px-4 py-3 bg-white text-black rounded-md h-32 focus:outline-none"></textarea>

          <div className="flex items-start space-x-3">
            <input type="checkbox" name="boletin" id="boletin"
              className="mt-1" />
            <label htmlFor="boletin" className="text-sm leading-snug">
              Me gustaría registrarme con mi dirección de correo electrónico para recibir el boletín de Globant con actualizaciones, recursos valiosos y consejos útiles.
            </label>
          </div>

          <p className="text-sm">
            Al completar este formulario, aceptas que estás de acuerdo con la{' '}
            <a href="/politica.html" target="_blank" className="text-lime-400 underline">
              política de confidencialidad
            </a>.
          </p>

          <button type="submit" disabled={loading}
            className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-lime-300 transition duration-300">
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

          {success && <p className="text-green-400 text-sm">✅ ¡Formulario enviado correctamente!</p>}
          {error && <p className="text-red-400 text-sm">⚠️ {error}</p>}
        </form>
      </div>
    </section>
  )
}
