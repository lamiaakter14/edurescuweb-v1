import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatChipProps {
  icon: LucideIcon;
  label: string;
  labelBn?: string;
  value: string | number;
  gradient?: string;
  iconColor?: string;
  className?: string;
}

export function StatChip({ icon: Icon, label, labelBn, value, gradient, iconColor, className = '' }: StatChipProps) {
  const chipStyle = gradient 
    ? { background: gradient } 
    : {};

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      style={chipStyle}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-sm">
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-white/90 text-sm font-medium">{label}</p>
        {labelBn && (
          <p className="text-white/75 text-xs" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.75' }}>
            {labelBn}
          </p>
        )}
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
    </motion.div>
  );
}