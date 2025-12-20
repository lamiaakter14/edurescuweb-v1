'use client';

import React from 'react';
import { cn, percentage } from '@/lib/utils';

interface ProgressBarProps {
  label?: string;
  value: number;
  max: number;
  color?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProgressBar({
  label,
  value,
  max,
  color = 'var(--primary)',
  showPercentage = true,
  size = 'md',
  className,
}: ProgressBarProps) {
  const percent = percentage(value, max);
  
  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={cn('w-full', className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercentage && <span className="text-sm font-semibold text-gray-900">{percent}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-gray-100 rounded-full overflow-hidden', heightClasses[size])}>
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
