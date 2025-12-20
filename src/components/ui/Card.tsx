import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, padding = 'md', onClick }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
  };

  const Component = onClick ? motion.div : 'div';

  return (
    <Component
      onClick={onClick}
      whileHover={hover && onClick ? { scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' } : {}}
      className={`bg-white rounded-2xl shadow-md border-[0.5px] border-[#E2E8F0] ${
        hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
      } ${paddingClasses[padding]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
