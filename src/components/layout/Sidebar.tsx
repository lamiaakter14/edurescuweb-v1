import React from 'react';
import { Home, AlertCircle, Target, BookOpen, FileText, Users, BookMarked, BarChart3, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
}

export function Sidebar({ activePage = 'dashboard', onNavigate }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', labelBn: 'হোম', page: 'dashboard' },
    { icon: Target, label: 'AI Assistant', labelBn: 'এআই সহায়ক', page: 'ai-assistant' },
    { icon: AlertCircle, label: 'Emergency Help', labelBn: 'জরুরি সহায়তা', page: 'emergency' },
    { icon: BookOpen, label: 'Resources', labelBn: 'রিসোর্স', page: 'resources' },
    { icon: FileText, label: 'Notes', labelBn: 'নোট', page: 'notes' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', labelBn: 'সেটিংস' },
    { icon: HelpCircle, label: 'Contact Support', labelBn: 'সহায়তা' },
  ];

  return (
    <div className="w-[240px] h-screen bg-white border-r border-[#E2E8F0] flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#1D4ED8] flex items-center justify-center shadow-md">
            <span className="text-white font-semibold">E</span>
          </div>
          <span className="font-semibold text-lg text-[#0F172A]">EduRescue</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={index}
                onClick={() => onNavigate?.(item.page)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[#EEF4FF] text-[#1D4ED8]'
                    : 'text-[#64748B] hover:bg-[#F9FAFB] hover:text-[#0F172A]'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-[#1D4ED8] rounded-r-full" />
                )}
                <item.icon className="w-5 h-5" style={{ color: isActive ? '#1D4ED8' : '#94A3B8' }} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="px-3 pb-6 space-y-2">
        {bottomItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#64748B] hover:bg-[#F9FAFB] hover:text-[#0F172A] transition-all duration-200"
          >
            <item.icon className="w-5 h-5" style={{ color: '#94A3B8' }} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}