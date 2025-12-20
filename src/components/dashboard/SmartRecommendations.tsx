import React, { useState } from 'react';
import { Sparkles, BookOpen, Calculator, FlaskConical, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function SmartRecommendations() {
  const [aiMode, setAiMode] = useState(true);

  const recommendations = [
    {
      icon: BookOpen,
      subject: 'Physics',
      subjectBn: 'পদার্থবিজ্ঞান',
      text: 'Focus on weak topics first',
      textBn: 'প্রথমে দুর্বল বিষয়ে মনোযোগ দিন',
      detail: 'You scored 68% on Optics. We recommend 2 more practice sessions.',
      detailBn: 'আলোকবিজ্ঞানে ৬৮% পেয়েছেন। আরও ২টি অনুশীলন সেশন সুপারিশ করছি।',
      color: '#1D4ED8',
      board: 'Dhaka Board'
    },
    {
      icon: Calculator,
      subject: 'Math',
      subjectBn: 'গণিত',
      text: 'Best study time is 9 AM',
      textBn: 'সেরা অধ্যয়নের সময় সকাল ৯টা',
      detail: 'Your performance peaks at 9 AM. Try scheduling Calculus then.',
      detailBn: 'সকাল ৯টায় আপনার পারফরম্যান্স সর্বোচ্চ। তখন ক্যালকুলাস পড়ুন।',
      color: '#059669',
      board: 'Chittagong Board'
    },
    {
      icon: FlaskConical,
      subject: 'Chemistry',
      subjectBn: 'রসায়ন',
      text: 'Practice more MCQs',
      textBn: 'আরো MCQ অনুশীলন করুন',
      detail: 'Increase MCQ accuracy by 15% with 30 mins daily practice.',
      detailBn: 'দৈনিক ৩০ মিনিট অনুশীলনে MCQ নির্ভুলতা ১৫% বাড়ান।',
      color: '#FBBF24',
      board: 'Rajshahi Board'
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-white rounded-2xl p-7 shadow-md border border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#1D4ED8] shadow-sm">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-[#0F172A]">Smart Recommendations</h3>
            <p className="text-sm text-[#64748B]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.75' }}>
              স্মার্ট সুপারিশ
            </p>
          </div>
        </div>

        {/* AI Mode Toggle */}
        <motion.button 
          onClick={() => setAiMode(!aiMode)}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
            aiMode 
              ? 'bg-[#1D4ED8] text-white shadow-md hover:bg-[#1E40AF]' 
              : 'bg-[#E2E8F0] text-[#64748B] hover:bg-[#CBD5E1]'
          }`}
        >
          {aiMode ? '✨ AI Mode' : 'AI Off'}
        </motion.button>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            whileHover={{ x: 4 }}
            className="p-4 rounded-xl border-2 border-[#E2E8F0] hover:border-[#1D4ED8]/30 hover:bg-[#F9FAFB] transition-all duration-200 group"
          >
            <div className="flex items-start gap-3">
              {/* Colored Icon Circle */}
              <div 
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center mt-0.5 shadow-sm"
                style={{ backgroundColor: `${rec.color}20` }}
              >
                <rec.icon className="w-5 h-5" style={{ color: rec.color }} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span 
                    className="px-3 py-1 rounded-lg text-xs font-bold text-white shadow-sm"
                    style={{ backgroundColor: rec.color }}
                  >
                    {rec.subject}
                  </span>
                  <span className="text-xs text-[#94A3B8] font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    {rec.subjectBn}
                  </span>
                  <span className="px-2 py-0.5 bg-[#E2E8F0] text-[#64748B] text-xs rounded-md font-medium">
                    {rec.board}
                  </span>
                </div>
                <h4 className="font-semibold text-[#0F172A] mb-1">{rec.text}</h4>
                <p className="text-xs text-[#94A3B8] mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.75' }}>
                  {rec.textBn}
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed mb-1">{rec.detail}</p>
                <p className="text-xs text-[#94A3B8] leading-relaxed" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.75' }}>
                  {rec.detailBn}
                </p>
              </div>

              {/* Trend Indicator */}
              <div className="flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#E2E8F0] flex items-center justify-center group-hover:bg-[#1D4ED8]/10 transition-all duration-200">
                  <TrendingUp className="w-4 h-4 text-[#94A3B8] group-hover:text-[#1D4ED8] transition-colors duration-200" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full mt-5 py-3 text-sm font-semibold text-[#1D4ED8] hover:bg-[#EEF4FF] rounded-xl transition-all duration-200 border-2 border-dashed border-[#E2E8F0] hover:border-[#1D4ED8]/30"
      >
        View All Recommendations →
      </motion.button>
    </motion.div>
  );
}