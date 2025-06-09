'use client'

import { useState } from 'react'
import { CheckCircle, AlertTriangle, Loader2 } from 'lucide-react'

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
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-lime-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white rounded-3xl shadow-2xl p-12">
        {/* Título izquierdo */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-lime-600 leading-tight mb-6">
            Lleva tu negocio al <span className="text-gray-900">futuro</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Conéctate con nosotros y descubre cómo acelerar tu transformación digital con tecnología y talento.
          </p>
        </div>

        {/* Formulario derecho */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="text" name="nombre" placeholder="Nombre" required className="form-input rounded-xl border border-gray-300 px-4 py-3" />
            <input type="text" name="apellido" placeholder="Apellido" required className="form-input rounded-xl border border-gray-300 px-4 py-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="email" name="email" placeholder="Email corporativo" required className="form-input rounded-xl border border-gray-300 px-4 py-3" />
            <input type="text" name="empresa" placeholder="Empresa o marca" required className="form-input rounded-xl border border-gray-300 px-4 py-3" />
          </div>
          <select name="pais" required className="form-select rounded-xl border border-gray-300 px-4 py-3">
            <option value="">Selecciona tu país...</option>
            <option value="Perú">Perú</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Otro">Otro</option>
          </select>
          <textarea name="mensaje" placeholder="Cuéntanos en qué podemos ayudarte..." required className="form-textarea rounded-xl border border-gray-300 px-4 py-3 h-32 resize-none" />

          <div className="flex items-start gap-3">
            <input type="checkbox" name="boletin" id="boletin" className="mt-1" />
            <label htmlFor="boletin" className="text-sm text-gray-700">
              Me gustaría recibir el boletín con recursos útiles y actualizaciones.
            </label>
          </div>

          <p className="text-xs text-gray-500">
            Al completar este formulario, aceptas nuestra{' '}
            <a href="/politica.html" target="_blank" className="text-lime-600 underline">
              política de confidencialidad
            </a>.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="animate-spin w-5 h-5" /> Enviando...</> : 'Enviar'}
          </button>

          {success && (
            <p className="text-green-600 text-sm flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> ¡Formulario enviado correctamente!
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> {error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
