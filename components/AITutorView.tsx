import React, { useState, useRef, useEffect } from 'react';
import { useAITutor } from '../hooks/useAITutor';
import { ICONS } from '../constants';
import Card from './ui/Card';
import Button from './ui/Button';
import LatexDisplay from './Latex';
import { ChatMessage } from '../types';
import MathInput from './ui/MathInput';

const AITutorView: React.FC = () => {
    const { messages, loading, error, sendMessage } = useAITutor();
    const [input, setInput] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
    const submitMessage = () => {
        if (loading || (!input.trim() && !imageFile)) return;
        sendMessage(input, imageFile ?? undefined);
        setInput('');
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitMessage();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
        const isUser = message.role === 'user';
        return (
            <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xl p-3 rounded-lg shadow-sm ${isUser ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>
                    {message.image && <img src={message.image} alt="Adjunto de usuario" className="rounded-md mb-2 max-h-60" />}
                    <LatexDisplay as="div" className="text-left">{message.text}</LatexDisplay>
                </div>
            </div>
        );
    };

    return (
        <Card className="flex flex-col h-[calc(100vh-12rem)]">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-bold text-primary">Tutor con IA (Gemini)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Haz una pregunta o sube la foto de un ejercicio.</p>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-800/50">
                <ChatBubble message={{ role: 'model', text: "¡Hola! Soy tu tutor de IA. ¿En qué puedo ayudarte hoy con tus estudios de matemáticas?" }} />
                {messages.map((msg, index) => <ChatBubble key={index} message={msg} />)}
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
                 {imagePreview && (
                    <div className="mb-2 relative w-fit">
                        <img src={imagePreview} alt="Vista previa" className="max-h-24 rounded-md border border-slate-300" />
                        <button onClick={() => { setImageFile(null); setImagePreview(null); if(fileInputRef.current) fileInputRef.current.value = ''; }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg">&times;</button>
                    </div>
                 )}
                <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                    <Button type="button" variant="secondary" onClick={triggerFileSelect} icon={ICONS.upload} aria-label="Subir imagen" />
                    <MathInput
                        value={input}
                        onChange={setInput}
                        onEnter={submitMessage}
                        placeholder="Ingresa un problema..."
                    />
                    <Button type="submit" disabled={loading || (!input.trim() && !imageFile)} icon={ICONS.send} aria-label="Enviar mensaje" />
                </form>
            </div>
        </Card>
    );
};

export default AITutorView;