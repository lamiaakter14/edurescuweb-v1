import React from 'react';
import { TrendingUp, Clock, BarChart3 } from 'lucide-react';
import { GradientCard } from '../shared/GradientCard';
import { motion } from 'framer-motion';

export function WeeklyAnalytics() {
  const weekData = [
    { day: 'সোম', dayEn: 'Mon', hours: 3.5, date: 'Dec 2' },
    { day: 'মঙ্গল', dayEn: 'Tue', hours: 4.2, date: 'Dec 3' },
    { day: 'বুধ', dayEn: 'Wed', hours: 2.8, date: 'Dec 4' },
    { day: 'বৃহস্পতি', dayEn: 'Thu', hours: 5.5, date: 'Dec 5' },
    { day: 'শুক্র', dayEn: 'Fri', hours: 4.0, date: 'Dec 6' },
    { day: 'শনি', dayEn: 'Sat', hours: 6.2, date: 'Dec 7' },
    { day: 'রবি', dayEn: 'Sun', hours: 3.8, date: 'Dec 8' },
  ];

  const maxHours = Math.max(...weekData.map(d => d.hours));
  const totalHours = weekData.reduce((acc, d) => acc + d.hours, 0);
  const avgHours = (totalHours / weekData.length).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="relative rounded-2xl p-7 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6]" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-white mb-1">Weekly Analytics</h3>
                <p className="text-white/90 text-sm" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.75' }}>
                  সাপ্তাহিক বিশ্লেষণ
                </p>
              </div>
            </div>
            
            {/* Weekly Badge */}
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl">
              <p className="text-xs text-white font-semibold">This Week</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 mb-7">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-white/90" />
                <p className="text-xs text-white/90 font-medium">Total Hours</p>
              </div>
              <p className="text-3xl font-bold text-white">{totalHours.toFixed(1)}h</p>
              <p className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                মোট ঘণ্টা
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-white/90" />
                <p className="text-xs text-white/90 font-medium">Avg Daily</p>
              </div>
              <p className="text-3xl font-bold text-white">{avgHours}h</p>
              <p className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দৈনিক গড়
              </p>
            </motion.div>
          </div>

          {/* Bar Chart */}
          <div className="space-y-3">
            <div className="flex items-end justify-between gap-3 h-40">
              {weekData.map((day, index) => {
                const heightPercent = (day.hours / maxHours) * 100;
                return (
                  <motion.div 
                    key={index} 
                    className="flex-1 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-full flex flex-col items-center justify-end h-32 relative group">
                      {/* Label above bar */}
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="text-xs font-semibold mb-2 text-white/90 group-hover:text-white transition-colors"
                      >
                        {day.hours}h
                      </motion.span>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.6 + index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          transition: { duration: 0.2 }
                        }}
                        className="w-full bg-white/85 rounded-lg transition-all duration-300 hover:shadow-lg relative border-2 border-[#1D4ED8]"
                        style={{ minHeight: '8px' }}
                      >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1D4ED8]/10 to-transparent rounded-lg" />
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                        {day.day}
                      </p>
                      <p className="text-[10px] text-white/70">{day.dayEn}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Comparison Metric */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 pt-5 border-t border-white/20"
          >
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4">
              <TrendingUp className="w-5 h-5 text-white" />
              <p className="text-sm">
                <span className="font-bold text-white">↑ 12%</span>
                <span className="text-white/90 ml-1">from last week</span>
              </p>
            </div>
            <p className="text-center text-xs text-white/70 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.75' }}>
              গত সপ্তাহের তুলনায় ১২% বৃদ্ধি
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}