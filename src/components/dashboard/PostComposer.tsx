import React, { useState } from 'react';
import { Image as ImageIcon, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function PostComposer() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');

  const subjects = ['Physics', 'Chemistry', 'Math', 'Biology', 'ICT', 'English', 'Bangla'];
  const boards = ['Dhaka', 'Rajshahi', 'Chattogram', 'Comilla', 'Jessore', 'Barishal', 'Sylhet', 'Mymensingh'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0]"
    >
      <div className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          placeholder="What's your problem? / সমস্যা কী?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 text-sm font-medium placeholder:text-[#94A3B8]"
        />

        {/* Problem Details Textarea */}
        <textarea
          placeholder="Describe your problem in detail... / বিস্তারিত বর্ণনা করুন..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 text-sm resize-none placeholder:text-[#94A3B8]"
        />

        {/* Subject Chips */}
        <div>
          <p className="text-xs text-[#64748B] mb-2 font-medium">Subject</p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedSubject === subject
                    ? 'bg-[#1D4ED8] text-white shadow-sm'
                    : 'bg-[#F9FAFB] text-[#64748B] border border-[#E2E8F0] hover:bg-[#EEF4FF] hover:text-[#1D4ED8] hover:border-[#1D4ED8]/20'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Board Dropdown */}
        <div>
          <p className="text-xs text-[#64748B] mb-2 font-medium">Board</p>
          <select
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 text-sm text-[#0F172A] font-medium"
          >
            <option value="">Select your board</option>
            {boards.map((board) => (
              <option key={board} value={board}>
                {board} Board
              </option>
            ))}
          </select>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-2">
          {/* Attach Options */}
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-[#F9FAFB] transition-colors group">
              <ImageIcon className="w-5 h-5 text-[#64748B] group-hover:text-[#1D4ED8]" strokeWidth={2} />
            </button>
            <button className="p-2 rounded-lg hover:bg-[#F9FAFB] transition-colors group">
              <FileText className="w-5 h-5 text-[#64748B] group-hover:text-[#1D4ED8]" strokeWidth={2} />
            </button>
          </div>

          {/* Post Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-[#1D4ED8] text-white rounded-xl hover:bg-[#1E40AF] transition-all duration-200 text-sm font-semibold shadow-sm"
          >
            Post Problem
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}