'use client';

import React from 'react';
import { Board } from '@/lib/types';
import { getBoardInfo } from '@/lib/constants';
import { useLanguage } from '@/lib/store';
import { cn } from '@/lib/utils';

interface BoardBadgeProps {
  board: Board;
  size?: 'sm' | 'md';
  className?: string;
}

export function BoardBadge({ board, size = 'md', className }: BoardBadgeProps) {
  const language = useLanguage();
  const boardInfo = getBoardInfo(board);
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg font-medium bg-gray-100 text-gray-700',
        sizeClasses[size],
        className
      )}
    >
      {language === 'bn' ? boardInfo.labelBn : boardInfo.label}
    </span>
  );
}
