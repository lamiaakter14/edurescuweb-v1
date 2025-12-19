import { ChatShell } from '@/components/student/assistant/ChatShell'
import { AssistantRightPanel } from '@/components/student/assistant/AssistantRightPanel'

export default function AssistantPage() {
  return (
    <div className="flex h-full gap-4">
      {/* Main chat area */}
      <div className="flex-1">
        <ChatShell />
      </div>
      
      {/* Right panel - hide on mobile */}
      <div className="hidden lg:block lg:w-80">
        <AssistantRightPanel />
      </div>
    </div>
  )
}
