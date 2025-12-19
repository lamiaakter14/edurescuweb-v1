'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  MessageSquare, 
  AlertCircle, 
  BookOpen, 
  Library, 
  LayoutDashboard 
} from 'lucide-react'

const navItems = [
  { href: '/student/assistant', label: 'AI Assistant', icon: MessageSquare },
  { href: '/student/emergency', label: 'Emergency Help', icon: AlertCircle },
  { href: '/student/notes', label: 'My Notes', icon: BookOpen },
  { href: '/student/resources', label: 'Resources', icon: Library },
  { href: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
]

export function StudentSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 border-r bg-white md:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold text-blue-600">EduRescue</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
