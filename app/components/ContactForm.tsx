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
        e.currentTarget.reset()
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
    <section className="contact-form" id="contacto">
      <h2>Lleva tu negocio al futuro</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="text" name="apellido" placeholder="Apellido" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="empresa" placeholder="Empresa" required />
        </div>
        <div className="form-group full">
          <select name="pais" required>
            <option value="">Selecciona tu país...</option>
            <option value="Perú">Perú</option>
            <option value="México">México</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form-group full">
          <textarea name="mensaje" placeholder="Mensaje" required></textarea>
        </div>
        <div className="form-check">
          <input type="checkbox" name="boletin" id="boletin" />
          <label htmlFor="boletin">
            Me gustaría registrarme con mi dirección de correo electrónico para recibir el boletín.
          </label>
        </div>
        <p className="politica">
          Al completar este formulario, aceptas nuestra{' '}
          <a href="/politica.html" target="_blank">Política de Confidencialidad</a>.
        </p>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {success && <p className="text-green-600 mt-3">✅ ¡Formulario enviado correctamente!</p>}
        {error && <p className="text-red-600 mt-3">⚠️ {error}</p>}
      </form>
    </section>
  )
}
