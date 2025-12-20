import React, { useState } from 'react';
import { EmergencyRequestsList } from '../emergency/EmergencyRequestsList';

interface EmergencyPageProps {
  lang?: 'en' | 'bn';
  onNavigate?: (page: string) => void;
}

export function EmergencyPage({ lang = 'en', onNavigate }: EmergencyPageProps) {
  return <EmergencyRequestsList lang={lang} onNavigate={onNavigate} />;
}