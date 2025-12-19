import { StudentSidebar } from './StudentSidebar'
import { StudentTopbar } from './StudentTopbar'

export function StudentShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <StudentTopbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
