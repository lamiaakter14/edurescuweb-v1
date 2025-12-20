import React, { useState } from 'react';
import { Calendar, Plus, Clock, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function StudyPlannerPage() {
  const [viewMode, setViewMode] = useState<'this-week' | 'next-week'>('this-week');

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const subjects = ['Physics', 'Chemistry', 'Math', 'Biology', 'ICT'];

  const studyBlocks = {
    'Mon': [
      { subject: 'Physics', time: '4:00 PM - 5:30 PM', duration: '1.5h', color: '#1D4ED8' },
      { subject: 'Math', time: '6:00 PM - 7:00 PM', duration: '1h', color: '#059669' },
    ],
    'Tue': [
      { subject: 'Chemistry', time: '4:30 PM - 6:00 PM', duration: '1.5h', color: '#FBBF24' },
    ],
    'Wed': [
      { subject: 'Biology', time: '5:00 PM - 6:30 PM', duration: '1.5h', color: '#DC2626' },
      { subject: 'ICT', time: '7:00 PM - 8:00 PM', duration: '1h', color: '#7C3AED' },
    ],
    'Thu': [
      { subject: 'Math', time: '4:00 PM - 5:30 PM', duration: '1.5h', color: '#059669' },
    ],
    'Fri': [
      { subject: 'Physics', time: '5:00 PM - 6:30 PM', duration: '1.5h', color: '#1D4ED8' },
    ],
    'Sat': [
      { subject: 'Chemistry', time: '10:00 AM - 12:00 PM', duration: '2h', color: '#FBBF24' },
      { subject: 'Biology', time: '3:00 PM - 4:30 PM', duration: '1.5h', color: '#DC2626' },
    ],
    'Sun': [
      { subject: 'Revision', time: '10:00 AM - 1:00 PM', duration: '3h', color: '#64748B' },
    ],
  };

  const upcomingExams = [
    {
      subject: 'Physics',
      date: 'Dec 20, 2025',
      daysLeft: 9,
      type: 'Chapter Test',
    },
    {
      subject: 'Chemistry',
      date: 'Dec 25, 2025',
      daysLeft: 14,
      type: 'Term Exam',
    },
  ];

  const todayFocus = [
    { task: 'Complete Physics Ch 3 exercises', status: 'pending' },
    { task: 'Review Math derivatives', status: 'pending' },
    { task: 'Read Chemistry organic reactions', status: 'completed' },
    { task: 'Practice Biology MCQs', status: 'pending' },
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-[#0F172A] mb-2">Study Planner</h1>
        <p className="text-sm text-[#64748B]">
          Plan and track your study schedule • অধ্যয়ন পরিকল্পনা করুন
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
        {/* Left - Planner */}
        <div className="space-y-6">
          {/* Week Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#0F172A] font-semibold mb-1">Weekly Schedule</h3>
                <p className="text-sm text-[#64748B]">December 8 - December 14, 2025</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('this-week')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    viewMode === 'this-week'
                      ? 'bg-[#1D4ED8] text-white shadow-sm'
                      : 'bg-[#F9FAFB] text-[#64748B] hover:bg-[#E2E8F0]'
                  }`}
                >
                  This Week
                </button>
                <button
                  onClick={() => setViewMode('next-week')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    viewMode === 'next-week'
                      ? 'bg-[#1D4ED8] text-white shadow-sm'
                      : 'bg-[#F9FAFB] text-[#64748B] hover:bg-[#E2E8F0]'
                  }`}
                >
                  Next Week
                </button>
              </div>
            </div>
          </motion.div>

          {/* Week Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="grid grid-cols-7 gap-3">
              {weekDays.map((day, idx) => (
                <div key={day} className="space-y-3">
                  {/* Day Header */}
                  <div className="text-center pb-3 border-b border-[#E2E8F0]">
                    <p className="text-xs text-[#94A3B8] mb-1">{day}</p>
                    <p className="text-lg font-semibold text-[#0F172A]">{8 + idx}</p>
                  </div>

                  {/* Study Blocks */}
                  <div className="space-y-2 min-h-[300px]">
                    {studyBlocks[day as keyof typeof studyBlocks]?.map((block, blockIdx) => (
                      <motion.div
                        key={blockIdx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + (idx * 0.05) + (blockIdx * 0.05) }}
                        className="p-2 rounded-lg cursor-pointer hover:shadow-md transition-all duration-200"
                        style={{ backgroundColor: `${block.color}15`, borderLeft: `3px solid ${block.color}` }}
                      >
                        <p className="text-xs font-semibold mb-1" style={{ color: block.color }}>
                          {block.subject}
                        </p>
                        <p className="text-[10px] text-[#64748B] mb-1 leading-tight">
                          {block.time}
                        </p>
                        <p className="text-[10px] font-medium text-[#94A3B8]">
                          {block.duration}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Task Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-6 py-3 text-sm font-semibold text-[#1D4ED8] hover:bg-[#EEF4FF] rounded-xl transition-all duration-200 border-2 border-dashed border-[#E2E8F0] hover:border-[#1D4ED8]/30 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Study Session
            </motion.button>
          </motion.div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-6">
          {/* Exam Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#DC2626]" />
              <h3 className="text-[#0F172A]">Exam Countdown</h3>
            </div>
            <div className="space-y-3">
              {upcomingExams.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FEE2E2]"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A] mb-1">{exam.subject}</p>
                      <p className="text-xs text-[#64748B]">{exam.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#DC2626]">{exam.daysLeft}</p>
                      <p className="text-xs text-[#94A3B8]">days left</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#94A3B8]">{exam.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Study Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#1D4ED8]" />
              <h3 className="text-[#0F172A]">Study Hours</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[#64748B]">This Week</p>
                  <p className="text-sm font-semibold text-[#0F172A]">12h / 20h</p>
                </div>
                <div className="h-2 bg-[#F9FAFB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#1D4ED8] rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-[#F9FAFB]">
                  <p className="text-xs text-[#64748B] mb-1">Daily Average</p>
                  <p className="text-lg font-semibold text-[#0F172A]">1.7h</p>
                </div>
                <div className="p-3 rounded-xl bg-[#F9FAFB]">
                  <p className="text-xs text-[#64748B] mb-1">Target</p>
                  <p className="text-lg font-semibold text-[#0F172A]">2.5h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Today's Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-[#1D4ED8]" />
              <h3 className="text-[#0F172A]">Today&apos;s Focus</h3>
            </div>
            <div className="space-y-2">
              {todayFocus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={item.status === 'completed'}
                    className="mt-0.5 w-4 h-4 rounded border-[#E2E8F0] text-[#1D4ED8] focus:ring-[#1D4ED8]"
                    readOnly
                  />
                  <p className={`text-sm flex-1 ${
                    item.status === 'completed' 
                      ? 'line-through text-[#94A3B8]' 
                      : 'text-[#0F172A]'
                  }`}>
                    {item.task}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
