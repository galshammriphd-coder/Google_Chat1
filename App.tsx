
import React, { useState, useEffect, useRef } from 'react';
import type { Message } from './types';
import { Sender } from './types';
import { getChatbotResponse } from './services/geminiService';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      text: 'Hello! I am an AI assistant with expertise in prompt engineering for healthcare. How can I help you today based on the provided research papers?',
      sender: Sender.Bot,
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: Sender.User,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const botResponseText = await getChatbotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: Sender.Bot,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error: any) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error?.message || 'Sorry, something went wrong. Please try again.',
        sender: Sender.Bot,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto font-sans">
      <Header />
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white shadow-inner">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2 bg-gray-200 text-gray-800 rounded-lg p-3 max-w-lg">
                <LoadingSpinner />
                <span>Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default App;
