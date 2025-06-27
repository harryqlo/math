import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

interface TutorRequestBody {
    prompt: string;
    topic: string;
    image?: {
        base64: string;
        mimeType: string;
    };
}

// Using a simplified event type that is compatible with Netlify's handler signature.
export const handler = async (event: { httpMethod: string; body: string | null; }) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API key not configured on server.' }),
        };
    }

    try {
        const body: TutorRequestBody = JSON.parse(event.body || '{}');
        const { prompt, topic, image } = body;

        if (!prompt && !image) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Prompt or image is required.' }),
            };
        }
        if (prompt && prompt.length > 500) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Prompt is too long.' }),
            };
        }

        const ai = new GoogleGenAI({ apiKey });

        const parts: any[] = [];
        if (image) {
            parts.push({
                inlineData: {
                    mimeType: image.mimeType,
                    data: image.base64,
                },
            });
        }
        if (prompt) {
            parts.push({ text: prompt });
        }
        
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-preview-04-17',
            contents: { parts },
            config: {
                systemInstruction: `Eres un amigable y experto tutor de matemáticas especializado en ${topic}. Tu objetivo es ayudar a los estudiantes a entender conceptos, no solo darles la respuesta. Explica los pasos de forma clara y pedagógica. Utiliza LaTeX para las fórmulas, por ejemplo, para escribir $x^2 + 5$, usa \`$x^2 + 5$\`.`,
            }
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
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error processing request: ${errorMessage}` }),
        };
    }
};
