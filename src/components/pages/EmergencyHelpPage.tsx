import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Upload, CheckCircle2, Loader2, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Chip } from '../ui/Chip';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface EmergencyHelpPageProps {
  lang?: 'en' | 'bn';
}

type RequestStatus = 'idle' | 'validating' | 'submitting' | 'success' | 'error';

export function EmergencyHelpPage({ lang = 'en' }: EmergencyHelpPageProps) {
  const isBn = lang === 'bn';
  
  const [board, setBoard] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [problemDetails, setProblemDetails] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const text = {
    title: isBn ? 'জরুরি সাহায্য' : 'Emergency Help',
    subtitle: isBn ? 'বিশেষজ্ঞ শিক্ষকের কাছ থেকে দ্রুত সাহায্য পান' : 'Get instant help from expert tutors',
    boardLabel: isBn ? 'আপনার বোর্ড' : 'Your Board',
    boardPlaceholder: isBn ? 'বোর্ড নির্বাচন করুন' : 'Select board',
    subjectLabel: isBn ? 'বিষয়' : 'Subject',
    problemLabel: isBn ? 'সমস্যার বিবরণ' : 'Problem Details',
    problemPlaceholder: isBn ? 'আপনার সমস্যা বিস্তারিত লিখুন...' : 'Describe your problem in detail...',
    uploadLabel: isBn ? 'ফাইল আপলোড করুন' : 'Upload File',
    uploadDesc: isBn ? 'ছবি বা ডকুমেন্ট (ঐচ্ছিক)' : 'Image or document (optional)',
    submitBtn: isBn ? 'অনুরোধ জমা দিন' : 'Submit Request',
    submittingBtn: isBn ? 'জমা দেওয়া হচ্ছে...' : 'Submitting...',
    responseTime: isBn ? '⚡ গড় প্রতিক্রিয়া সময়: ৫-১০ মিনিট' : '⚡ Average response time: 5-10 minutes',
    summaryTitle: isBn ? 'অনুরোধ সারাংশ' : 'Request Summary',
    myRequestsTitle: isBn ? 'আমার জরুরি অনুরোধ' : 'My Emergency Requests',
    successTitle: isBn ? 'অনুরোধ জমা দেওয়া হয়েছে!' : 'Request Submitted!',
    successMsg: isBn ? 'বিশেষজ্ঞ নিয়োগ করা হচ্ছে...' : 'Expert is being assigned...',
    viewStatus: isBn ? 'স্ট্যাটাস দেখুন' : 'View Status',
    submitAnother: isBn ? 'আরেকটি অনুরোধ জমা দিন' : 'Submit Another',
  };

  const boards = [
    { value: 'dhaka', label: isBn ? 'ঢাকা বোর্ড' : 'Dhaka Board' },
    { value: 'rajshahi', label: isBn ? 'রাজশাহী বোর্ড' : 'Rajshahi Board' },
    { value: 'chittagong', label: isBn ? 'চট্টগ্রাম বোর্ড' : 'Chittagong Board' },
    { value: 'sylhet', label: isBn ? 'সিলেট বোর্ড' : 'Sylhet Board' },
  ];

  const subjects = [
    { id: 'physics', label: isBn ? 'পদার্থবিজ্ঞান' : 'Physics' },
    { id: 'chemistry', label: isBn ? 'রসায়ন' : 'Chemistry' },
    { id: 'math', label: isBn ? 'গণিত' : 'Mathematics' },
    { id: 'biology', label: isBn ? 'জীববিজ্ঞান' : 'Biology' },
    { id: 'english', label: isBn ? 'ইংরেজি' : 'English' },
    { id: 'bangla', label: isBn ? 'বাংলা' : 'Bangla' },
  ];

  const recentRequests = [
    {
      id: 1,
      title: isBn ? 'পদার্থবিজ্ঞান - প্রক্ষিপ্ত গতি সমস্যা' : 'Physics - Projectile Motion Problem',
      board: isBn ? 'ঢাকা বোর্ড' : 'Dhaka Board',
      subject: isBn ? 'পদার্থবিজ্ঞান' : 'Physics',
      status: 'assigned' as const,
      time: isBn ? '৫ মিনিট আগে' : '5 mins ago',
    },
    {
      id: 2,
      title: isBn ? 'রসায়ন - জৈব যৌগ সমস্যা' : 'Chemistry - Organic Compound Problem',
      board: isBn ? 'রাজশাহী বোর্ড' : 'Rajshahi Board',
      subject: isBn ? 'রসায়ন' : 'Chemistry',
      status: 'pending' as const,
      time: isBn ? '১৫ মিনিট আগে' : '15 mins ago',
    },
  ];

  const handleSubmit = () => {
    // Validation
    const newErrors: Record<string, string> = {};
    if (!board) {
      newErrors.board = isBn ? 'বোর্ড নির্বাচন করুন' : 'Please select a board';
    }
    if (selectedSubjects.length === 0) {
      newErrors.subjects = isBn ? 'কমপক্ষে একটি বিষয় নির্বাচন করুন' : 'Please select at least one subject';
    }
    if (!problemDetails.trim()) {
      newErrors.problem = isBn ? 'সমস্যার বিবরণ লিখুন' : 'Please describe your problem';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('validating');
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleReset = () => {
    setBoard('');
    setSelectedSubjects([]);
    setProblemDetails('');
    setUploadedFile(null);
    setStatus('idle');
    setErrors({});
  };

  const toggleSubject = (subjectId: string) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  return (
    <main className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-xl bg-[#DC2626]">
            <AlertCircle className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#0F172A]">{text.title}</h1>
            <p className="text-sm text-[#64748B]">{text.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Main Layout - L2 Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
        {/* Left - Main Form */}
        <div className="space-y-6">
          {status === 'success' ? (
            /* Success State */
            <Card>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#059669]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{text.successTitle}</h3>
                <p className="text-sm text-[#64748B] mb-8">{text.successMsg}</p>
                
                <div className="flex items-center justify-center gap-4">
                  <Button variant="secondary" onClick={handleReset}>
                    {text.submitAnother}
                  </Button>
                  <Button variant="primary">
                    {text.viewStatus}
                  </Button>
                </div>
              </motion.div>
            </Card>
          ) : (
            /* Form State */
            <>
              <Card>
                <div className="space-y-6">
                  {/* Board Selection */}
                  <Select
                    label={text.boardLabel}
                    value={board}
                    onChange={(val) => {
                      setBoard(val);
                      setErrors({ ...errors, board: '' });
                    }}
                    options={boards}
                    placeholder={text.boardPlaceholder}
                    error={errors.board}
                    required
                  />

                  {/* Subject Chips */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-3">
                      {text.subjectLabel}
                      <span className="text-[#DC2626] ml-1">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((subject) => (
                        <Chip
                          key={subject.id}
                          selected={selectedSubjects.includes(subject.id)}
                          onSelect={() => {
                            toggleSubject(subject.id);
                            setErrors({ ...errors, subjects: '' });
                          }}
                        >
                          {subject.label}
                        </Chip>
                      ))}
                    </div>
                    {errors.subjects && (
                      <p className="text-xs text-[#DC2626] mt-2">{errors.subjects}</p>
                    )}
                  </div>

                  {/* Problem Details */}
                  <Textarea
                    label={text.problemLabel}
                    value={problemDetails}
                    onChange={(val) => {
                      setProblemDetails(val);
                      setErrors({ ...errors, problem: '' });
                    }}
                    placeholder={text.problemPlaceholder}
                    rows={6}
                    error={errors.problem}
                    required
                  />

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      {text.uploadLabel}
                    </label>
                    <p className="text-xs text-[#94A3B8] mb-3">{text.uploadDesc}</p>
                    <button
                      onClick={() => setUploadedFile('problem_image.jpg')}
                      className="w-full py-4 px-4 border-2 border-dashed border-[#E2E8F0] rounded-xl hover:border-[#1D4ED8] hover:bg-[#F9FAFB] transition-all duration-200 flex items-center justify-center gap-2 text-sm text-[#64748B] hover:text-[#1D4ED8]"
                    >
                      <Upload className="w-5 h-5" strokeWidth={2} />
                      {uploadedFile ? uploadedFile : (isBn ? 'ফাইল নির্বাচন করুন' : 'Choose file')}
                    </button>
                  </div>
                </div>
              </Card>

              {/* Submit Section */}
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#64748B]">{text.responseTime}</p>
                <Button
                  variant="primary"
                  size="lg"
                  loading={status === 'submitting'}
                  onClick={handleSubmit}
                >
                  {status === 'submitting' ? text.submittingBtn : text.submitBtn}
                </Button>
              </div>
            </>
          )}

          {/* My Emergency Requests */}
          <Card className="mt-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-[#1D4ED8]" strokeWidth={2} />
              <h3 className="text-lg font-semibold text-[#0F172A]">{text.myRequestsTitle}</h3>
            </div>

            <div className="space-y-3">
              {recentRequests.map((request) => (
                <motion.div
                  key={request.id}
                  whileHover={{ x: 4 }}
                  className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E2E8F0] hover:bg-[#EEF4FF] transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-[#0F172A] mb-1">{request.title}</h4>
                      <p className="text-xs text-[#64748B]">{request.board} • {request.subject}</p>
                    </div>
                    <Badge variant={request.status === 'assigned' ? 'success' : 'warning'} size="sm">
                      {request.status === 'assigned' ? (isBn ? 'নিয়োগ হয়েছে' : 'Assigned') : (isBn ? 'অপেক্ষমাণ' : 'Pending')}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <Clock className="w-3 h-3" strokeWidth={2} />
                    <span>{request.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right - Summary Panel */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[#1D4ED8]">
                <AlertCircle className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-[#0F172A]">{text.summaryTitle}</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl">
                <p className="text-xs font-semibold text-[#92400E] mb-2">
                  {isBn ? '⚠️ জরুরি অনুরোধ' : '⚠️ Emergency Request'}
                </p>
                <p className="text-xs text-[#78350F]">
                  {isBn
                    ? 'আপনার অনুরোধ অগ্রাধিকার পাবে এবং ৫-১০ মিনিটের মধ্যে একজন বিশেষজ্ঞ নিয়োগ করা হবে।'
                    : 'Your request will be prioritized and an expert will be assigned within 5-10 minutes.'}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748B]">{isBn ? 'বোর্ড' : 'Board'}</span>
                  <span className="font-semibold text-[#0F172A]">
                    {board ? boards.find(b => b.value === board)?.label : '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748B]">{isBn ? 'বিষয়' : 'Subjects'}</span>
                  <span className="font-semibold text-[#0F172A]">
                    {selectedSubjects.length > 0 ? selectedSubjects.length : '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748B]">{isBn ? 'সংযুক্তি' : 'Attachment'}</span>
                  <span className="font-semibold text-[#0F172A]">
                    {uploadedFile ? '✓' : '—'}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <Clock className="w-4 h-4" strokeWidth={2} />
                  <span>{isBn ? 'গড় প্রতিক্রিয়া সময়: ৫-১০ মিনিট' : 'Avg. response: 5-10 mins'}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Help Tips */}
          <div className="p-4 bg-[#DBEAFE] border border-[#BFDBFE] rounded-xl">
            <h4 className="text-sm font-semibold text-[#1E40AF] mb-2">
              {isBn ? '💡 দ্রুত সাহায্যের জন্য টিপস' : '💡 Tips for Faster Help'}
            </h4>
            <ul className="space-y-1 text-xs text-[#1E3A8A]">
              <li>• {isBn ? 'সমস্যা স্পষ্টভাবে লিখুন' : 'Describe problem clearly'}</li>
              <li>• {isBn ? 'ছবি সংযুক্ত করুন' : 'Attach images if possible'}</li>
              <li>• {isBn ? 'আপনি কী চেষ্টা করেছেন উল্লেখ করুন' : 'Mention what you tried'}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
