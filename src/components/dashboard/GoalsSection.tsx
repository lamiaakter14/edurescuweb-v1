import React from 'react';
import { Target, CheckCircle2, Circle, TrendingUp, Clock as ClockIcon, Plus, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

interface GoalsSectionProps {
  variant?: 'default' | 'all-done' | 'empty';
}

export function GoalsSection({ variant = 'default' }: GoalsSectionProps) {
  const goals = [
    { 
      subject: 'Physics',
      subjectBn: 'পদার্থবিজ্ঞান',
      task: 'Practice Optics - MCQ', 
      taskBn: 'আলোকবিজ্ঞান অনুশীলন - MCQ',
      progress: variant === 'all-done' ? 100 : 100, 
      completed: true,
      color: '#1D4ED8',
      insight: 'Great job! 95% accuracy',
      insightBn: 'দুর্দান্ত! ৯৫% নির্ভুলতা',
      difficulty: 'Medium',
      estimatedTime: '15 min'
    },
    { 
      subject: 'Math',
      subjectBn: 'গণিত',
      task: 'Calculus Problems', 
      taskBn: 'ক্যালকুলাস সমস্যা',
      progress: variant === 'all-done' ? 100 : 65, 
      completed: variant === 'all-done',
      color: '#059669',
      insight: '5 more questions to go',
      insightBn: 'আরও ৫টি প্রশ্ন বাকি',
      difficulty: 'Hard',
      estimatedTime: '25 min'
    },
    { 
      subject: 'Chemistry',
      subjectBn: 'রসায়ন',
      task: 'Organic Chemistry Practice', 
      taskBn: 'জৈব রসায়ন অনুশীলন',
      progress: variant === 'all-done' ? 100 : 20, 
      completed: variant === 'all-done',
      color: '#FBBF24',
      insight: 'Started 12 mins ago',
      insightBn: '১২ মিনিট আগে শুরু',
      difficulty: 'Easy',
      estimatedTime: '20 min'
    },
  ];

  const overallProgress = goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length;

  // Empty State
  if (variant === 'empty') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-md border-[0.5px] border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#1D4ED8]">
            <Target className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[#0F172A] text-lg font-bold">Today&apos;s Goals</h3>
            <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              আজকের লক্ষ্য
            </p>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F9FAFB] flex items-center justify-center">
            <Target className="w-10 h-10 text-[#94A3B8]" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-[#64748B] mb-4">No goals set for today</p>
          <button className="text-sm text-[#1D4ED8] hover:text-[#1E40AF] font-medium transition-colors">
            Create a goal
          </button>
        </div>
      </motion.div>
    );
  }

  // All Done State
  if (variant === 'all-done') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-md border-[0.5px] border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
      >
        {/* Subtle confetti background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-4 left-4 w-2 h-2 bg-[#059669] rounded-full" />
          <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-[#FBBF24] rounded-full" />
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-[#1D4ED8] rounded-full" />
          <div className="absolute bottom-4 right-6 w-2 h-2 bg-[#DC2626] rounded-full" />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#059669]">
              <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[#0F172A] text-lg font-bold">Today&apos;s Goals</h3>
              <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
                আজকের লক্ষ্য
              </p>
            </div>
          </div>
          
          {/* Overall Progress Ring */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xl font-bold text-[#059669]">100%</p>
              <p className="text-xs text-[#94A3B8]">Complete!</p>
            </div>
            <div className="relative">
              <svg width="52" height="52" className="transform -rotate-90">
                <circle cx="26" cy="26" r="22" stroke="#E2E8F0" strokeWidth="5" fill="none" />
                <circle 
                  cx="26" 
                  cy="26" 
                  r="22" 
                  stroke="#059669" 
                  strokeWidth="5" 
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 22}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <CheckCircle2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#059669]" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-[#D1FAE5] border border-[#A7F3D0] rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <PartyPopper className="w-5 h-5 text-[#059669]" />
            <p className="text-sm font-medium text-[#065F46]">
              Amazing! All goals completed today! 🎉
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {goals.map((goal, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200 border border-transparent hover:border-[#E2E8F0]"
              >
                <div className="mt-0.5">
                  {goal.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-[#059669]" strokeWidth={2} />
                  ) : (
                    <Circle className="w-6 h-6 text-[#E2E8F0] group-hover:text-[#1D4ED8] transition-colors duration-200" strokeWidth={2} />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span 
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
                    >
                      {goal.subject}
                    </span>
                    <span className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {goal.subjectBn}
                    </span>
                  </div>
                  
                  <p className={`font-medium mb-1 text-sm ${goal.completed ? 'line-through text-[#94A3B8]' : 'text-[#0F172A]'}`}>
                    {goal.task}
                  </p>
                  <p className={`text-xs text-[#94A3B8] mb-3 ${goal.completed ? 'line-through' : ''}`} style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
                    {goal.taskBn}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: goal.completed ? '#059669' : goal.color }}
                      />
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="flex items-start gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#94A3B8] mt-1.5" />
                    <p className="text-xs text-[#64748B]">{goal.insight}</p>
                  </div>
                </div>

                <div className="text-sm font-bold text-[#0F172A]">
                  {goal.progress}%
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full mt-6 py-3 text-sm font-semibold text-[#1D4ED8] hover:bg-[#EEF4FF] rounded-xl transition-all duration-200 border-2 border-dashed border-[#E2E8F0] hover:border-[#1D4ED8]/30"
        >
          + নতুন লক্ষ্য যোগ করুন / Add New Goal
        </motion.button>
      </motion.div>
    );
  }

  // Default State
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-md border-[0.5px] border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#1D4ED8]">
            <Target className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[#0F172A] text-lg font-bold">Today&apos;s Goals</h3>
            <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              আজকের লক্ষ্য
            </p>
          </div>
        </div>
        
        {/* Overall Progress Ring */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xl font-bold text-[#0F172A]">{Math.round(overallProgress)}%</p>
            <p className="text-xs text-[#94A3B8]">Overall</p>
          </div>
          <div className="relative">
            <svg width="52" height="52" className="transform -rotate-90">
              <circle cx="26" cy="26" r="22" stroke="#E2E8F0" strokeWidth="5" fill="none" />
              <circle 
                cx="26" 
                cy="26" 
                r="22" 
                stroke="#1D4ED8" 
                strokeWidth="5" 
                fill="none"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - overallProgress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <TrendingUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#1D4ED8]" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="group"
          >
            <motion.div 
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200 border border-transparent hover:border-[#E2E8F0]"
            >
              <div className="mt-0.5">
                {goal.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-[#059669]" strokeWidth={2} />
                ) : (
                  <Circle className="w-6 h-6 text-[#E2E8F0] group-hover:text-[#1D4ED8] transition-colors duration-200" strokeWidth={2} />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span 
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
                  >
                    {goal.subject}
                  </span>
                  <span className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    {goal.subjectBn}
                  </span>
                </div>
                
                <p className={`font-medium mb-1 text-sm ${goal.completed ? 'line-through text-[#94A3B8]' : 'text-[#0F172A]'}`}>
                  {goal.task}
                </p>
                <p className={`text-xs text-[#94A3B8] mb-3 ${goal.completed ? 'line-through' : ''}`} style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
                  {goal.taskBn}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: goal.completed ? '#059669' : goal.color }}
                    />
                  </div>
                </div>

                {/* Insight */}
                <div className="flex items-start gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#94A3B8] mt-1.5" />
                  <p className="text-xs text-[#64748B]">{goal.insight}</p>
                </div>
              </div>

              <div className="text-sm font-bold text-[#0F172A]">
                {goal.progress}%
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full mt-6 py-3 text-sm font-semibold text-[#1D4ED8] hover:bg-[#EEF4FF] rounded-xl transition-all duration-200 border-2 border-dashed border-[#E2E8F0] hover:border-[#1D4ED8]/30"
      >
        + নতুন লক্ষ্য যোগ করুন / Add New Goal
      </motion.button>
    </motion.div>
  );
}