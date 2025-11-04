import React, { useState, useEffect, useRef } from 'react';
import type { PortfolioData } from '../types';
import { createChatSession } from '../services/geminiService';
import type { Chat } from '@google/genai';
import { ChatIcon } from './icons/ChatIcon';
import { CloseIcon } from './icons/CloseIcon';
import { SendIcon } from './icons/SendIcon';

interface ChatbotProps {
  portfolioData: PortfolioData | null;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ portfolioData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInitialPrompt, setShowInitialPrompt] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show the initial prompt after a delay
    const timer = setTimeout(() => {
      if (portfolioData) {
        setShowInitialPrompt(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [portfolioData]);

  useEffect(() => {
    // Initialize chat session when portfolio data is available
    if (portfolioData && !chat) {
      const chatSession = createChatSession(portfolioData);
      setChat(chatSession);
    }
  }, [portfolioData, chat]);

  useEffect(() => {
    // Auto-scroll to the latest message
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleAccept = () => {
    setShowInitialPrompt(false);
    setIsOpen(true);
    setMessages([
      { sender: 'bot', text: "Hey there! I'm Chip, Michelle's digital sidekick. What secrets about her projects or experience can I spill for you? 😉" }
    ]);
  };

  const handleDecline = () => {
    setShowInitialPrompt(false);
  };
  
  const toggleChat = () => {
    if (isOpen) {
        setIsOpen(false);
    } else {
        setShowInitialPrompt(false);
        setIsOpen(true);
        if (messages.length === 0) {
            setMessages([
                { sender: 'bot', text: "Glad you changed your mind! I'm Chip. Ask me anything about Michelle's portfolio." }
            ]);
        }
    }
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    const newUserMessage: Message = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userInput });
      const botMessage: Message = { sender: 'bot', text: response.text };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      const errorMessage: Message = { sender: 'bot', text: "Whoops! My circuits are a bit scrambled right now. Try asking again in a moment." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!portfolioData) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Main Chat Window */}
      {isOpen && (
        <div className="w-80 h-[28rem] bg-[#0b1021]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col animate-slide-up-fade-in">
          <header className="flex items-center justify-between p-3 border-b border-cyan-500/20 flex-shrink-0">
            <h3 className="font-bold text-white font-orbitron">Chat with Chip</h3>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <CloseIcon className="w-6 h-6" />
            </button>
          </header>

          <div className="flex-grow p-3 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-gradient-to-br from-cyan-600 to-cyan-700 text-white' : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-200 p-3 rounded-lg text-sm">
                      <span className="animate-pulse">...</span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-cyan-500/20 flex-shrink-0 flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about projects..."
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              disabled={isLoading}
            />
            <button type="submit" className="bg-cyan-600 p-2 rounded-md text-white hover:bg-cyan-500 disabled:bg-gray-600" disabled={isLoading || !userInput.trim()}>
                <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Initial Prompt */}
      {showInitialPrompt && !isOpen && (
        <div className="bg-[#0b1021]/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-2xl shadow-cyan-500/20 animate-slide-up-fade-in text-center">
            <p className="text-white mb-3">Need some assistance?</p>
            <div className="flex gap-3 justify-center">
                <button onClick={handleAccept} className="bg-cyan-600 text-white text-sm px-4 py-1 rounded-md hover:bg-cyan-500">Yes</button>
                <button onClick={handleDecline} className="bg-gray-700 text-gray-200 text-sm px-4 py-1 rounded-md hover:bg-gray-600">No</button>
            </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && !showInitialPrompt && (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300 animate-slide-up-fade-in"
          aria-label="Open chat"
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};