import { useState } from 'react';
import { ChatMessage } from '../types';

export const useDoubts = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (prompt: string) => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    const userMessage: ChatMessage = { role: 'user', text: prompt };
    setMessages(prev => [...prev, userMessage]);
    try {
      const response = await fetch('/.netlify/functions/doubts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        const errData = await response.json().catch(() => ({ error: `Request failed with status ${response.status}` }));
        throw new Error(errData.error || `Request failed with status ${response.status}`);
      }
      const result = await response.json();
      const modelResponse: ChatMessage = { role: 'model', text: result.text };
      setMessages(prev => [...prev, modelResponse]);
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'Ocurrió un error desconocido.';
      setError(errorMessage);
      setMessages(prev => [...prev, { role: 'model', text: `Lo siento, no pude procesar tu solicitud. ${errorMessage}` }]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, error, sendMessage };
};
