const { DefaultAzureCredential } = require('@azure/identity');
const { OpenAIClient } = require('@azure/openai');
const axios = require('axios'); // Asegúrate de tener esto instalado

const endpoint = 'https://openai-ibarracogroup.openai.azure.com/';
const deploymentName = 'gpt-35-turbo';
const knowledgeUrl = 'https://ibarracostorage.blob.core.windows.net/ia-data/ibarraco-servicios.txt?sp=r&st=2025-06-18T18:59:57Z&se=2026-06-27T02:59:57Z&spr=https&sv=2024-11-04&sr=b&sig=hdULez2SfwHbDZRJm8gGAy6GP%2F5eL55K7RcqyM7eobY%3D';

module.exports = async function (context, req) {
  try {
    const { messages } = req.body;

    // 🔍 Obtener contenido del archivo .txt desde el blob
    const blobResponse = await axios.get(knowledgeUrl);
    const knowledgeText = blobResponse.data;

    // 🧠 Insertar el contexto como primer mensaje de tipo 'system'
    const fullMessages = [
      {
        role: 'system',
        content: `Eres un asesor digital experto de Ibarra Co Group. Usa este conocimiento base para responder de forma clara, profesional y precisa:\n\n${knowledgeText}`
      },
      ...messages
    ];

    // 💬 Generar respuesta con Azure OpenAI
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
