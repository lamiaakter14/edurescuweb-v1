import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function WeeklySnapshot() {
  const weekData = [
    { day: 'Mon', hours: 3.5 },
    { day: 'Tue', hours: 4.2 },
    { day: 'Wed', hours: 2.8 },
    { day: 'Thu', hours: 5.5 },
    { day: 'Fri', hours: 4.0 },
    { day: 'Sat', hours: 6.2 },
    { day: 'Sun', hours: 3.8 },
  ];

  const totalHours = weekData.reduce((acc, d) => acc + d.hours, 0);
  const avgHours = (totalHours / weekData.length).toFixed(1);
  const maxHours = Math.max(...weekData.map(d => d.hours));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-md border-[0.5px] border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-[#1D4ED8]">
          <Clock className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-[#0F172A] text-base font-semibold">Weekly Snapshot</h3>
          <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
            সাপ্তাহিক সারসংক্ষেপ
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-[#EEF4FF] border-[0.5px] border-[#1D4ED8]/10">
          <p className="text-xs text-[#64748B] mb-1">Total Hours</p>
          <p className="text-2xl font-semibold text-[#0F172A]">{totalHours.toFixed(1)}h</p>
        </div>

        <div className="p-3 rounded-xl bg-[#F9FAFB] border-[0.5px] border-[#E2E8F0]">
          <p className="text-xs text-[#64748B] mb-1">Avg Daily</p>
          <p className="text-2xl font-semibold text-[#0F172A]">{avgHours}h</p>
        </div>
      </div>

      {/* Mini Trend Bars */}
      <div className="space-y-2">
        <p className="text-xs text-[#64748B] mb-2">This Week</p>
        <div className="flex items-end justify-between gap-1.5 h-14">
          {weekData.map((day, index) => {
            const heightPercent = (day.hours / maxHours) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPercent}%` }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.05,
                    ease: 'easeOut'
                  }}
                  className="w-full bg-[#1D4ED8] rounded-sm"
                  style={{ minHeight: '4px' }}
                />
                <span className="text-[10px] text-[#94A3B8]">{day.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Trend */}
      <div className="mt-3 pt-3 border-t border-[#E2E8F0]">
        <div className="flex items-center justify-center gap-2 text-xs">
          <TrendingUp className="w-3.5 h-3.5 text-[#059669]" strokeWidth={2} />
          <span className="text-[#059669] font-semibold">↑ 12%</span>
          <span className="text-[#64748B]">from last week</span>
        </div>
      </div>
    </motion.div>
  );
}