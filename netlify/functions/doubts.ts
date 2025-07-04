import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

interface DoubtRequestBody {
  prompt: string;
}

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured on server.' }) };
  }

  try {
    const body: DoubtRequestBody = JSON.parse(event.body || '{}');
    const { prompt } = body;
    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Prompt is required.' }) };
    }
    if (prompt.length > 500) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Prompt is too long.' }) };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: [{ text: prompt }],
      config: {
        systemInstruction:
          'Eres un asistente conversacional especializado en matemáticas. ' +
          'Respondes exclusivamente preguntas y dudas sobre conceptos, ejercicios y temas matemáticos. ' +
          'Si el usuario plantea algo fuera del ámbito matemático, indícale amablemente que solo manejas dudas de matemáticas y pide que reformule su consulta.',
      },
    });

    const text = response.text;
    return {
      statusCode: 200,
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (e) {
    console.error('Error calling Gemini API:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { statusCode: 500, body: JSON.stringify({ error: `Error processing request: ${errorMessage}` }) };
  }
};
