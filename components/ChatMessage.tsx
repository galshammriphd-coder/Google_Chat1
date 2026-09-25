
import React from 'react';
import type { Message } from '../types';
import { Sender } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === Sender.User;

  const userBubbleClasses = 'bg-blue-500 text-white self-end';
  const botBubbleClasses = 'bg-gray-200 text-gray-800 self-start';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg p-3 max-w-lg break-words shadow ${isUser ? userBubbleClasses : botBubbleClasses}`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
