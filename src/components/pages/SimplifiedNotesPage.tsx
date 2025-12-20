import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Zap, User } from 'lucide-react';
import { Button } from '../ui/button';
import { EmptyState } from '../ui/EmptyState';

interface SimplifiedNotesPageProps {
  lang?: 'en' | 'bn';
  onNavigate?: (page: string) => void;
}

interface Note {
  id: number;
  subject: string;
  title: string;
  snippet: string;
  fullContent: string;
  source: 'AI' | 'Expert';
  sourceName: string;
  dateSaved: string;
}

export function SimplifiedNotesPage({ lang = 'en', onNavigate }: SimplifiedNotesPageProps) {
  const isBn = lang === 'bn';
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const text = {
    title: isBn ? 'আমার নোট' : 'My Notes',
    subtitle: isBn ? 'এআই এবং বিশেষজ্ঞদের থেকে সংরক্ষিত ব্যাখ্যা' : 'Saved explanations from AI and experts',
    view: isBn ? 'দেখুন' : 'View',
    delete: isBn ? 'মুছুন' : 'Delete',
    close: isBn ? 'বন্ধ করুন' : 'Close',
    source: isBn ? 'উৎস' : 'Source',
    savedOn: isBn ? 'সংরক্ষিত' : 'Saved on',
    emptyTitle: isBn ? 'এখনও কোন সংরক্ষিত নোট নেই' : 'No saved notes yet',
    emptyDesc: isBn ? 'এআই চ্যাট বা জরুরি সমাধান থেকে ব্যাখ্যা সংরক্ষণ করুন' : 'Save explanations from AI chat or emergency solutions',
    goToAI: isBn ? 'এআই সহায়কে যান' : 'Go to AI Assistant',
  };

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      Physics: '#3B82F6',
      Chemistry: '#10B981',
      Math: '#8B5CF6',
      Biology: '#F59E0B',
      ICT: '#6B7280',
      English: '#EF4444',
      Bangla: '#F97316',
    };
    return colors[subject] || '#6B7280';
  };

  const notes: Note[] = [
    {
      id: 1,
      subject: 'Physics',
      title: 'Newton\'s Laws of Motion - Complete Explanation',
      snippet: 'Newton\'s First Law states that an object at rest stays at rest and an object in motion stays in motion...',
      fullContent: `Newton's First Law states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.

Newton's Second Law: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. F = ma

Newton's Third Law: For every action, there is an equal and opposite reaction.

These laws form the foundation of classical mechanics and are essential for understanding motion and forces.`,
      source: 'AI',
      sourceName: 'EduRescue AI',
      dateSaved: '2 hours ago',
    },
    {
      id: 2,
      subject: 'Chemistry',
      title: 'SN1 vs SN2 Reaction Mechanisms',
      snippet: 'SN1 reactions proceed through a carbocation intermediate, while SN2 reactions occur in a single step...',
      fullContent: `SN1 (Substitution Nucleophilic Unimolecular):
- Two-step mechanism
- Forms carbocation intermediate  
- Rate depends only on substrate concentration
- Occurs with tertiary alkyl halides
- Produces racemic mixture (both R and S)

SN2 (Substitution Nucleophilic Bimolecular):
- One-step mechanism
- No intermediate formed
- Rate depends on both substrate and nucleophile
- Occurs with primary alkyl halides
- Results in inversion of configuration

Key factors: Solvent polarity, steric hindrance, leaving group ability.`,
      source: 'Expert',
      sourceName: 'Prof. Akter',
      dateSaved: '1 day ago',
    },
    {
      id: 3,
      subject: 'Math',
      title: 'Integration by Parts - Step-by-Step Method',
      snippet: 'Integration by parts is based on the product rule for differentiation. Formula: ∫u dv = uv - ∫v du...',
      fullContent: `Integration by Parts Formula: ∫u dv = uv - ∫v du

Steps:
1. Identify u and dv from the integral
2. Calculate du (derivative of u)
3. Calculate v (integral of dv)
4. Apply the formula: uv - ∫v du
5. Simplify and evaluate the remaining integral

LIATE Rule for choosing u:
L - Logarithmic
I - Inverse trig
A - Algebraic
T - Trigonometric
E - Exponential

Example: ∫x·e^x dx
Let u = x, dv = e^x dx
Then du = dx, v = e^x
Result: x·e^x - ∫e^x dx = x·e^x - e^x + C`,
      source: 'AI',
      sourceName: 'EduRescue AI',
      dateSaved: '3 days ago',
    },
  ];

  if (notes.length === 0) {
    return (
      <main className="max-w-[1000px] mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-semibold text-[#0F172A] mb-2">{text.title}</h1>
          <p className="text-sm text-[#64748B]">{text.subtitle}</p>
        </motion.div>

        <EmptyState
          icon={<FileText className="w-16 h-16 text-[#94A3B8]" strokeWidth={1.5} />}
          title={text.emptyTitle}
          description={text.emptyDesc}
          action={{
            label: text.goToAI,
            onClick: () => onNavigate?.('ai-assistant')
          }}
        />
      </main>
    );
  }

  return (
    <main className="max-w-[1000px] mx-auto px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-[#0F172A] mb-2">{text.title}</h1>
        <p className="text-sm text-[#64748B]">{text.subtitle}</p>
      </motion.div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0] hover:shadow-md hover:border-[#1D4ED8]/20 transition-all duration-200 cursor-pointer"
            onClick={() => setSelectedNote(note)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Subject Badge */}
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white mb-2"
                  style={{ backgroundColor: getSubjectColor(note.subject) }}
                >
                  {note.subject}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">
                  {note.title}
                </h3>

                {/* Snippet */}
                <p className="text-sm text-[#64748B] mb-3 line-clamp-2">
                  {note.snippet}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                  {note.source === 'AI' ? (
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {note.sourceName}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {note.sourceName}
                    </span>
                  )}
                  <span>•</span>
                  <span>{note.dateSaved}</span>
                </div>
              </div>

              {/* View Button */}
              <Button variant="secondary" size="sm" onClick={() => setSelectedNote(note)}>
                {text.view}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note Detail Modal */}
      <AnimatePresence>
        {selectedNote && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white"
                      style={{ backgroundColor: getSubjectColor(selectedNote.subject) }}
                    >
                      {selectedNote.subject}
                    </span>
                    {selectedNote.source === 'AI' ? (
                      <span className="flex items-center gap-1.5 text-sm text-[#64748B]">
                        <Zap className="w-4 h-4 text-[#1D4ED8]" />
                        {selectedNote.sourceName}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-[#64748B]">
                        <User className="w-4 h-4 text-[#059669]" />
                        {selectedNote.sourceName}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedNote(null)}
                    className="p-2 rounded-xl hover:bg-[#F9FAFB] transition-colors"
                  >
                    <X className="w-5 h-5 text-[#64748B]" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#0F172A] mb-4">
                    {selectedNote.title}
                  </h2>

                  <div className="prose prose-sm max-w-none">
                    <p className="text-sm text-[#0F172A] leading-relaxed whitespace-pre-line">
                      {selectedNote.fullContent}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs text-[#94A3B8]">
                      {text.savedOn} {selectedNote.dateSaved}
                    </span>
                    <Button variant="secondary" size="sm" className="text-[#DC2626] border-[#DC2626]">
                      {text.delete}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
