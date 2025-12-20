import React from 'react';

interface GradientCardProps {
  children: React.ReactNode;
  gradient?: 'terracotta' | 'sage' | 'gold' | 'emergency' | 'custom';
  customGradient?: string;
  className?: string;
  hover?: boolean;
}

export function GradientCard({ 
  children, 
  gradient = 'terracotta', 
  customGradient,
  className = '',
  hover = true 
}: GradientCardProps) {
  const gradientClasses = {
    terracotta: 'gradient-terracotta',
    sage: 'gradient-sage',
    gold: 'gradient-gold',
    emergency: 'gradient-warm-emergency',
    custom: ''
  };

  const gradientClass = gradient === 'custom' && customGradient 
    ? '' 
    : gradientClasses[gradient];

  const style = gradient === 'custom' && customGradient 
    ? { background: customGradient } 
    : {};

  return (
    <div 
      className={`rounded-2xl p-5 text-white ${gradientClass} ${hover ? 'card-hover' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}