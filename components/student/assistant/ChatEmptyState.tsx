interface ChatEmptyStateProps {
  onSelectPrompt: (prompt: string) => void
}

export function ChatEmptyState({ onSelectPrompt }: ChatEmptyStateProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center">
          <svg className="h-full w-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>

        {/* Text */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Start chatting with AI
        </h3>
        <p className="text-gray-500 mb-6">
          Ask any academic question and get instant help
        </p>
      </div>
    </div>
  )
}
