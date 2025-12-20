// Core type definitions for Edurescue

export type Subject = 'physics' | 'chemistry' | 'math' | 'biology' | 'english' | 'bangla' | 'ict';
export type Board = 'dhaka' | 'rajshahi' | 'chittagong' | 'comilla' | 'jessore' | 'barisal' | 'sylhet' | 'dinajpur';
export type Urgency = 'normal' | 'urgent' | 'exam';
export type ProblemStatus = 'open' | 'answered' | 'solved';

export interface User {
  id: string;
  name: string;
  nameBn: string;
  avatar?: string;
  class: string;
  board: Board;
  subjects: Subject[];
  points: number;
  level: number;
  streak: number;
}

export interface Problem {
  id: string;
  title: string;
  titleBn?: string;
  description: string;
  descriptionBn?: string;
  details?: string;
  subject: Subject;
  board: Board;
  urgency: Urgency;
  tags: string[];
  author: {
    id: string;
    name: string;
    nameBn: string;
    avatar?: string;
    class: string;
    board: Board;
  };
  createdAt: Date;
  updatedAt: Date;
  isSolved: boolean;
  status: ProblemStatus;
  replies: Reply[];
  upvotes: number;
  saves: number;
  viewCount: number;
}

export interface Reply {
  id: string;
  content: string;
  contentBn?: string;
  author: User;
  createdAt: Date;
  isHelpful: boolean;
  helpfulCount: number;
}

export interface SubjectProgress {
  completed: number;
  total: number;
  accuracy: number;
  weakTopics: string[];
  weakTopicsBn?: string[];
  lastPracticed: Date;
}

export interface UserProgress {
  overall: {
    completion: number;
    streak: number;
    points: number;
    level: number;
  };
  subjects: Record<Subject, SubjectProgress>;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
  unlockedAt?: Date;
  progress?: number;
  target?: number;
}

export interface StudyGroup {
  id: string;
  name: string;
  nameBn: string;
  subject: Subject;
  description: string;
  descriptionBn: string;
  memberCount: number;
  onlineCount: number;
  nextSession?: Date;
  isJoined: boolean;
  tags: string[];
  avatar?: string;
}

export interface Goal {
  id: string;
  title: string;
  titleBn: string;
  subject?: Subject;
  targetMinutes: number;
  completedMinutes: number;
  isCompleted: boolean;
  dueDate?: Date;
}

// Filter types
export interface ProblemFilters {
  search: string;
  subject: Subject | 'all';
  board: Board | 'all';
  urgency: Urgency | 'all';
  status: ProblemStatus | 'all';
  sortBy: 'recent' | 'popular' | 'unanswered';
}

// Form types
export interface CreateProblemInput {
  title: string;
  titleBn?: string;
  description: string;
  descriptionBn?: string;
  details?: string;
  subject: Subject;
  board: Board;
  urgency: Urgency;
  tags: string[];
}

export interface CreateReplyInput {
  problemId: string;
  content: string;
  contentBn?: string;
}
