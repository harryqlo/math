import React, { useEffect, useRef, useState } from 'react';
import { useDoubts } from '../hooks/useDoubts';
import Card from './ui/Card';
import Button from './ui/Button';
import MathInput from './ui/MathInput';
import LatexDisplay from './Latex';
import { ChatMessage } from '../types';
import { ICONS } from '../constants';

const DoubtsChatView: React.FC = () => {
  const { messages, loading, error, sendMessage } = useDoubts();
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submit = () => {
    if (loading || !input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isUser = message.role === 'user';
    return (
      <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xl p-3 rounded-lg shadow-sm ${isUser ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>
          <LatexDisplay as="div" className="text-left">{message.text}</LatexDisplay>
        </div>
      </div>
    );
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-primary">Chat de Dudas</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Consulta cualquier duda de forma natural.</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-800/50">
        <ChatBubble message={{ role: 'model', text: '¡Hola! ¿En qué puedo ayudarte hoy?' }} />
        {messages.map((m, i) => <ChatBubble key={i} message={m} />)}
        {loading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <MathInput value={input} onChange={setInput} onEnter={submit} placeholder="Escribe tu duda..." />
          <Button type="submit" disabled={loading || !input.trim()} icon={ICONS.send} aria-label="Enviar" />
        </form>
      </div>
    </Card>
  );
};

export default DoubtsChatView;
