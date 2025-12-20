import React from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({ icon, title, description, action, className = '' }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center py-12 ${className}`}
    >
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#F9FAFB] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-[#0F172A] font-semibold text-lg mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-[#64748B] mb-6 max-w-md mx-auto">{description}</p>
      )}
      {action && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={action.onClick}
          className="px-6 py-3 bg-[#1D4ED8] text-white rounded-xl hover:bg-[#1E40AF] transition-colors text-sm font-semibold shadow-sm"
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  );
}
