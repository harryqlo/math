import { useState } from 'react';
import { ChatMessage } from '../types';
import { fileToBase64, getMimeType } from '../utils/file';

export const useAITutor = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (prompt: string, imageFile?: File) => {
    if (!prompt && !imageFile) return;

    setLoading(true);
    setError(null);

    const userMessage: ChatMessage = { role: 'user', text: prompt };
    if (imageFile) {
      userMessage.image = URL.createObjectURL(imageFile);
    }
    setMessages(prev => [...prev, userMessage]);

    try {
      const body: { prompt: string; image?: { base64: string; mimeType: string; } } = { prompt };

      if (imageFile) {
        const base64Image = await fileToBase64(imageFile);
        const mimeType = getMimeType(imageFile);
        body.image = {
          base64: base64Image,
          mimeType: mimeType
        };
      }

      const response = await fetch('/.netlify/functions/tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `Request failed with status ${response.status}` }));
        throw new Error(errorData.error || `Request failed with status ${response.status}`);
      }

      const result = await response.json();
      const modelResponse: ChatMessage = { role: 'model', text: result.text };
      setMessages(prev => [...prev, modelResponse]);

    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'Ocurrió un error desconocido.';
      setError(`Error al contactar al tutor de IA: ${errorMessage}`);
      setMessages(prev => [...prev, { role: 'model', text: `Lo siento, no pude procesar tu solicitud. ${errorMessage}` }]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, error, sendMessage };
};