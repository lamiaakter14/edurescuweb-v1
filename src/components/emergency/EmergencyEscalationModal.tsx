import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface EmergencyEscalationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EmergencyData) => void;
  lang?: 'en' | 'bn';
  prefillData?: Partial<EmergencyData>;
}

export interface EmergencyData {
  board: string;
  subject: string;
  problemDetails: string;
  hasImage: boolean;
}

export function EmergencyEscalationModal({
  isOpen,
  onClose,
  onSubmit,
  lang = 'en',
  prefillData,
}: EmergencyEscalationModalProps) {
  const isBn = lang === 'bn';
  const [selectedBoard, setSelectedBoard] = useState(prefillData?.board || '');
  const [selectedSubject, setSelectedSubject] = useState(prefillData?.subject || '');
  const [problemDetails, setProblemDetails] = useState(prefillData?.problemDetails || '');
  const [hasImage, setHasImage] = useState(prefillData?.hasImage || false);

  const text = {
    title: isBn ? 'বিশেষজ্ঞের কাছে পাঠান' : 'Escalate to Expert',
    subtitle: isBn ? 'আমাদের বিশেষজ্ঞ ২০-৩০ মিনিটের মধ্যে সাহায্য করবেন' : 'Our expert will help you in 20-30 minutes',
    board: isBn ? 'বোর্ড নির্বাচন করুন' : 'Select Board',
    boardPlaceholder: isBn ? 'আপনার বোর্ড নির্বাচন করুন' : 'Select your board',
    subject: isBn ? 'বিষয় নির্বাচন করুন' : 'Select Subject',
    problemDetails: isBn ? 'সমস্যার বিস্তারিত' : 'Problem Details',
    problemPlaceholder: isBn ? 'সমস্যা বিস্তারিত লিখুন...' : 'Describe your problem in detail...',
    uploadImage: isBn ? 'ছবি আপলোড করুন' : 'Upload Image',
    uploadHint: isBn ? 'PNG, JPG, PDF সর্বোচ্চ ১০MB' : 'PNG, JPG, PDF up to 10MB',
    submit: isBn ? 'জরুরি অনুরোধ জমা দিন' : 'Submit Emergency Request',
    cancel: isBn ? 'বাতিল' : 'Cancel',
  };

  const boards = ['Dhaka', 'Rajshahi', 'Chattogram', 'Comilla', 'Jessore', 'Barishal', 'Sylhet', 'Mymensingh'];
  const subjects = ['Physics', 'Chemistry', 'Math', 'Biology', 'ICT', 'English', 'Bangla'];

  const handleSubmit = () => {
    onSubmit({
      board: selectedBoard,
      subject: selectedSubject,
      problemDetails,
      hasImage,
    });
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
                  <div className="p-2 rounded-xl bg-[#DC2626]">
                    <AlertCircle className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#0F172A]">{text.title}</h2>
                    <p className="text-xs text-[#64748B]">{text.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-[#F9FAFB] transition-colors"
                >
                  <X className="w-5 h-5 text-[#64748B]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Board Selection */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                    {text.board}
                  </label>
                  <select
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 text-sm"
                  >
                    <option value="">{text.boardPlaceholder}</option>
                    {boards.map((board) => (
                      <option key={board} value={board}>{board} Board</option>
                    ))}
                  </select>
                </div>

                {/* Subject Chips */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                    {text.subject}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => setSelectedSubject(subject)}
                        className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                        style={
                          selectedSubject === subject
                            ? {
                                backgroundColor: getSubjectColor(subject),
                                color: 'white',
                              }
                            : {
                                backgroundColor: '#F9FAFB',
                                color: '#64748B',
                                border: '1px solid #E2E8F0',
                              }
                        }
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Problem Details */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                    {text.problemDetails}
                  </label>
                  <textarea
                    value={problemDetails}
                    onChange={(e) => setProblemDetails(e.target.value)}
                    placeholder={text.problemPlaceholder}
                    rows={8}
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 resize-none text-sm"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                    {text.uploadImage}
                  </label>
                  <button
                    onClick={() => setHasImage(!hasImage)}
                    className="w-full border-2 border-dashed border-[#CBD5E1] rounded-xl p-6 text-center hover:border-[#1D4ED8] hover:bg-[#F9FAFB] transition-all duration-200"
                  >
                    <Upload className="w-8 h-8 text-[#1D4ED8] mx-auto mb-2" />
                    <p className="text-sm text-[#0F172A] mb-1 font-medium">
                      {text.uploadImage}
                    </p>
                    <p className="text-xs text-[#64748B]">{text.uploadHint}</p>
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] px-6 py-4 flex items-center justify-end gap-3">
                <Button variant="secondary" onClick={onClose}>
                  {text.cancel}
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={!selectedBoard || !selectedSubject || !problemDetails.trim()}
                  className="bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8]"
                >
                  {text.submit}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
