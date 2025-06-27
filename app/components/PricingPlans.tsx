"use client";
import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "LITE",
      price: 199,
      priceAnual: 2150,
      discount: "10%",
      description: "Ideal para negocios que quieren su primera presencia en línea.",
      features: [
        "Dominio personalizado (1 año)",
        "Correo corporativo básico (1 cuenta)",
        "Web profesional de hasta 3 secciones",
        "Certificado SSL incluido",
        "1 capacitación virtual de uso",
        "Soporte técnico básico mensual",
      ],
      color: "border-gray-300",
    },
    {
      name: "PYME PLUS",
      price: 299,
      priceAnual: 3160,
      discount: "12%",
      description: "Perfecto para pymes que necesitan más presencia, control y visibilidad.",
      features: [
        "Todo lo del plan LITE",
        "Hasta 6 secciones personalizadas",
        "SEO básico para Google",
        "Botón de WhatsApp y redes sociales integradas",
        "Newsletter editable (Mailchimp o Brevo)",
        "Estadísticas personalizadas con reportes mensuales",
      ],
      color: "border-blue-500",
      recommended: true,
    },
    {
      name: "POWER",
      price: 539,
      priceAnual: 5500,
      discount: "15%",
      description: "Para negocios que quieren escalar con tecnología y estrategia.",
      features: [
        "Todo lo del plan PYME PLUS",
        "CMS Autogestionable (WordPress o Headless)",
        "Email marketing (5,000 envíos/mes)",
        "SEO avanzado + Google Analytics",
        "Embudos de conversión automatizados",
        "Acompañamiento estratégico mensual",
      ],
      color: "border-yellow-500",
    },
  ];

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          Planes de Presencia Digital
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Escoge el plan que se adapte al nivel de tu negocio. Nosotros nos encargamos del resto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border-4 ${plan.color} rounded-2xl p-8 shadow-lg relative hover:shadow-2xl transition`}
            >
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-full shadow-md">
                  MÁS VENDIDO
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-lg text-gray-600 mb-2 italic">{plan.description}</p>
              <p className="text-4xl font-extrabold text-blue-600 mb-1">
                S/{plan.price} <span className="text-base font-medium text-gray-700">/mes</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Ahorra {plan.discount}</strong> – Pago anual: <span className="font-semibold">S/{plan.priceAnual}</span>
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/51999908810?text=Hola%20Ibarra%20Co%20Group,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition font-semibold"
              >
                Solicitar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
