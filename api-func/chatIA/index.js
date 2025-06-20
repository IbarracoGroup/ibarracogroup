require('dotenv').config(); 
const { DefaultAzureCredential } = require('@azure/identity');
const { OpenAIClient } = require('@azure/openai');
const axios = require('axios');

const endpoint = 'https://openai-ibarracogroup.openai.azure.com/';
const deploymentName = 'gpt-35-turbo';

// 🔐 URL directa para depuración
const knowledgeUrl = "https://ibarracostorage.blob.core.windows.net/ia-data/ibarraco-servicios.txt?sp=r&st=2025-06-20T17:24:35Z&se=2025-07-21T01:24:35Z&spr=https&sv=2024-11-04&sr=b&sig=Lob1%2Fu6czkD6BAvvDYUJsL9L%2FFpQeuZUaDp%2F8QOVPwg%3D";

module.exports = async function (context, req) {
  try {
    // ✅ Validación de mensajes
    let messages = [];

    if (req.body && Array.isArray(req.body.messages)) {
      messages = req.body.messages;
    } else {
      context.log("❌ Entrada inválida: req.body.messages está vacío o mal formado.");
      context.res = {
        status: 400,
        body: { error: 'Formato inválido. Debe enviar un array "messages".' }
      };
      return;
    }

    context.log("📎 KNOWLEDGE_URL utilizada:", knowledgeUrl);

    const blobResponse = await axios.get(knowledgeUrl);
    const knowledgeText = blobResponse.data;

    context.log("📘 Texto cargado desde el blob:");
    context.log(knowledgeText.slice(0, 200));

    const fullMessages = [
      {
        role: 'system',
        content: `Eres un asesor digital experto de Ibarra Co Group. Usa este conocimiento base para responder de forma clara, profesional y precisa:\n\n${knowledgeText}`
      },
      ...messages
    ];

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
