"use client";

import { useState } from "react";
import { Message } from "./types";
import ChatMessageList from "./ChatMessageList";
import ChatComposer from "./ChatComposer";

// Simple UUID fallback for environments without crypto.randomUUID
function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback: simple random ID
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export default function ChatShell() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    // Add student message
    const studentMessage: Message = {
      id: generateId(),
      role: "student",
      content: text,
      createdAt: new Date(),
    };

    // Add dummy AI response
    const aiMessage: Message = {
      id: generateId(),
      role: "ai",
      content: `(Demo) You asked: "${text}"`,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, studentMessage, aiMessage]);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
        <p className="text-sm text-gray-500 mt-1">
          Your 24/7 academic emergency assistant
        </p>
      </div>

      {/* Messages Area */}
      <ChatMessageList messages={messages} />

      {/* Composer */}
      <ChatComposer onSend={handleSend} />
    </div>
  );
}
