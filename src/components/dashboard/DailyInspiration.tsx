import React, { useEffect, useState } from 'react';
import { Feather, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function DailyInspiration() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="relative rounded-2xl p-5 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Gradient Overlay - Brand Blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#059669]" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-3">
          <motion.div 
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-xl bg-white/20 backdrop-blur-sm"
          >
            <Feather className="w-5 h-5 text-white" strokeWidth={2} />
          </motion.div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white text-base font-semibold">Daily Inspiration</h3>
              <Sparkles className="w-4 h-4 text-white/80" strokeWidth={2} />
            </div>
            <p className="text-white/90 text-xs" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
              দৈনিক অনুপ্রেরণা
            </p>
          </div>
        </div>

        <motion.blockquote 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white italic mb-2 leading-relaxed text-sm"
        >
          &ldquo;Success is not final, failure is not fatal: It is the courage to continue that counts.&rdquo;
        </motion.blockquote>
        
        <p className="text-white/90 text-xs font-medium mb-3">
          — Winston Churchill
        </p>

        <div className="pt-3 border-t border-white/20">
          <p className="text-white/90 text-xs leading-relaxed" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.8' }}>
            &ldquo;সাফল্য চূড়ান্ত নয়, ব্যর্থতা মারাত্মক নয়: এটি চালিয়ে যাওয়ার সাহসই গুরুত্বপূর্ণ।&rdquo;
          </p>
        </div>
      </div>
    </motion.div>
  );
}