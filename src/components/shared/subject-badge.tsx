'use client';

import React from 'react';
import { Subject } from '@/lib/types';
import { getSubjectInfo } from '@/lib/constants';
import { useLanguage } from '@/lib/store';
import { cn } from '@/lib/utils';

interface SubjectBadgeProps {
  subject: Subject;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SubjectBadge({ subject, size = 'md', className }: SubjectBadgeProps) {
  const language = useLanguage();
  const subjectInfo = getSubjectInfo(subject);
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg font-semibold',
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: `${subjectInfo.color}20`,
        color: subjectInfo.color,
      }}
    >
      {language === 'bn' ? subjectInfo.labelBn : subjectInfo.label}
    </span>
  );
}
