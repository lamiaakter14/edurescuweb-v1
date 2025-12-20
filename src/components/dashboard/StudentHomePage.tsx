import React, { useState } from 'react';
import { PostComposer } from './PostComposer';
import { ProblemFeedCard } from './ProblemFeedCard';
import { GoalsSection } from './GoalsSection';
import { StudyGroup } from './StudyGroup';
import { TopRecommendation } from './TopRecommendation';
import { QuickActions } from './QuickActions';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw, FileQuestion, Target, Users, Sparkles, Home, AlertCircle as Emergency, Zap, BookOpen, StickyNote } from 'lucide-react';

interface StudentHomePageProps {
  onNavigate?: (page: string) => void;
  // State variants
  state?: 'default-desktop-en' | 'loading' | 'empty-feed' | 'error' | 'all-goals-done' | 'empty-goals' | 'empty-study-group' | 'empty-recommendation' | 'mobile-en' | 'desktop-bn' | 'mobile-bn';
}

export function StudentHomePage({ onNavigate, state = 'default-desktop-en' }: StudentHomePageProps) {
  const [activeTab, setActiveTab] = useState('latest');
  const [showError, setShowError] = useState(state === 'error');

  // Language detection
  const isBengali = state === 'desktop-bn' || state === 'mobile-bn';
  const isMobile = state === 'mobile-en' || state === 'mobile-bn';

  // Text content based on language
  const text = {
    welcome: isBengali ? 'স্বাগতম, আদিবা 👋' : 'Welcome back, Adiba 👋',
    date: isBengali ? 'সোমবার, ৮ ডিসেম্বর ২০২৫' : 'Monday, December 8, 2025',
    tabs: {
      latest: isBengali ? 'সর্বশেষ' : 'Latest',
      unsolved: isBengali ? 'অমীমাংসিত' : 'Unsolved',
      myBoard: isBengali ? 'আমার বোর্ড' : 'My Board',
      mySubjects: isBengali ? 'আমার বিষয়' : 'My Subjects',
    },
    emptyFeed: {
      title: isBengali ? 'এখনো কোনো সমস্যা নেই' : 'No problems yet',
      subtitle: isBengali ? 'অন্যদের থেকে সাহায্য পেতে আপনার প্রথম সমস্যা পোস্ট করুন' : 'Post your first সমস্যা to get help from others.',
      button: isBengali ? 'সমস্যা পোস্ট করুন' : 'Post Problem',
    },
    error: {
      message: isBengali ? 'নতুন পোস্ট লোড করা যায়নি। আবার চেষ্টা করুন।' : 'Couldn\'t load new posts. Try again.',
      retry: isBengali ? 'আবার চেষ্টা করুন' : 'Retry',
    },
  };

  const tabs = [
    { id: 'latest', label: text.tabs.latest },
    { id: 'unsolved', label: text.tabs.unsolved },
    { id: 'my-board', label: text.tabs.myBoard },
    { id: 'my-subjects', label: text.tabs.mySubjects },
  ];

  const problems = state === 'empty-feed' ? [] : [
    {
      student: { name: 'Rafiul Islam', class: 'Class 12, Science' },
      board: 'Dhaka Board',
      subject: 'Physics',
      title: 'How to solve projectile motion problems with air resistance?',
      preview: 'I am struggling with understanding how air resistance affects projectile motion. Can someone explain the concept and share practice problems?',
      hasAttachment: true,
      commentsCount: 12,
      isSolved: false,
      timeAgo: '2 hours ago',
    },
    {
      student: { name: 'Nusrat Jahan', class: 'Class 11, Science' },
      board: 'Rajshahi Board',
      subject: 'Chemistry',
      title: 'Organic chemistry reaction mechanism confusion',
      preview: 'Need help understanding SN1 and SN2 reaction mechanisms. What are the key differences?',
      hasAttachment: false,
      commentsCount: 8,
      isSolved: true,
      timeAgo: '5 hours ago',
    },
    {
      student: { name: 'Tamim Ahmed', class: 'Class 10, Science' },
      board: 'Dhaka Board',
      subject: 'Math',
      title: 'Calculus derivative problem help needed',
      preview: 'Having trouble with chain rule application in derivatives. Can someone provide step-by-step solution?',
      hasAttachment: true,
      commentsCount: 15,
      isSolved: false,
      timeAgo: '1 day ago',
    },
    {
      student: { name: 'Sadia Rahman', class: 'Class 12, Science' },
      board: 'Chattogram Board',
      subject: 'Biology',
      title: 'Cell division mitosis and meiosis differences',
      preview: 'Can someone explain the main differences between mitosis and meiosis with diagrams?',
      hasAttachment: false,
      commentsCount: 6,
      isSolved: true,
      timeAgo: '2 days ago',
    },
  ];

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0] animate-pulse">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#E2E8F0]" />
        <div className="flex-1">
          <div className="h-4 bg-[#E2E8F0] rounded w-32 mb-2" />
          <div className="h-3 bg-[#E2E8F0] rounded w-24" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-[#E2E8F0] rounded w-3/4" />
        <div className="h-3 bg-[#E2E8F0] rounded w-full" />
        <div className="h-3 bg-[#E2E8F0] rounded w-5/6" />
      </div>
      <div className="flex gap-3">
        <div className="h-8 bg-[#E2E8F0] rounded-lg w-24" />
        <div className="h-8 bg-[#E2E8F0] rounded-lg w-24" />
      </div>
    </div>
  );

  const SkeletonSidebar = () => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0] animate-pulse">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#E2E8F0]" />
        <div className="flex-1">
          <div className="h-4 bg-[#E2E8F0] rounded w-24 mb-2" />
          <div className="h-3 bg-[#E2E8F0] rounded w-16" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-3 bg-[#E2E8F0] rounded w-full" />
        <div className="h-3 bg-[#E2E8F0] rounded w-5/6" />
        <div className="h-3 bg-[#E2E8F0] rounded w-4/6" />
      </div>
    </div>
  );

  // Empty State Component
  const EmptyFeedState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-12 shadow-sm border-[0.5px] border-[#E2E8F0] text-center"
    >
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#F9FAFB] flex items-center justify-center">
        <FileQuestion className="w-16 h-16 text-[#94A3B8]" strokeWidth={1.5} />
      </div>
      <h3 className="text-[#0F172A] font-semibold text-lg mb-2">{text.emptyFeed.title}</h3>
      <p className="text-sm text-[#64748B] mb-6 max-w-md mx-auto" style={isBengali ? { fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' } : {}}>
        {text.emptyFeed.subtitle}
      </p>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-3 bg-[#F9FAFB] text-[#1D4ED8] rounded-xl hover:bg-[#EEF4FF] transition-all duration-200 text-sm font-semibold border border-[#E2E8F0]"
      >
        {text.emptyFeed.button}
      </motion.button>
    </motion.div>
  );

  // Error Banner
  const ErrorBanner = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#FEE2E2] border border-[#FCA5A5] rounded-xl p-4 mb-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-[#DC2626]" />
        <p className="text-sm text-[#991B1B] font-medium">{text.error.message}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowError(false)}
        className="px-4 py-2 bg-[#DC2626] text-white rounded-lg text-sm font-semibold hover:bg-[#B91C1C] transition-colors flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        {text.error.retry}
      </motion.button>
    </motion.div>
  );

  // Mobile Bottom Navigation
  const MobileBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50">
      <div className="grid grid-cols-5 h-16">
        {[
          { icon: Home, label: isBengali ? 'হোম' : 'Home', active: true },
          { icon: Emergency, label: isBengali ? 'জরুরি' : 'Emergency', active: false },
          { icon: Zap, label: isBengali ? 'এআই' : 'AI', active: false },
          { icon: BookOpen, label: isBengali ? 'রিসোর্স' : 'Resources', active: false },
          { icon: StickyNote, label: isBengali ? 'নোট' : 'Notes', active: false },
        ].map((item, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              item.active ? 'text-[#1D4ED8]' : 'text-[#94A3B8]'
            }`}
          >
            <item.icon className="w-5 h-5" strokeWidth={2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className={`${isMobile ? 'px-4 py-6 pb-24' : 'max-w-[1400px] mx-auto px-8 py-8'}`}>
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-[#0F172A] mb-2 text-2xl font-semibold">
          {text.welcome}
        </h1>
        <p className="text-sm text-[#64748B]" style={isBengali ? { fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' } : {}}>
          {text.date}
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className={`${isMobile ? 'space-y-6' : 'grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8'}`}>
        {/* Left Column - Problem Feed */}
        <div>
          {/* Post Composer */}
          <div className="mb-6">
            <PostComposer />
          </div>

          {/* Error Banner */}
          {showError && <ErrorBanner />}

          {/* Feed Filter Tabs */}
          <div className="mb-6">
            <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border-[0.5px] border-[#E2E8F0] shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#1D4ED8] text-white shadow-sm'
                      : 'text-[#64748B] hover:bg-[#F9FAFB] hover:text-[#0F172A]'
                  }`}
                >
                  <span className="text-sm font-semibold">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Problem Feed List or States */}
          {state === 'loading' ? (
            <div className="space-y-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : state === 'empty-feed' ? (
            <EmptyFeedState />
          ) : (
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <ProblemFeedCard key={index} {...problem} />
              ))}
            </div>
          )}
        </div>

        {/* Right Sidebar - Daily Focus Stack */}
        <div className="space-y-6">
          {/* Today's Goals */}
          {state === 'loading' ? (
            <SkeletonSidebar />
          ) : state === 'all-goals-done' ? (
            <GoalsSection variant="all-done" />
          ) : state === 'empty-goals' ? (
            <GoalsSection variant="empty" />
          ) : (
            <GoalsSection />
          )}

          {/* Study Group */}
          {state === 'loading' ? (
            <SkeletonSidebar />
          ) : state === 'empty-study-group' ? (
            <StudyGroup variant="empty" />
          ) : (
            <StudyGroup />
          )}

          {/* Best Recommendation Today */}
          {state === 'loading' ? (
            <SkeletonSidebar />
          ) : state === 'empty-recommendation' ? (
            <TopRecommendation variant="empty" />
          ) : (
            <TopRecommendation />
          )}

          {/* Quick Actions */}
          {state === 'loading' ? (
            <SkeletonSidebar />
          ) : (
            <QuickActions />
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </main>
  );
}
