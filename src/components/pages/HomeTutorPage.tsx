import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Star, Clock, MapPin, Video, Home, Calendar, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Chip } from '../ui/Chip';
import { Input } from '../ui/input';
import { EmptyState } from '../ui/EmptyState';

interface HomeTutorPageProps {
  lang?: 'en' | 'bn';
}

interface Tutor {
  id: number;
  name: string;
  subjects: string[];
  board: string;
  rating: number;
  reviews: number;
  pricePerHour: number;
  isOnline: boolean;
  isOffline: boolean;
  avatar: string;
  experience: string;
}

interface Session {
  id: number;
  tutor: string;
  subject: string;
  date: string;
  time: string;
  type: 'online' | 'offline';
}

interface Request {
  id: number;
  tutor: string;
  subject: string;
  status: 'pending' | 'accepted' | 'declined';
  date: string;
}

export function HomeTutorPage({ lang = 'en' }: HomeTutorPageProps) {
  const isBn = lang === 'bn';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedBoard, setSelectedBoard] = useState('all');
  const [selectedMode, setSelectedMode] = useState('all');

  const text = {
    title: isBn ? 'হোম টিউটর' : 'Home Tutor',
    subtitle: isBn ? 'আপনার পছন্দের শিক্ষক খুঁজুন' : 'Find your perfect tutor',
    searchPlaceholder: isBn ? 'শিক্ষক খুঁজুন...' : 'Search tutors...',
    viewProfile: isBn ? 'প্রোফাইল দেখুন' : 'View Profile',
    requestSession: isBn ? 'সেশন অনুরোধ' : 'Request Session',
    online: isBn ? 'অনলাইন' : 'Online',
    offline: isBn ? 'অফলাইন' : 'Offline',
    perHour: isBn ? '/ঘন্টা' : '/hour',
    experience: isBn ? 'অভিজ্ঞতা' : 'Experience',
    reviews: isBn ? 'রিভিউ' : 'reviews',
    upcomingTitle: isBn ? 'আসন্ন সেশন' : 'Upcoming Sessions',
    requestsTitle: isBn ? 'অপেক্ষমাণ অনুরোধ' : 'Pending Requests',
    emptyTitle: isBn ? 'কোনো শিক্ষক পাওয়া যায়নি' : 'No tutors found',
    emptyDesc: isBn ? 'আপনার ফিল্টার পরিবর্তন করুন' : 'Try adjusting your filters',
    emptySessions: isBn ? 'কোনো আসন্ন সেশন নেই' : 'No upcoming sessions',
    emptyRequests: isBn ? 'কোনো অপেক্ষমাণ অনুরোধ নেই' : 'No pending requests',
  };

  const subjects = [
    { value: 'all', label: isBn ? 'সব বিষয়' : 'All Subjects' },
    { value: 'physics', label: isBn ? 'পদার্থবিজ্ঞান' : 'Physics' },
    { value: 'chemistry', label: isBn ? 'রসায়ন' : 'Chemistry' },
    { value: 'math', label: isBn ? 'গণিত' : 'Math' },
    { value: 'biology', label: isBn ? 'জীববিজ্ঞান' : 'Biology' },
  ];

  const boards = [
    { value: 'all', label: isBn ? 'সব বোর্ড' : 'All Boards' },
    { value: 'dhaka', label: isBn ? 'ঢাকা বোর্ড' : 'Dhaka Board' },
    { value: 'rajshahi', label: isBn ? 'রাজশাহী বোর্ড' : 'Rajshahi Board' },
  ];

  const modes = [
    { value: 'all', label: isBn ? 'সব' : 'All' },
    { value: 'online', label: isBn ? 'অনলাইন' : 'Online' },
    { value: 'offline', label: isBn ? 'অফলাইন' : 'Offline' },
  ];

  const tutors: Tutor[] = [
    {
      id: 1,
      name: isBn ? 'ড. মাহমুদ হাসান' : 'Dr. Mahmud Hasan',
      subjects: [isBn ? 'পদার্থবিজ্ঞান' : 'Physics', isBn ? 'গণিত' : 'Math'],
      board: isBn ? 'ঢাকা বোর্ড' : 'Dhaka Board',
      rating: 4.9,
      reviews: 127,
      pricePerHour: 500,
      isOnline: true,
      isOffline: true,
      avatar: '👨‍🏫',
      experience: isBn ? '১০+ বছর' : '10+ years',
    },
    {
      id: 2,
      name: isBn ? 'সাবিনা খাতুন' : 'Sabina Khatun',
      subjects: [isBn ? 'রসায়ন' : 'Chemistry', isBn ? 'জীববিজ্ঞান' : 'Biology'],
      board: isBn ? 'ঢাকা বোর্ড' : 'Dhaka Board',
      rating: 4.8,
      reviews: 95,
      pricePerHour: 450,
      isOnline: true,
      isOffline: false,
      avatar: '👩‍🏫',
      experience: isBn ? '৮ বছর' : '8 years',
    },
    {
      id: 3,
      name: isBn ? 'রাফিউল ইসলাম' : 'Rafiul Islam',
      subjects: [isBn ? 'গণিত' : 'Math'],
      board: isBn ? 'রাজশাহী বোর্ড' : 'Rajshahi Board',
      rating: 4.7,
      reviews: 82,
      pricePerHour: 400,
      isOnline: false,
      isOffline: true,
      avatar: '👨‍💼',
      experience: isBn ? '৬ বছর' : '6 years',
    },
  ];

  const upcomingSessions: Session[] = [
    {
      id: 1,
      tutor: isBn ? 'ড. মাহমুদ হাসান' : 'Dr. Mahmud Hasan',
      subject: isBn ? 'পদার্থবিজ্ঞান' : 'Physics',
      date: isBn ? 'আজ' : 'Today',
      time: '5:00 PM',
      type: 'online',
    },
    {
      id: 2,
      tutor: isBn ? 'সাবিনা খাতুন' : 'Sabina Khatun',
      subject: isBn ? 'রসায়ন' : 'Chemistry',
      date: isBn ? 'আগামীকাল' : 'Tomorrow',
      time: '3:00 PM',
      type: 'online',
    },
  ];

  const pendingRequests: Request[] = [
    {
      id: 1,
      tutor: isBn ? 'রাফিউল ইসলাম' : 'Rafiul Islam',
      subject: isBn ? 'গণিত' : 'Math',
      status: 'pending',
      date: isBn ? '২ ঘন্টা আগে' : '2 hours ago',
    },
  ];

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || tutor.subjects.some(s => s.toLowerCase().includes(selectedSubject));
    const matchesBoard = selectedBoard === 'all' || tutor.board.toLowerCase().includes(selectedBoard);
    const matchesMode = selectedMode === 'all' || 
      (selectedMode === 'online' && tutor.isOnline) ||
      (selectedMode === 'offline' && tutor.isOffline);
    return matchesSearch && matchesSubject && matchesBoard && matchesMode;
  });

  return (
    <main className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-xl bg-[#1D4ED8]">
            <Users className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#0F172A]">{text.title}</h1>
            <p className="text-sm text-[#64748B]">{text.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Search & Filters */}
      <Card className="mb-6">
        <div className="space-y-4">
          <Input
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={text.searchPlaceholder}
            icon={<Search className="w-4 h-4" strokeWidth={2} />}
          />

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#64748B]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#64748B]">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Chip
                  key={subject.value}
                  selected={selectedSubject === subject.value}
                  onSelect={() => setSelectedSubject(subject.value)}
                  size="sm"
                >
                  {subject.label}
                </Chip>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {boards.map((board) => (
                <Chip
                  key={board.value}
                  selected={selectedBoard === board.value}
                  onSelect={() => setSelectedBoard(board.value)}
                  size="sm"
                >
                  {board.label}
                </Chip>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {modes.map((mode) => (
                <Chip
                  key={mode.value}
                  selected={selectedMode === mode.value}
                  onSelect={() => setSelectedMode(mode.value)}
                  size="sm"
                >
                  {mode.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Main Layout - L3 List + Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
        {/* Left - Tutor List */}
        <div className="space-y-4">
          {filteredTutors.length === 0 ? (
            <Card>
              <EmptyState
                icon={<Users className="w-12 h-12 text-[#94A3B8]" strokeWidth={1.5} />}
                title={text.emptyTitle}
                description={text.emptyDesc}
              />
            </Card>
          ) : (
            filteredTutors.map((tutor) => (
              <motion.div key={tutor.id} whileHover={{ y: -4 }}>
                <Card hover className="transition-all duration-300">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] flex items-center justify-center text-3xl">
                      {tutor.avatar}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0F172A] mb-1">{tutor.name}</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" strokeWidth={2} />
                              <span className="text-sm font-semibold text-[#0F172A]">{tutor.rating}</span>
                              <span className="text-xs text-[#94A3B8]">({tutor.reviews} {text.reviews})</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-[#1D4ED8]">৳{tutor.pricePerHour}</p>
                          <p className="text-xs text-[#94A3B8]">{text.perHour}</p>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tutor.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="info" size="sm">{subject}</Badge>
                        ))}
                      </div>

                      {/* Details */}
                      <div className="flex items-center gap-4 text-xs text-[#64748B] mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                          <span>{tutor.board}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                          <span>{tutor.experience} {text.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {tutor.isOnline && (
                            <Badge variant="success" size="sm">
                              <Video className="w-3 h-3 mr-1" strokeWidth={2} />
                              {text.online}
                            </Badge>
                          )}
                          {tutor.isOffline && (
                            <Badge variant="default" size="sm">
                              <Home className="w-3 h-3 mr-1" strokeWidth={2} />
                              {text.offline}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button variant="secondary" size="sm" className="flex-1">
                          {text.viewProfile}
                        </Button>
                        <Button variant="primary" size="sm" className="flex-1">
                          {text.requestSession}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Right - Sessions & Requests */}
        <div className="space-y-6">
          {/* Upcoming Sessions */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-[#1D4ED8]" strokeWidth={2} />
              <h3 className="text-base font-semibold text-[#0F172A]">{text.upcomingTitle}</h3>
            </div>

            {upcomingSessions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-[#64748B]">{text.emptySessions}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <motion.div
                    key={session.id}
                    whileHover={{ x: 4 }}
                    className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E2E8F0] hover:bg-[#EEF4FF] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F172A] mb-1">{session.tutor}</h4>
                        <Badge variant="info" size="sm">{session.subject}</Badge>
                      </div>
                      <Badge variant={session.type === 'online' ? 'success' : 'default'} size="sm">
                        {session.type === 'online' ? (
                          <>
                            <Video className="w-3 h-3 mr-1" strokeWidth={2} />
                            {text.online}
                          </>
                        ) : (
                          <>
                            <Home className="w-3 h-3 mr-1" strokeWidth={2} />
                            {text.offline}
                          </>
                        )}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#64748B]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" strokeWidth={2} />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" strokeWidth={2} />
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </Card>

          {/* Pending Requests */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-[#1D4ED8]" strokeWidth={2} />
              <h3 className="text-base font-semibold text-[#0F172A]">{text.requestsTitle}</h3>
            </div>

            {pendingRequests.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-[#64748B]">{text.emptyRequests}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingRequests.map((request) => (
                  <motion.div
                    key={request.id}
                    whileHover={{ x: 4 }}
                    className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E2E8F0] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F172A] mb-1">{request.tutor}</h4>
                        <Badge variant="info" size="sm">{request.subject}</Badge>
                      </div>
                      <Badge 
                        variant={
                          request.status === 'pending' ? 'warning' :
                          request.status === 'accepted' ? 'success' : 'danger'
                        } 
                        size="sm"
                      >
                        {request.status === 'pending' ? (isBn ? 'অপেক্ষমাণ' : 'Pending') :
                         request.status === 'accepted' ? (isBn ? 'গৃহীত' : 'Accepted') :
                         (isBn ? 'প্রত্যাখ্যাত' : 'Declined')}
                      </Badge>
                    </div>
                    <p className="text-xs text-[#94A3B8]">{request.date}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </main>
  );
}
