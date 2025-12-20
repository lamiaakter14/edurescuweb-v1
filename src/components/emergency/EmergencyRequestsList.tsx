import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, CheckCircle, User } from 'lucide-react';
import { Button } from '../ui/button';
import { EmptyState } from '../ui/EmptyState';

interface EmergencyRequestsListProps {
  lang?: 'en' | 'bn';
  onNavigate?: (page: string) => void;
}

interface EmergencyRequest {
  id: number;
  subject: string;
  title: string;
  problemDetails: string;
  board: string;
  status: 'requested' | 'assigned' | 'verified';
  expertName?: string;
  timeSubmitted: string;
  timeResolved?: string;
}

export function EmergencyRequestsList({ lang = 'en', onNavigate }: EmergencyRequestsListProps) {
  const isBn = lang === 'bn';
  const [selectedRequest, setSelectedRequest] = useState<EmergencyRequest | null>(null);

  const text = {
    title: isBn ? 'আমার জরুরি অনুরোধ' : 'My Emergency Requests',
    subtitle: isBn ? 'আপনার জরুরি সাহায্য অনুরোধ ট্র্যাক করুন' : 'Track your urgent help requests',
    pending: isBn ? 'অপেক্ষমাণ' : 'Pending',
    inProgress: isBn ? 'চলমান' : 'In Progress',
    verified: isBn ? 'যাচাইকৃত' : 'Verified',
    viewDetails: isBn ? 'বিস্তারিত দেখুন' : 'View Details',
    emptyTitle: isBn ? 'এখনও কোন জরুরি অনুরোধ নেই' : 'No emergency requests yet',
    emptyDesc: isBn ? 'বিশেষজ্ঞের সাহায্য প্রয়োজন হলে এআই চ্যাট থেকে জমা দিন' : 'Submit one from AI chat when you need expert help',
    goToAI: isBn ? 'এআই সহায়কে যান' : 'Go to AI Assistant',
    requested: isBn ? 'অনুরোধকৃত' : 'Requested',
    assigned: isBn ? 'নির্ধারিত' : 'Assigned',
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

  const requests: EmergencyRequest[] = [
    {
      id: 1,
      subject: 'Physics',
      title: 'Projectile motion with air resistance - need immediate help',
      problemDetails: 'I am struggling with understanding how air resistance affects projectile motion calculations. Have exam tomorrow.',
      board: 'Dhaka Board',
      status: 'assigned',
      expertName: 'Dr. Rahman',
      timeSubmitted: '10 minutes ago',
    },
    {
      id: 2,
      subject: 'Chemistry',
      title: 'Organic reaction mechanisms SN1 vs SN2',
      problemDetails: 'Need clarification on when to use SN1 vs SN2 mechanisms in organic chemistry reactions.',
      board: 'Dhaka Board',
      status: 'verified',
      expertName: 'Prof. Akter',
      timeSubmitted: '2 hours ago',
      timeResolved: '1 hour ago',
    },
    {
      id: 3,
      subject: 'Math',
      title: 'Calculus integration problem urgent',
      problemDetails: 'Stuck on integration by parts problem. Test is in 3 hours.',
      board: 'Dhaka Board',
      status: 'requested',
      timeSubmitted: '5 minutes ago',
    },
  ];

  const pendingCount = requests.filter(r => r.status === 'requested').length;
  const inProgressCount = requests.filter(r => r.status === 'assigned').length;
  const verifiedCount = requests.filter(r => r.status === 'verified').length;

  const getStatusBadge = (status: EmergencyRequest['status']) => {
    if (status === 'requested') {
      return (
        <span className="px-3 py-1 rounded-lg text-xs font-medium bg-[#FEF3C7] text-[#92400E] flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {text.requested}
        </span>
      );
    }
    if (status === 'assigned') {
      return (
        <span className="px-3 py-1 rounded-lg text-xs font-medium bg-[#DBEAFE] text-[#1E40AF] flex items-center gap-1">
          <User className="w-3 h-3" />
          {text.assigned}
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-lg text-xs font-medium bg-[#D1FAE5] text-[#065F46] flex items-center gap-1">
        <CheckCircle className="w-3 h-3" />
        {text.verified}
      </span>
    );
  };

  if (requests.length === 0) {
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
          icon={<AlertCircle className="w-16 h-16 text-[#94A3B8]" strokeWidth={1.5} />}
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
    <main className="max-w-[1200px] mx-auto px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-[#0F172A] mb-2">{text.title}</h1>
        <p className="text-sm text-[#64748B] mb-4">{text.subtitle}</p>

        {/* Stats Row */}
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-[#FEF3C7] rounded-xl">
            <span className="text-sm font-semibold text-[#92400E]">
              {pendingCount} {text.pending}
            </span>
          </div>
          <div className="px-4 py-2 bg-[#DBEAFE] rounded-xl">
            <span className="text-sm font-semibold text-[#1E40AF]">
              {inProgressCount} {text.inProgress}
            </span>
          </div>
          <div className="px-4 py-2 bg-[#D1FAE5] rounded-xl">
            <span className="text-sm font-semibold text-[#065F46]">
              {verifiedCount} {text.verified}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((request, index) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border-[0.5px] border-[#E2E8F0] hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Subject Badge & Status */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-lg text-xs font-medium text-white"
                    style={{ backgroundColor: getSubjectColor(request.subject) }}
                  >
                    {request.subject}
                  </span>
                  {getStatusBadge(request.status)}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">
                  {request.title}
                </h3>

                {/* Problem Details Preview */}
                <p className="text-sm text-[#64748B] mb-3 line-clamp-2">
                  {request.problemDetails}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                  <span>{request.board}</span>
                  <span>•</span>
                  <span>{request.timeSubmitted}</span>
                  {request.expertName && (
                    <>
                      <span>•</span>
                      <span>Expert: {request.expertName}</span>
                    </>
                  )}
                  {request.timeResolved && (
                    <>
                      <span>•</span>
                      <span className="text-[#059669]">Resolved {request.timeResolved}</span>
                    </>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedRequest(request)}
              >
                {text.viewDetails}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
