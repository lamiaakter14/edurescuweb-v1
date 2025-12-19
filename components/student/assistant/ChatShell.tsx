'use client'

import { useState } from 'react'
import { ChatEmptyState } from './ChatEmptyState'
import { ChatComposer } from './ChatComposer'

export function ChatShell() {
  const [messages, setMessages] = useState<string[]>([])

  const handleSend = async (text: string) => {
    // Mock implementation - real API comes later
    console.log('Sending:', text)
  }

  return (
    <div className="flex h-full flex-col bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Assistant</h2>
              <p className="text-sm text-gray-500">Your personal study companion</p>
            </div>
          </div>
          
          {/* Emergency button */}
          <button className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Need Human Help?
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <ChatEmptyState onSelectPrompt={handleSend} />
        ) : (
          <div>Messages will appear here</div>
        )}
      </div>

      {/* Composer */}
      <div className="border-t p-4">
        <ChatComposer onSend={handleSend} />
      </div>
    </div>
  )
}
