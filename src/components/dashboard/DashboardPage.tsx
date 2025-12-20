import React from 'react';
import { MinimalHomePage } from './MinimalHomePage';

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
  // You can pass different states to test different variants
  state?: 'default-desktop-en' | 'loading' | 'empty-feed' | 'error' | 'all-goals-done' | 'empty-goals' | 'empty-study-group' | 'empty-recommendation' | 'mobile-en' | 'desktop-bn' | 'mobile-bn';
}

export function DashboardPage({ onNavigate, state = 'default-desktop-en' }: DashboardPageProps) {
  const lang = state === 'desktop-bn' || state === 'mobile-bn' ? 'bn' : 'en';
  return <MinimalHomePage onNavigate={onNavigate} lang={lang} />;
}