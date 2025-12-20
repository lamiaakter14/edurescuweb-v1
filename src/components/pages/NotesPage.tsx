import React from 'react';
import { SimplifiedNotesPage } from './SimplifiedNotesPage';

interface NotesPageProps {
  lang?: 'en' | 'bn';
  onNavigate?: (page: string) => void;
}

export function NotesPage({ lang = 'en', onNavigate }: NotesPageProps) {
  return <SimplifiedNotesPage lang={lang} onNavigate={onNavigate} />;
}