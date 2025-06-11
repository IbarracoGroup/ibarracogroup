const { app } = require('@azure/functions');
const { AzureKeyCredential } = require('@azure/openai');

const endpoint = 'https://openai-ibarracogroup.openai.azure.com/';
const apiKey = '4vpn8equ1FhzSuEo96a7mcVFlbnG0uBvrhmi5rdCpvvVsEKLobegJQQJ99BFACYeBjFXJ3w3AAABACOGwnDj'; // Usa una sola (Clave 1 o 2)

app.http('chatIA', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, context) => {
    const { OpenAIClient } = require('@azure/openai');
    const { messages } = await req.json();

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));
    try {
      const response = await client.getChatCompletions('gpt-35-turbo', messages, {
        maxTokens: 1000,
        temperature: 0.7
      });

      const reply = response.choices?.[0]?.message?.content || 'Lo siento, no entendí eso.';
      return { body: JSON.stringify({ reply }) };
    } catch (err) {
      context.log('❌ Error:', err.message || err);
      return {
        status: 500,
        body: JSON.stringify({ error: 'Error interno en el servidor' })
      };
    }
  }
});
