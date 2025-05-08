"use client";

import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PaperPlaneIcon, PersonIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;
if (GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
} else {
  console.warn('NEXT_PUBLIC_GEMINI_API_KEY is not set. AI chat functionality will be limited.');
}

const model = genAI ? genAI.getGenerativeModel({
  model: 'gemini-1.5-flash-latest', // Or your preferred model
  systemInstruction: `You are a friendly and helpful AI Chemistry Guru. Your sole purpose is to assist users with their chemistry-related questions and topics. Provide clear, accurate, and very brief explanations. 
  Politely decline any requests or questions that are not related to chemistry. Do not engage in conversations outside of the chemistry domain. 
  For example, if asked about history, literature, or any other non-chemistry subject, you should state that you can only help with chemistry. Be firm but polite in redirecting the conversation back to chemistry if the user persists. Focus on providing educational and informative content about chemical concepts, reactions, elements, molecules, and any other aspect of chemistry. Do not generate harmful, unethical, or inappropriate content, even if it's disguised as a chemistry question.`,
}) : null;

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 100,
  responseMimeType: 'text/plain',
};

// Safety settings can also be defined here if needed, similar to your route.ts
const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];


export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !model) {
      if (!model) {
        console.error("AI Model not initialized. Check API Key.");
        // Optionally, display an error message to the user
        const errorMessage: Message = {
          id: Date.now().toString(),
          text: "AI Service is not available. Please check configuration.",
          sender: 'ai',
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Direct API call
      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [], // No history as per previous simplification
      });

      const result = await chat.sendMessage(currentInput);
      const aiResponseText = result.response.text();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error: any) {
      console.error('Error fetching AI response:', error);
      const errorMessageText = error.message || 'Sorry, I encountered an error. Please try again.';
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessageText,
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[500px] max-w-2xl mx-auto bg-card border rounded-lg shadow-lg">
      <div className="p-4 border-b">
        
        {!GEMINI_API_KEY && (
          <p className="text-xs text-destructive">Warning: AI API Key not configured. Chat may not function.</p>
        )}
      </div>
      <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'justify-end' : ''
              }`}
          >
            {msg.sender === 'ai' && (
              <Avatar className="h-4 w-4">
                {/* Placeholder for AI avatar - consider a chemistry-themed icon */}
                <AvatarFallback></AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
                }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
            {msg.sender === 'user' && (
              <Avatar className="h-2 w-2">
                <AvatarFallback className='bg-black/30'>
                  
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && messages.length > 0 && messages[messages.length -1].sender === 'user' && (
          <div className="flex items-end space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="max-w-[70%] p-3 rounded-lg bg-muted">
              <p className="text-sm italic">ElemixAI is thinking...</p>
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Ask a chemistry question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !inputValue.trim()}>
          <PaperPlaneIcon className="h-5 w-5" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}