"use client";

import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PaperPlaneIcon, PersonIcon } from '@radix-ui/react-icons'; // Using Radix icons as an example
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }), // Send only the current message
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response from AI');
      }

      const data = await response.json();
      const aiResponseText = data.reply;

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
    <div className="flex flex-col h-[320px] max-w-2xl mx-auto bg-card border rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold"></h2>
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
              <p className="text-sm italic">Chemistry Guru is thinking...</p>
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