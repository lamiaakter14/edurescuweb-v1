// Constants for Edurescue

import { Board, Subject } from './types';

export const SUBJECTS: { value: Subject; label: string; labelBn: string; color: string }[] = [
  { value: 'physics', label: 'Physics', labelBn: 'পদার্থবিজ্ঞান', color: 'var(--physics)' },
  { value: 'chemistry', label: 'Chemistry', labelBn: 'রসায়ন', color: 'var(--chemistry)' },
  { value: 'math', label: 'Mathematics', labelBn: 'গণিত', color: 'var(--math)' },
  { value: 'biology', label: 'Biology', labelBn: 'জীববিজ্ঞান', color: 'var(--biology)' },
  { value: 'english', label: 'English', labelBn: 'ইংরেজি', color: 'var(--english)' },
  { value: 'bangla', label: 'Bangla', labelBn: 'বাংলা', color: 'var(--bangla)' },
  { value: 'ict', label: 'ICT', labelBn: 'আইসিটি', color: 'var(--ict)' },
];

export const BOARDS: { value: Board; label: string; labelBn: string }[] = [
  { value: 'dhaka', label: 'Dhaka Board', labelBn: 'ঢাকা বোর্ড' },
  { value: 'rajshahi', label: 'Rajshahi Board', labelBn: 'রাজশাহী বোর্ড' },
  { value: 'chittagong', label: 'Chittagong Board', labelBn: 'চট্টগ্রাম বোর্ড' },
  { value: 'comilla', label: 'Comilla Board', labelBn: 'কুমিল্লা বোর্ড' },
  { value: 'jessore', label: 'Jessore Board', labelBn: 'যশোর বোর্ড' },
  { value: 'barisal', label: 'Barisal Board', labelBn: 'বরিশাল বোর্ড' },
  { value: 'sylhet', label: 'Sylhet Board', labelBn: 'সিলেট বোর্ড' },
  { value: 'dinajpur', label: 'Dinajpur Board', labelBn: 'দিনাজপুর বোর্ড' },
];

export const URGENCY_LEVELS = [
  { value: 'normal' as const, label: 'Normal', labelBn: 'সাধারণ', color: 'bg-blue-100 text-blue-700' },
  { value: 'urgent' as const, label: 'Urgent', labelBn: 'জরুরি', color: 'bg-orange-100 text-orange-700' },
  { value: 'exam' as const, label: 'Exam', labelBn: 'পরীক্ষা', color: 'bg-red-100 text-red-700' },
];

export const PROBLEM_STATUS = [
  { value: 'open' as const, label: 'Open', labelBn: 'খোলা', color: 'bg-gray-100 text-gray-700' },
  { value: 'answered' as const, label: 'Answered', labelBn: 'উত্তরিত', color: 'bg-blue-100 text-blue-700' },
  { value: 'solved' as const, label: 'Solved', labelBn: 'সমাধান', color: 'bg-green-100 text-green-700' },
];

export const CLASS_OPTIONS = [
  { value: '9', label: 'Class 9', labelBn: 'নবম শ্রেণী' },
  { value: '10', label: 'Class 10', labelBn: 'দশম শ্রেণী' },
  { value: '11', label: 'Class 11', labelBn: 'একাদশ শ্রেণী' },
  { value: '12', label: 'Class 12', labelBn: 'দ্বাদশ শ্রেণী' },
  { value: 'hsc', label: 'HSC', labelBn: 'এইচএসসি' },
  { value: 'university', label: 'University', labelBn: 'বিশ্ববিদ্যালয়' },
];

// Helper functions
export function getSubjectInfo(subject: Subject) {
  return SUBJECTS.find(s => s.value === subject) || SUBJECTS[0];
}

export function getBoardInfo(board: Board) {
  return BOARDS.find(b => b.value === board) || BOARDS[0];
}

export function getUrgencyInfo(urgency: 'normal' | 'urgent' | 'exam') {
  return URGENCY_LEVELS.find(u => u.value === urgency) || URGENCY_LEVELS[0];
}

export function getStatusInfo(status: 'open' | 'answered' | 'solved') {
  return PROBLEM_STATUS.find(s => s.value === status) || PROBLEM_STATUS[0];
}
