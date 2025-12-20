import React from 'react';
import { Sparkles, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface TopRecommendationProps {
  variant?: 'default' | 'empty';
}

export function TopRecommendation({ variant = 'default' }: TopRecommendationProps) {
  const recommendation = {
    icon: BookOpen,
    subject: 'Physics',
    subjectBn: 'পদার্থবিজ্ঞান',
    text: 'Focus on weak topics first',
    textBn: 'প্রথমে দুর্বল বিষয়ে মনোযোগ দিন',
    detail: 'You scored 68% on Optics. We recommend 2 more practice sessions.',
    detailBn: 'আলোকবিজ্ঞানে ৬৮% পেয়েছেন। আরও ২টি অনুশীলন সেশন সুপারিশ করছি।',
    color: '#1D4ED8',
    board: 'Dhaka Board'
  };

  // Empty State
  if (variant === 'empty') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white rounded-2xl p-5 shadow-md border-[0.5px] border-[#E2E8F0]"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[#1D4ED8]">
            <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[#0F172A] text-base font-semibold">Best Recommendation</h3>
            <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              আজকের সেরা সুপারিশ
            </p>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F9FAFB] flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-[#94A3B8]" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-[#64748B] mb-1">No recommendation today yet</p>
          <p className="text-xs text-[#94A3B8]">Check back later for personalized tips</p>
        </div>
      </motion.div>
    );
  }

  // Default State
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-md border-[0.5px] border-[#E2E8F0]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-[#1D4ED8]">
          <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-[#0F172A] text-base font-semibold">Best Recommendation</h3>
          <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
            আজকের সেরা সুপারিশ
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl border-[0.5px] border-[#E2E8F0] bg-[#F9FAFB] hover:bg-[#EEF4FF]/50 transition-all duration-200">
        <div className="flex items-start gap-3">
          {/* Colored Icon Circle */}
          <div 
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${recommendation.color}20` }}
          >
            <recommendation.icon className="w-5 h-5" style={{ color: recommendation.color }} strokeWidth={2} />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
                style={{ backgroundColor: recommendation.color }}
              >
                {recommendation.subject}
              </span>
              <span className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                {recommendation.subjectBn}
              </span>
            </div>
            <h4 className="font-medium text-sm text-[#0F172A] mb-1">{recommendation.text}</h4>
            <p className="text-xs text-[#94A3B8] mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              {recommendation.textBn}
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed">{recommendation.detail}</p>
          </div>

          {/* Trend Indicator */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-[#1D4ED8]/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#1D4ED8]" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}