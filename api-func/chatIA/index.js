const { app } = require('@azure/functions');
const { DefaultAzureCredential } = require('@azure/identity');
const { OpenAIClient } = require('@azure/openai');

const endpoint = 'https://openai-ibarracogroup.openai.azure.com/';
const deploymentName = 'gpt-35-turbo'; // Asegúrate de que esta sea la implementación exacta que creaste

app.http('chatIA', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, context) => {
    try {
      const { messages } = await req.json();

      const client = new OpenAIClient(endpoint, new DefaultAzureCredential());

      const response = await client.getChatCompletions(deploymentName, messages, {
        maxTokens: 1000,
        temperature: 0.7
      });

      const reply = response.choices?.[0]?.message?.content || 'Lo siento, no entendí eso.';

      return { body: JSON.stringify({ reply }) };
    } catch (err) {
      context.log('❌ Error en chatIA:', err);
      return {
        status: 500,
        body: JSON.stringify({ error: 'Error interno en el servidor' })
      };
    }
  }
});
