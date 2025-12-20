import React from 'react';
import { MessageSquare, Bookmark, CheckCircle2, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProblemFeedCardProps {
  student: {
    name: string;
    class: string;
  };
  board: string;
  subject: string;
  title: string;
  preview: string;
  hasAttachment?: boolean;
  commentsCount: number;
  isSolved?: boolean;
  timeAgo: string;
}

export function ProblemFeedCard({
  student,
  board,
  subject,
  title,
  preview,
  hasAttachment,
  commentsCount,
  isSolved,
  timeAgo,
}: ProblemFeedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl p-5 border-[0.5px] border-[#E2E8F0] hover:shadow-md transition-all duration-200"
    >
      {/* Header - Name/Class Line */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">{student.name.substring(0, 2).toUpperCase()}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F172A]">{student.name}</p>
            <p className="text-xs text-[#94A3B8]">{student.class} • {timeAgo}</p>
          </div>
        </div>
        {isSolved && (
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[#DCFCE7] rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" strokeWidth={2} />
            <span className="text-xs font-medium text-[#059669]">Solved</span>
          </div>
        )}
      </div>

      {/* Chips Row */}
      <div className="flex items-center gap-2 mb-4">
        <span className="px-2.5 py-1 bg-[#F9FAFB] text-[#64748B] text-xs font-medium rounded-lg border-[0.5px] border-[#E2E8F0]">
          {board}
        </span>
        <span className="px-2.5 py-1 bg-[#EEF4FF] text-[#1D4ED8] text-xs font-medium rounded-lg">
          {subject}
        </span>
        {hasAttachment && (
          <div className="flex items-center gap-1 px-2 py-1 bg-[#F9FAFB] rounded-lg">
            <Paperclip className="w-3 h-3 text-[#64748B]" strokeWidth={2} />
          </div>
        )}
      </div>

      {/* Content - Title + Preview */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#0F172A] mb-2 line-clamp-1">
          {title}
        </h4>
        <p className="text-sm text-[#64748B] line-clamp-2 leading-relaxed">
          {preview}
        </p>
      </div>

      {/* Actions Row */}
      <div className="flex items-center gap-4 pt-3 border-t border-[#E2E8F0]">
        <button className="flex items-center gap-1.5 text-[#64748B] hover:text-[#1D4ED8] transition-colors">
          <MessageSquare className="w-4 h-4" strokeWidth={2} />
          <span className="text-xs font-medium">{commentsCount}</span>
        </button>
        <button className="flex items-center gap-1.5 text-[#64748B] hover:text-[#1D4ED8] transition-colors">
          <Bookmark className="w-4 h-4" strokeWidth={2} />
          <span className="text-xs font-medium">Save</span>
        </button>
        {!isSolved && (
          <button className="ml-auto flex items-center gap-1.5 px-3 py-1.5 bg-[#DCFCE7] text-[#059669] rounded-lg hover:bg-[#BBF7D0] transition-colors">
            <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
            <span className="text-xs font-semibold">Mark Solved</span>
          </button>
        )}
      </div>
    </motion.div>
  );
}