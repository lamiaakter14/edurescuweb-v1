import React from 'react';
import { Users, Clock, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface StudyGroupProps {
  variant?: 'default' | 'empty';
}

export function StudyGroup({ variant = 'default' }: StudyGroupProps) {
  const groups = [
    {
      name: 'HSC Physics 2025',
      nameBn: 'এইচএসসি পদার্থবিজ্ঞান ২০২৫',
      members: 24,
      active: true,
      nextSession: 'Today 7 PM',
    },
    {
      name: 'Math Problem Solving',
      nameBn: 'গণিত সমস্যা সমাধান',
      members: 18,
      active: false,
      nextSession: 'Tomorrow 5 PM',
    },
  ];

  // Empty State
  if (variant === 'empty') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-2xl p-5 shadow-md border-[0.5px] border-[#E2E8F0]"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[#1D4ED8]">
            <Users className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[#0F172A] text-base font-semibold">Study Group</h3>
            <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              অধ্যয়ন দল
            </p>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F9FAFB] flex items-center justify-center">
            <Users className="w-10 h-10 text-[#94A3B8]" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-[#64748B] mb-2">No active groups yet</p>
          <p className="text-xs text-[#94A3B8] mb-4">for your board</p>
          <button className="px-4 py-2 bg-[#1D4ED8] text-white rounded-lg text-xs font-semibold hover:bg-[#1E40AF] transition-colors">
            Join More Groups
          </button>
        </div>
      </motion.div>
    );
  }

  // Default State
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white rounded-2xl p-5 shadow-md border-[0.5px] border-[#E2E8F0]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-[#1D4ED8]">
          <Users className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-[#0F172A] text-base font-semibold">Study Group</h3>
          <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
            অধ্যয়ন দল
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {groups.map((group, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4 }}
            className="p-4 bg-[#F9FAFB] rounded-xl hover:bg-[#EEF4FF] transition-all duration-200 border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-[#0F172A] mb-0.5">{group.name}</h4>
                <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
                  {group.nameBn}
                </p>
              </div>
              {group.active && (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#DCFCE7] rounded-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                  <span className="text-[10px] text-[#059669] font-semibold">Live</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-[#64748B]">
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" strokeWidth={2} />
                <span className="font-medium">{group.members} members</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                <span className="font-medium">{group.nextSession}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 py-2.5 text-xs font-semibold text-[#1D4ED8] hover:bg-[#EEF4FF] rounded-xl transition-all duration-200 border border-dashed border-[#E2E8F0]">
        + Join More Groups
      </button>
    </motion.div>
  );
}