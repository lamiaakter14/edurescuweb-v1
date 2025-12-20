import React from 'react';
import { StickyNote, Calendar, AlertCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function QuickActions() {
  const actions = [
    { icon: AlertCircle, label: 'Emergency Help', labelBn: 'জরুরি সহায়তা', color: '#DC2626', bgColor: '#FEE2E2' },
    { icon: StickyNote, label: 'Notes', labelBn: 'নোট', color: '#1D4ED8', bgColor: '#EEF4FF' },
    { icon: Calendar, label: 'Calendar', labelBn: 'ক্যালেন্ডার', color: '#059669', bgColor: '#DCFCE7' },
    { icon: BookOpen, label: 'Resources', labelBn: 'রিসোর্স', color: '#1D4ED8', bgColor: '#EEF4FF' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-white rounded-2xl p-5 shadow-md border-[0.5px] border-[#E2E8F0]"
    >
      <div className="mb-4">
        <h3 className="text-[#0F172A] text-base font-semibold">Quick Actions</h3>
        <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
          দ্রুত কাজ
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center gap-2 p-3 rounded-xl border-[0.5px] border-[#E2E8F0] hover:shadow-md transition-all duration-200"
            style={{ backgroundColor: action.bgColor }}
          >
            <div 
              className="p-2.5 rounded-xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <action.icon className="w-6 h-6" style={{ color: action.color }} strokeWidth={2} />
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#0F172A] text-xs">{action.label}</p>
              <p className="text-[10px] text-[#64748B]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                {action.labelBn}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}