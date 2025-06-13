const { DefaultAzureCredential } = require('@azure/identity');
const { OpenAIClient } = require('@azure/openai');

const endpoint = 'https://openai-ibarracogroup.openai.azure.com/';
const deploymentName = 'gpt-35-turbo';

module.exports = async function (context, req) {
  try {
    const { messages } = req.body;

    const credential = new DefaultAzureCredential();
    const client = new OpenAIClient(endpoint, credential);

    const response = await client.getChatCompletions(deploymentName, messages, {
      maxTokens: 1000,
      temperature: 0.7,
    });

    const reply = response.choices?.[0]?.message?.content || 'Lo siento, no entendí eso.';
    context.res = {
      status: 200,
      body: { reply }
    };
  } catch (err) {
    context.log('❌ Error en chatIA:', err);
    context.res = {
      status: 500,
      body: { error: 'Error interno en el servidor' }
    };
  }
};
