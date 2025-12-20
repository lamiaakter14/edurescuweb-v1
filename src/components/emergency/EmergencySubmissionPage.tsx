import React, { useState } from 'react';
import { AlertCircle, Upload, Lightbulb, FileCheck, BookOpen, MessageSquare, Image as ImageIcon, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmergencySubmissionPage() {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [problemDetails, setProblemDetails] = useState('');
  const [hasFile, setHasFile] = useState(false);

  const boards = [
    'Dhaka',
    'Rajshahi',
    'Chattogram',
    'Comilla',
    'Jessore',
    'Barishal',
    'Sylhet',
    'Mymensingh',
    'Technical',
    'Madrasa'
  ];

  const subjects = ['Physics', 'Chemistry', 'Math', 'Biology', 'ICT', 'English', 'Bangla'];

  const getProblemLength = () => {
    if (problemDetails.length === 0) return 'Not written';
    if (problemDetails.length < 50) return 'Short';
    if (problemDetails.length < 150) return 'Medium';
    return 'Long';
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Page Header */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-[#DC2626]" />
            </div>
            <div>
              <h1 className="text-[#0F172A] mb-1">Emergency Submission</h1>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.4' }}>
                জরুরি সমস্যাটি দ্রুত পাঠান — বিশেষজ্ঞ দল তৎক্ষণাৎ সমাধান করবে।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Added 32px top padding */}
      <div className="max-w-[1400px] mx-auto px-8 pt-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
          {/* Left Column - Main Form - Increased padding by 24px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl px-10 py-8 border border-[#E2E8F0]"
          >
            {/* Board Selector - Enhanced */}
            <div className="mb-6">
              <label className="block mb-3 text-[#0F172A]">
                Board / শিক্ষাবোর্ড নির্বাচন করুন
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1D4ED8] pointer-events-none" />
                <select
                  value={selectedBoard}
                  onChange={(e) => setSelectedBoard(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#EEF4FF] transition-all duration-200 text-[#0F172A]"
                  style={{ backgroundColor: selectedBoard ? '#EEF4FF' : '#FFFFFF' }}
                >
                  <option value="">Select your board</option>
                  {boards.map((board) => (
                    <option key={board} value={board}>
                      {board}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Soft Divider */}
            <div className="h-px bg-[#F1F5F9] mb-6" />

            {/* Subject Selector (Chips) */}
            <div className="mb-6">
              <label className="block mb-3 text-[#0F172A]">
                Subject / বিষয় নির্বাচন করুন
              </label>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <motion.button
                    key={subject}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSubject(subject)}
                    className={`px-5 py-2.5 rounded-xl transition-all duration-200 ${
                      selectedSubject === subject
                        ? 'bg-[#1D4ED8] text-white'
                        : 'bg-[#EEF4FF] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white'
                    }`}
                  >
                    {subject}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Soft Divider */}
            <div className="h-px bg-[#F1F5F9] mb-6" />

            {/* Problem Details - Enhanced */}
            <div className="mb-6">
              <label className="block mb-3 text-[#0F172A]">
                Problem Details / সমস্যার বিস্তারিত
              </label>
              <textarea
                value={problemDetails}
                onChange={(e) => setProblemDetails(e.target.value)}
                placeholder="Write the question or describe where you are stuck."
                rows={9}
                className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#EEF4FF] transition-all duration-200 text-[#0F172A] resize-none"
                style={{ 
                  lineHeight: '1.6',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                }}
              />
            </div>

            {/* Soft Divider */}
            <div className="h-px bg-[#F1F5F9] mb-6" />

            {/* Upload Box - Enhanced */}
            <div className="mb-6">
              <label className="block mb-2 text-[#0F172A]">
                Upload Problem Image / সমস্যার ছবি আপলোড করুন
              </label>
              <p className="text-xs text-[#64748B] mb-3">PNG, JPG, PDF up to 10MB</p>
              <div
                onClick={() => setHasFile(!hasFile)}
                className="border-2 border-dashed border-[#CBD5E1] rounded-xl p-10 text-center hover:border-[#1D4ED8] hover:bg-[#F9FAFB] transition-all duration-200 cursor-pointer"
              >
                <Upload className="w-11 h-11 text-[#1D4ED8] mx-auto mb-3" />
                <p className="text-[#0F172A] mb-1">Drop file or click to upload</p>
                <p className="text-sm text-[#64748B]">PNG, JPG, PDF</p>
              </div>
            </div>

            {/* Soft Divider */}
            <div className="h-px bg-[#F1F5F9] mb-6" />

            {/* Submit Button with Guidance */}
            <div className="pt-2">
              <p className="text-sm text-[#334155] text-center mb-3">
                Review your information then submit your request.
              </p>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full px-6 py-4 bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all duration-200"
              >
                Submit Emergency Request
              </motion.button>
              <p 
                className="text-xs text-center text-[#64748B] mt-3" 
                style={{ fontFamily: 'Noto Sans Bengali, sans-serif', lineHeight: '1.4' }}
              >
                Average response time: ২০–৩০ মিনিট
              </p>
            </div>
          </motion.div>

          {/* Right Column - Summary + Tips - Increased spacing */}
          <div className="space-y-5">
            {/* Request Summary Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
            >
              <div className="bg-[#F8FAFC] px-6 py-4 border-b border-[#E2E8F0]">
                <h3 className="text-[#0F172A]">Summary</h3>
              </div>
              <div className="p-6 space-y-4">
                {/* Board */}
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">Board</p>
                    <p className={`text-sm ${selectedBoard ? 'text-[#0F172A]' : 'text-[#9CA3AF]'}`}>
                      {selectedBoard ? (
                        selectedBoard
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#9CA3AF] rounded-full" />
                          Not selected
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Subject */}
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">Subject</p>
                    <p className={`text-sm ${selectedSubject ? 'text-[#0F172A]' : 'text-[#9CA3AF]'}`}>
                      {selectedSubject ? (
                        selectedSubject
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#9CA3AF] rounded-full" />
                          Not selected
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Problem Length */}
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">Problem Length</p>
                    <p className="text-sm text-[#0F172A]">
                      {getProblemLength()}
                    </p>
                  </div>
                </div>

                {/* File Attached */}
                <div className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">File Attached</p>
                    <p className="text-sm text-[#0F172A]">
                      {hasFile ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Tips Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#1D4ED8]" />
                <h3 className="text-[#0F172A]">Quick Tips</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5 text-sm text-[#64748B]">
                  <span className="w-1.5 h-1.5 bg-[#1D4ED8] rounded-full mt-2 flex-shrink-0" />
                  <span>Upload clear photo of the problem</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#64748B]">
                  <span className="w-1.5 h-1.5 bg-[#1D4ED8] rounded-full mt-2 flex-shrink-0" />
                  <span>Mention board & chapter</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#64748B]">
                  <span className="w-1.5 h-1.5 bg-[#1D4ED8] rounded-full mt-2 flex-shrink-0" />
                  <span>Highlight where you got stuck</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}