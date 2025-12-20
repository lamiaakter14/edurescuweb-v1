'use client';

import React from 'react';
import { timeAgo } from '@/lib/utils';
import { useLanguage } from '@/lib/store';

interface TimeAgoProps {
  date: Date;
  className?: string;
}

export function TimeAgo({ date, className = '' }: TimeAgoProps) {
  const language = useLanguage();
  
  return (
    <time dateTime={date.toISOString()} className={className}>
      {timeAgo(date, language)}
    </time>
  );
}
