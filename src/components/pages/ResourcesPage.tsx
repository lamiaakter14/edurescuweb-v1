import React from 'react';
import { SimplifiedResourcesPage } from './SimplifiedResourcesPage';

interface ResourcesPageProps {
  lang?: 'en' | 'bn';
}

export function ResourcesPage({ lang = 'en' }: ResourcesPageProps) {
  return <SimplifiedResourcesPage lang={lang} />;
}