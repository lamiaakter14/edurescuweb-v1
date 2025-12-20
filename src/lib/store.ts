// Zustand store for global state management

import { create } from 'zustand';
import { Problem, User, UserProgress, StudyGroup, Goal, ProblemFilters } from './types';
import { mockUser, mockProblems, mockProgress, mockStudyGroups, mockGoals } from './mock-data';

interface AppState {
  // User state
  user: User;
  
  // Problems state
  problems: Problem[];
  filters: ProblemFilters;
  
  // Progress state
  progress: UserProgress;
  
  // Study groups state
  studyGroups: StudyGroup[];
  
  // Goals state
  goals: Goal[];
  
  // UI state
  language: 'en' | 'bn';
  sidebarCollapsed: boolean;
  
  // Actions
  setLanguage: (lang: 'en' | 'bn') => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  
  // Problem actions
  addProblem: (problem: Problem) => void;
  updateProblem: (id: string, updates: Partial<Problem>) => void;
  toggleProblemSave: (id: string) => void;
  toggleProblemUpvote: (id: string) => void;
  setFilters: (filters: Partial<ProblemFilters>) => void;
  resetFilters: () => void;
  
  // Study group actions
  toggleGroupJoin: (id: string) => void;
  
  // Goal actions
  updateGoal: (id: string, completedMinutes: number) => void;
  toggleGoalComplete: (id: string) => void;
}

const initialFilters: ProblemFilters = {
  search: '',
  subject: 'all',
  board: 'all',
  urgency: 'all',
  status: 'all',
  sortBy: 'recent',
};

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  user: mockUser,
  problems: mockProblems,
  filters: initialFilters,
  progress: mockProgress,
  studyGroups: mockStudyGroups,
  goals: mockGoals,
  language: 'en',
  sidebarCollapsed: false,
  
  // Actions
  setLanguage: (lang) => set({ language: lang }),
  
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  
  addProblem: (problem) =>
    set((state) => ({
      problems: [problem, ...state.problems],
    })),
  
  updateProblem: (id, updates) =>
    set((state) => ({
      problems: state.problems.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    })),
  
  toggleProblemSave: (id) =>
    set((state) => ({
      problems: state.problems.map((p) =>
        p.id === id
          ? { ...p, saves: p.saves + 1 } // In real app, track user's saved problems
          : p
      ),
    })),
  
  toggleProblemUpvote: (id) =>
    set((state) => ({
      problems: state.problems.map((p) =>
        p.id === id
          ? { ...p, upvotes: p.upvotes + 1 } // In real app, track user's upvotes
          : p
      ),
    })),
  
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
  
  resetFilters: () => set({ filters: initialFilters }),
  
  toggleGroupJoin: (id) =>
    set((state) => ({
      studyGroups: state.studyGroups.map((g) =>
        g.id === id
          ? {
              ...g,
              isJoined: !g.isJoined,
              memberCount: g.isJoined ? g.memberCount - 1 : g.memberCount + 1,
            }
          : g
      ),
    })),
  
  updateGoal: (id, completedMinutes) =>
    set((state) => ({
      goals: state.goals.map((g) =>
        g.id === id
          ? {
              ...g,
              completedMinutes,
              isCompleted: completedMinutes >= g.targetMinutes,
            }
          : g
      ),
    })),
  
  toggleGoalComplete: (id) =>
    set((state) => ({
      goals: state.goals.map((g) =>
        g.id === id
          ? {
              ...g,
              isCompleted: !g.isCompleted,
              completedMinutes: !g.isCompleted ? g.targetMinutes : 0,
            }
          : g
      ),
    })),
}));

// Selector hooks for better performance
export const useUser = () => useAppStore((state) => state.user);
export const useProblems = () => useAppStore((state) => state.problems);
export const useFilters = () => useAppStore((state) => state.filters);
export const useProgress = () => useAppStore((state) => state.progress);
export const useStudyGroups = () => useAppStore((state) => state.studyGroups);
export const useGoals = () => useAppStore((state) => state.goals);
export const useLanguage = () => useAppStore((state) => state.language);
