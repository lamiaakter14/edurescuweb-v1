import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  onRemove?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function Chip({
  children,
  selected = false,
  onSelect,
  onRemove,
  disabled = false,
  size = 'md',
  className = '',
}: ChipProps) {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
  };

  const Component = onSelect ? motion.button : 'div';

  return (
    <Component
      onClick={onSelect}
      disabled={disabled}
      whileHover={onSelect && !disabled ? { scale: 1.05 } : {}}
      whileTap={onSelect && !disabled ? { scale: 0.95 } : {}}
      className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 ${
        selected
          ? 'bg-[#1D4ED8] text-white shadow-sm'
          : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-[#F9FAFB] hover:border-[#CBD5E1]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${sizeClasses[size]} ${className}`}
    >
      <span>{children}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
        >
          <X className="w-3 h-3" strokeWidth={2.5} />
        </button>
      )}
    </Component>
  );
}
