'use client'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51999908810" // 🔁 Reemplaza por tu número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
      aria-label="Chat por WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  )
}
