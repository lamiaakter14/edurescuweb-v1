import React from 'react';
import { motion } from 'framer-motion';
import { Zap, AlertCircle, BookOpen, FileText, Settings, HelpCircle, CheckCircle, Clock } from 'lucide-react';

interface MinimalHomePageProps {
  onNavigate?: (page: string) => void;
  lang?: 'en' | 'bn';
}

export function MinimalHomePage({ onNavigate, lang = 'en' }: MinimalHomePageProps) {
  const isBn = lang === 'bn';

  const text = {
    welcome: isBn ? 'সমস্যায় আটকে গেছো, আদিবা?' : 'Stuck on a problem, Adiba?',
    subtitle: isBn ? 'তাৎক্ষণিক এআই সাহায্য বা বিশেষজ্ঞের সাথে যোগাযোগ করুন' : 'Get instant AI help or connect with an expert',
    askAI: isBn ? 'এআই সহায়ক জিজ্ঞাসা করুন' : 'Ask AI Assistant',
    viewEmergency: isBn ? 'জরুরি অনুরোধ দেখুন' : 'View Emergency Requests',
    emergencyTitle: isBn ? 'আপনার জরুরি অনুরোধ' : 'Your Emergency Requests',
    pending: isBn ? 'অপেক্ষমাণ' : 'Pending',
    verified: isBn ? 'যাচাইকৃত' : 'Verified',
    viewAll: isBn ? 'সব দেখুন' : 'View All',
    quickAccess: isBn ? 'দ্রুত প্রবেশ' : 'Quick Access',
    resources: isBn ? 'রিসোর্স' : 'Resources',
    notes: isBn ? 'নোট' : 'Notes',
    settings: isBn ? 'সেটিংস' : 'Settings',
    support: isBn ? 'সহায়তা' : 'Support',
  };

  const emergencyRequests = [
    {
      id: 1,
      subject: 'Physics',
      title: 'Projectile motion with air resistance',
      status: 'pending' as const,
      time: '10 mins ago',
    },
    {
      id: 2,
      subject: 'Chemistry',
      title: 'Organic reaction mechanisms',
      status: 'verified' as const,
      time: '2 hours ago',
    },
  ];

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      Physics: '#3B82F6',
      Chemistry: '#10B981',
      Math: '#8B5CF6',
      Biology: '#F59E0B',
      ICT: '#6B7280',
      English: '#EF4444',
      Bangla: '#F97316',
    };
    return colors[subject] || '#6B7280';
  };

  return (
    <main className="max-w-[1000px] mx-auto px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-semibold text-[#0F172A] mb-3">
          {text.welcome}
        </h1>
        <p className="text-base text-[#64748B] mb-8" style={isBn ? { fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' } : {}}>
          {text.subtitle}
        </p>

        {/* Primary CTAs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('ai-assistant')}
            className="px-8 py-4 bg-[#1D4ED8] text-white rounded-xl hover:bg-[#1E40AF] transition-all duration-200 font-semibold shadow-sm flex items-center gap-2"
          >
            <Zap className="w-5 h-5" strokeWidth={2} />
            {text.askAI}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('emergency')}
            className="px-8 py-4 bg-white text-[#DC2626] border-2 border-[#DC2626] rounded-xl hover:bg-[#FEF2F2] transition-all duration-200 font-semibold flex items-center gap-2"
          >
            <AlertCircle className="w-5 h-5" strokeWidth={2} />
            {text.viewEmergency}
          </motion.button>
        </div>
      </motion.div>

      {/* Emergency Status Card */}
      {emergencyRequests.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0] mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">{text.emergencyTitle}</h2>
            <button
              onClick={() => onNavigate?.('emergency')}
              className="text-sm text-[#1D4ED8] font-medium hover:underline"
            >
              {text.viewAll} →
            </button>
          </div>

          <div className="space-y-3">
            {emergencyRequests.map((request) => (
              <motion.div
                key={request.id}
                whileHover={{ x: 4 }}
                className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E2E8F0] hover:border-[#1D4ED8]/20 transition-all duration-200 cursor-pointer"
                onClick={() => onNavigate?.('emergency')}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded text-xs font-medium text-white"
                        style={{ backgroundColor: getSubjectColor(request.subject) }}
                      >
                        {request.subject}
                      </span>
                      {request.status === 'pending' ? (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#FEF3C7] text-[#92400E] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {text.pending}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#D1FAE5] text-[#065F46] flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {text.verified}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-[#0F172A] mb-1">{request.title}</h3>
                    <p className="text-xs text-[#94A3B8]">{request.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Quick Access Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-base font-semibold text-[#0F172A] mb-4">{text.quickAccess}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, label: text.resources, page: 'resources', color: '#3B82F6' },
            { icon: FileText, label: text.notes, page: 'notes', color: '#8B5CF6' },
            { icon: Settings, label: text.settings, page: 'settings', color: '#6B7280' },
            { icon: HelpCircle, label: text.support, page: 'support', color: '#10B981' },
          ].map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate?.(item.page)}
              className="p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#1D4ED8]/20 hover:shadow-md transition-all duration-200 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={2} />
              </div>
              <span className="text-sm font-medium text-[#0F172A]">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
