import React from 'react';
import { BarChart3, TrendingUp, Clock, Target, Lightbulb, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function StudyAnalyticsPage() {
  const weeklyData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 2.8 },
    { day: 'Sat', hours: 4.5 },
    { day: 'Sun', hours: 3.8 },
  ];

  const subjectPerformance = [
    { subject: 'Physics', score: 85, status: 'Strong', color: '#1D4ED8' },
    { subject: 'Math', score: 92, status: 'Strong', color: '#059669' },
    { subject: 'Chemistry', score: 78, status: 'Average', color: '#FBBF24' },
    { subject: 'Biology', score: 88, status: 'Strong', color: '#DC2626' },
    { subject: 'ICT', score: 65, status: 'Weak', color: '#7C3AED' },
    { subject: 'English', score: 75, status: 'Average', color: '#64748B' },
  ];

  const aiInsights = [
    {
      type: 'success',
      text: 'Great consistency this week! You studied 6 out of 7 days.',
      icon: TrendingUp,
    },
    {
      type: 'warning',
      text: 'ICT needs more attention. Consider adding 2 more hours this week.',
      icon: AlertCircle,
    },
    {
      type: 'info',
      text: 'Your best performance time is 4-6 PM. Plan difficult topics during this window.',
      icon: Lightbulb,
    },
  ];

  const weakAreas = [
    { topic: 'ICT - Programming Loops', status: 'Need practice', color: '#DC2626' },
    { topic: 'Chemistry - Organic Reactions', status: 'Review needed', color: '#FBBF24' },
    { topic: 'Physics - Thermodynamics', status: 'Practice more', color: '#FBBF24' },
  ];

  const stats = [
    {
      label: 'Total Study Hours',
      value: '20.7h',
      subtext: 'This week',
      icon: Clock,
      color: '#1D4ED8',
    },
    {
      label: 'Daily Average',
      value: '3.0h',
      subtext: '+15% from last week',
      icon: TrendingUp,
      color: '#059669',
    },
    {
      label: 'Consistency',
      value: '86%',
      subtext: '6/7 days active',
      icon: Target,
      color: '#FBBF24',
    },
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-[#0F172A] mb-2">Study Analytics</h1>
        <p className="text-sm text-[#64748B]">
          Track your progress and performance • আপনার অগ্রগতি দেখুন
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
        {/* Left - Analytics */}
        <div className="space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${stat.color}15` }}>
                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#0F172A] mb-1">{stat.value}</p>
                <p className="text-xs text-[#64748B] mb-1">{stat.label}</p>
                <p className="text-xs text-[#94A3B8]">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>

          {/* Weekly Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[#0F172A] font-semibold mb-1">Weekly Study Hours</h3>
                <p className="text-sm text-[#64748B]">December 8 - December 14, 2025</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-[#1D4ED8] text-white rounded-lg text-xs font-semibold">
                  This Week
                </button>
                <button className="px-3 py-1.5 bg-[#F9FAFB] text-[#64748B] rounded-lg text-xs font-semibold hover:bg-[#E2E8F0]">
                  Last Week
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="day" 
                  stroke="#94A3B8" 
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#94A3B8" 
                  style={{ fontSize: '12px' }}
                  label={{ value: 'Hours', angle: -90, position: 'insideLeft', style: { fontSize: '12px', fill: '#64748B' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E2E8F0', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="hours" fill="#1D4ED8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Subject Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <h3 className="text-[#0F172A] font-semibold mb-6">Subject Performance</h3>
            <div className="space-y-4">
              {subjectPerformance.map((subject, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: subject.color }}
                      />
                      <p className="text-sm font-medium text-[#0F172A]">{subject.subject}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        subject.status === 'Strong' 
                          ? 'bg-[#D1FAE5] text-[#059669]' 
                          : subject.status === 'Average'
                          ? 'bg-[#FEF3C7] text-[#D97706]'
                          : 'bg-[#FEE2E2] text-[#DC2626]'
                      }`}>
                        {subject.status}
                      </span>
                      <p className="text-sm font-semibold text-[#0F172A] w-12 text-right">
                        {subject.score}%
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#F9FAFB] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.score}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + idx * 0.05 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Insights & Weak Areas */}
        <div className="space-y-6">
          {/* AI Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-[#1D4ED8]" />
              <h3 className="text-[#0F172A]">AI Insights</h3>
            </div>
            <div className="space-y-3">
              {aiInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    insight.type === 'success'
                      ? 'bg-[#D1FAE5] border-[#A7F3D0]'
                      : insight.type === 'warning'
                      ? 'bg-[#FEF3C7] border-[#FDE68A]'
                      : 'bg-[#EEF4FF] border-[#DBEAFE]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <insight.icon 
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        insight.type === 'success'
                          ? 'text-[#059669]'
                          : insight.type === 'warning'
                          ? 'text-[#D97706]'
                          : 'text-[#1D4ED8]'
                      }`}
                    />
                    <p className="text-sm text-[#0F172A]">{insight.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weak Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-[#DC2626]" />
              <h3 className="text-[#0F172A]">Areas to Improve</h3>
            </div>
            <div className="space-y-3">
              {weakAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E2E8F0] hover:border-[#1D4ED8]/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#0F172A] mb-1">{area.topic}</p>
                      <span 
                        className="text-xs px-2 py-0.5 rounded-md font-medium inline-block"
                        style={{ 
                          backgroundColor: `${area.color}15`,
                          color: area.color 
                        }}
                      >
                        {area.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Study Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-[#FBBF24]" />
              <h3 className="text-[#0F172A]">Study Streak</h3>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-xl">
              <p className="text-5xl font-bold text-[#D97706] mb-2">12</p>
              <p className="text-sm font-medium text-[#92400E]">Days in a row!</p>
              <p className="text-xs text-[#B45309] mt-2">Keep it up! 🔥</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
