import React from 'react';
import { CheckSquare, TrendingUp, Clock, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="bg-white rounded-2xl p-6 border-[0.5px] border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-[#EEF4FF]">
              <CheckSquare className="w-6 h-6 text-[#1D4ED8]" strokeWidth={2} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#64748B] text-sm font-medium">Tasks Completed</p>
            <p className="text-[#94A3B8] text-xs" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              সম্পন্ন কাজ
            </p>
            <p className="text-2xl font-semibold mt-2 text-[#0F172A]">12</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="bg-white rounded-2xl p-6 border-[0.5px] border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-[#EEF4FF]">
              <TrendingUp className="w-6 h-6 text-[#1D4ED8]" strokeWidth={2} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#64748B] text-sm font-medium">Performance</p>
            <p className="text-[#94A3B8] text-xs" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              পারফরম্যান্স
            </p>
            <p className="text-2xl font-semibold mt-2 text-[#0F172A]">87%</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="bg-white rounded-2xl p-6 border-[0.5px] border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-[#F9FAFB]">
              <Clock className="w-6 h-6 text-[#64748B]" strokeWidth={2} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#64748B] text-sm font-medium">Study Hours</p>
            <p className="text-[#94A3B8] text-xs" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              অধ্যয়ন সময়
            </p>
            <p className="text-2xl font-semibold mt-2 text-[#0F172A]">29.8h</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="bg-white rounded-2xl p-6 border-[0.5px] border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-[#DCFCE7]">
              <Flame className="w-6 h-6 text-[#059669]" strokeWidth={2} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#64748B] text-sm font-medium">Study Streak</p>
            <p className="text-[#94A3B8] text-xs" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              অধ্যয়ন ধারা
            </p>
            <p className="text-2xl font-semibold mt-2 text-[#0F172A]">12</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}