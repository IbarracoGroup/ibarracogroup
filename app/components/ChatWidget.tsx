'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: '¡Hola! Soy tu asesor digital. ¿En qué puedo ayudarte hoy?' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chatIA', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: '❌ Hubo un error. Intenta de nuevo.' }])
    }
    setLoading(false)
  }

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="bg-lime-500 text-black px-4 py-2 rounded-full shadow-lg">
          💬 Asesor IA
        </button>
      )}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[450px]">
          <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
            <span>Asesor IA</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-800'}`}>
                <p>{m.content}</p>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 px-2 py-1 border rounded text-black"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe algo..."
              disabled={loading}
            />
            <button onClick={sendMessage} className="text-sm bg-lime-500 px-3 py-1 rounded text-black">
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
