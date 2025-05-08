"use client";

import React from 'react';
import ChatInterface from '@/components/ai/ChatInterface';

export default function AiChemistPage() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 font-poppins">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-medium tracking-tight sm:text-2xl md:text-2xl">
          Elemix AI Chat
        </h1>
        <p className="mt-2 text-sm text-muted-foreground px-6">
          Ask your chemistry questions and get help from our AI expert.
        </p>
      </header>
      <div className="max-w-2xl mx-auto">
        <ChatInterface />
      </div>
    </div>
  );
}