export function AssistantRightPanel() {
  const suggestedPrompts = [
    "Explain laws of motion in Physics",
    "Organic chemistry basics",
    "Calculus derivative problems",
    "Cell division process",
    "English grammar tips",
    "Bangla literature analysis",
  ]

  const recentChats = [
    { title: "Physics - Newton's Laws", messages: 12, time: "2 hours ago" },
    { title: "Math - Calculus Help", messages: 8, time: "Yesterday" },
    { title: "Chemistry - Organic Compounds", messages: 15, time: "2 days ago" },
  ]

  return (
    <div className="space-y-4">
      {/* Usage Card */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Your Plan</h3>
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Basic Plan</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Usage</span>
            <span className="font-semibold">45/100</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-[45%]" />
          </div>
          <p className="text-xs text-gray-500">55 questions left</p>
          <button className="w-full mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
            Upgrade
          </button>
        </div>
      </div>

      {/* Suggested Prompts */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="font-semibold text-gray-900">Suggested Prompts</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt}
              className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Chats */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-semibold text-gray-900">Recent Chats</h3>
        </div>
        <div className="space-y-2">
          {recentChats.map((chat) => (
            <button
              key={chat.title}
              className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-medium text-sm text-gray-900">{chat.title}</div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{chat.messages} messages</span>
                <span>{chat.time}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
