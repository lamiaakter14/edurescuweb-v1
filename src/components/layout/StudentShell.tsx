import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Search, Bell, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';

interface StudentShellProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

export function StudentShell({ children, activePage, onNavigate }: StudentShellProps) {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
      
      {/* Sidebar */}
      <Sidebar activePage={activePage} onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="ml-[240px]">
        {/* Top Header */}
        <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-40 backdrop-blur-sm bg-white/95">
          <div className="max-w-[1400px] mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                  <input
                    type="text"
                    placeholder="Search courses, tutors, resources..."
                    className="w-full pl-10 pr-4 py-3 bg-[#F9FAFB] border border-transparent rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-[#1D4ED8] text-white rounded-xl hover:bg-[#1E40AF] transition-all duration-200 shadow-sm text-sm font-semibold"
                >
                  Upgrade to Pro
                </motion.button>
                
                {/* Messages */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200 relative"
                >
                  <MessageSquare className="w-5 h-5 text-[#64748B]" strokeWidth={2} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#1D4ED8] rounded-full" />
                </motion.button>

                {/* Notifications */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200 relative"
                >
                  <Bell className="w-5 h-5 text-[#64748B]" strokeWidth={2} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
                </motion.button>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-0.5 p-0.5 bg-[#F9FAFB] rounded-lg border-[0.5px] border-[#E2E8F0]">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-white text-[#1D4ED8] shadow-sm'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('bn')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                      language === 'bn'
                        ? 'bg-white text-[#1D4ED8] shadow-sm'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    বাং
                  </button>
                </div>

                {/* Profile Avatar */}
                <div className="relative">
                  <motion.button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 rounded-full bg-[#1D4ED8] flex items-center justify-center cursor-pointer hover:bg-[#1E40AF] transition-all duration-200 shadow-sm"
                  >
                    <span className="text-white font-semibold text-sm">AN</span>
                  </motion.button>

                  {/* Profile Dropdown */}
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border-[0.5px] border-[#E2E8F0] overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-[#E2E8F0]">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[#1D4ED8] flex items-center justify-center">
                            <span className="text-white font-semibold">AN</span>
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-[#0F172A]">Adiba Nower</p>
                            <p className="text-xs text-[#64748B]">Class 10, Science</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <button className="w-full text-left px-3 py-2 text-sm text-[#64748B] hover:bg-[#F9FAFB] rounded-lg transition-colors">
                          View Profile
                        </button>
                        <button className="w-full text-left px-3 py-2 text-sm text-[#64748B] hover:bg-[#F9FAFB] rounded-lg transition-colors">
                          Account Settings
                        </button>
                        <button className="w-full text-left px-3 py-2 text-sm text-[#DC2626] hover:bg-[#FEE2E2] rounded-lg transition-colors">
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}