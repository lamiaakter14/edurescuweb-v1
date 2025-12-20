import React from 'react';
import { Siren, Clock, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmergencyBannerProps {
  onNavigateToEmergency?: () => void;
}

export function EmergencyBanner({ onNavigateToEmergency }: EmergencyBannerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl p-5 overflow-hidden shadow-lg"
    >
      {/* Gradient Background with Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6]" />
      
      {/* Spotlight Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#1E40AF]/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
                  <Siren className="w-7 h-7 text-white relative z-10" />
                </div>
              </motion.div>
              <div>
                <h2 className="text-white mb-1 text-lg font-semibold">Academic Emergency</h2>
                <p className="text-white/95 text-sm" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.6' }}>
                  জরুরি শিক্ষা সহায়তা সেবা
                </p>
              </div>
            </div>
            
            <p className="text-white/95 mb-4 max-w-2xl leading-relaxed text-sm">
              পরীক্ষার প্রস্তুতিতে আটকে গেছেন? তাৎক্ষণিক সাহায্য প্রয়োজন? এখনই বিশেষজ্ঞ শিক্ষকদের সাথে সংযুক্ত হন!
            </p>

            <div className="flex items-center gap-6 mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-white/95 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl"
              >
                <Users className="w-4 h-4" />
                <div>
                  <span className="font-semibold text-sm">৩২ জন</span>
                  <span className="text-xs ml-1">শিক্ষক অনলাইনে</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-white/95 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl"
              >
                <Clock className="w-4 h-4" />
                <div>
                  <span className="font-semibold text-sm">৮ মিনিট</span>
                  <span className="text-xs ml-1">গড় প্রতিক্রিয়া সময়</span>
                </div>
              </motion.div>
            </div>

            <motion.button 
              onClick={onNavigateToEmergency}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#DC2626] text-white rounded-xl font-semibold hover:bg-[#B91C1C] hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2 shadow-lg text-sm"
            >
              <span>এখনই জরুরি সাহায্য নিন</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <div className="mt-3 flex items-center gap-2">
              <div className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white/90 text-xs font-medium">
                bKash / Nagad গ্রহণযোগ্য
              </div>
              <div className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white/90 text-xs font-medium">
                ২৪/৭ সেবা
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Siren className="w-12 h-12 text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}