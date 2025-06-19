require('dotenv').config(); // ← Asegúrate de tener esto arriba del todo
const { DefaultAzureCredential } = require('@azure/identity');
const { OpenAIClient } = require('@azure/openai');
const axios = require('axios');

const endpoint = 'https://openai-ibarracogroup.openai.azure.com/';
const deploymentName = 'gpt-35-turbo';
const knowledgeUrl = process.env.KNOWLEDGE_URL; // ← 🔐 usa variable desde .env.local

module.exports = async function (context, req) {
  try {
    const { messages } = req.body;

    // 🔍 Cargar contenido del archivo .txt (conocimiento)
    const blobResponse = await axios.get(knowledgeUrl);
    const knowledgeText = blobResponse.data;

    // ✅ Verificar que se cargó correctamente el contenido
    context.log("📘 Texto cargado desde el blob:");
    context.log(knowledgeText.slice(0, 200)); // Solo muestra primeros 200 caracteres

    // 🧠 Insertar el conocimiento como contexto inicial
    const fullMessages = [
      {
        role: 'system',
        content: `Eres un asesor digital experto de Ibarra Co Group. Usa este conocimiento base para responder de forma clara, profesional y precisa:\n\n${knowledgeText}`
      },
      ...messages
    ];

    // 🧠 Obtener respuesta desde Azure OpenAI
    const credential = new DefaultAzureCredential();
    const client = new OpenAIClient(endpoint, credential);

    const response = await client.getChatCompletions(deploymentName, fullMessages, {
      maxTokens: 1000,
      temperature: 0.7,
    });

    const reply = response.choices?.[0]?.message?.content || 'Lo siento, no entendí eso.';
    context.res = {
      status: 200,
      body: { reply }
    };
  } catch (err) {
    context.log('❌ Error en chatIA:', err.message || err);
    context.res = {
      status: 500,
      body: { error: 'Error interno en el servidor' }
    };
  }
};
