import React from 'react';
import { Calendar, MapPin, Clock, Award } from 'lucide-react';
import { RingProgress } from '../shared/RingProgress';
import { motion } from 'framer-motion';

export function UpcomingExam() {
  const exams = [
    {
      subject: 'HSC Chemistry Exam',
      subjectBn: 'এইচএসসি রসায়ন পরীক্ষা',
      date: 'Dec 23',
      dateBn: '২৩ ডিসেম্বর',
      daysLeft: 15,
      board: 'Dhaka Board',
      boardBn: 'ঢাকা বোর্ড',
      time: '10:00 AM',
      urgency: 'medium',
      progress: 65
    },
    {
      subject: 'HSC Math Exam',
      subjectBn: 'এইচএসসি গণিত পরীক্ষা',
      date: 'Dec 29',
      dateBn: '২৯ ডিসেম্বর',
      daysLeft: 21,
      board: 'Dhaka Board',
      boardBn: 'ঢাকা বোর্ড',
      time: '10:00 AM',
      urgency: 'low',
      progress: 45
    },
    {
      subject: 'Physics Final',
      subjectBn: 'পদার্থবিজ্ঞান চূড়ান্ত',
      date: 'Jan 5',
      dateBn: '৫ জানুয়ারি',
      daysLeft: 28,
      board: 'Rajshahi Board',
      boardBn: 'রাজশাহী বোর্ড',
      time: '2:00 PM',
      urgency: 'low',
      progress: 30
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return '#DC2626';
      case 'medium': return '#FBBF24';
      case 'low': return '#059669';
      default: return '#1D4ED8';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-white rounded-2xl p-6 shadow-md border-[0.5px] border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#1D4ED8]">
            <Calendar className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[#0F172A] text-base font-semibold">Upcoming Exams</h3>
            <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              আসন্ন পরীক্ষা
            </p>
          </div>
        </div>
        
        <button className="text-xs text-[#1D4ED8] font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {exams.map((exam, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="p-5 bg-[#F9FAFB] rounded-xl hover:shadow-md transition-all duration-200 border-[0.5px] border-[#E2E8F0]"
          >
            <div className="flex items-start gap-4">
              {/* Countdown Ring - More prominent */}
              <div className="flex-shrink-0">
                <RingProgress 
                  progress={exam.progress}
                  size={72}
                  strokeWidth={6}
                  color={getUrgencyColor(exam.urgency)}
                  backgroundColor="#E2E8F0"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#0F172A]">{exam.daysLeft}</p>
                    <p className="text-[10px] text-[#64748B] font-semibold">days</p>
                  </div>
                </RingProgress>
              </div>

              {/* Exam Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-[#0F172A] text-sm font-semibold mb-1">{exam.subject}</h4>
                    <p className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
                      {exam.subjectBn}
                    </p>
                  </div>
                  
                  {/* Board Badge - Reduced dominance */}
                  <div className="px-2 py-0.5 bg-[#059669]/5 rounded-md border border-[#059669]/10">
                    <p className="text-[10px] font-medium text-[#059669]">{exam.board}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#64748B] mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exam.time}</span>
                  </div>
                </div>

                {/* Progress Bar - Thicker */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-[#64748B] font-medium">Preparation</span>
                    <span className="text-xs font-bold text-[#0F172A]">{exam.progress}%</span>
                  </div>
                  <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${exam.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: getUrgencyColor(exam.urgency) }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}