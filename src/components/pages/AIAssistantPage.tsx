import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Send, User, Bot, Sparkles, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { EmptyState } from '../ui/EmptyState';
import { EmergencyEscalationModal, EmergencyData } from '../emergency/EmergencyEscalationModal';
import { toast } from 'sonner';

interface AIAssistantPageProps {
  lang?: 'en' | 'bn';
  onNavigate?: (page: string) => void;
}

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export function AIAssistantPage({ lang = 'en', onNavigate }: AIAssistantPageProps) {
  const isBn = lang === 'bn';
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [emergencyData, setEmergencyData] = useState<EmergencyData>({
    board: '',
    subject: '',
    problemDetails: '',
    hasImage: false,
  });

  const text = {
    title: isBn ? 'এআই সহায়ক' : 'AI Assistant',
    subtitle: isBn ? 'আপনার ব্যক্তিগত পড়াশোনার সহায়ক' : 'Your personal study companion',
    placeholder: isBn ? 'আপনার প্রশ্ন টাইপ করুন...' : 'Type your question...',
    send: isBn ? 'পাঠান' : 'Send',
    needHelp: isBn ? 'মানুষের সাহায্য দরকার?' : 'Need Human Help?',
    emptyTitle: isBn ? 'এআই সহায়কের সাথে কথা শুরু করুন' : 'Start chatting with AI',
    emptyDesc: isBn ? 'যেকোনো একাডেমিক প্রশ্ন জিজ্ঞাসা করুন এবং তাৎক্ষণিক সাহায্য পান' : 'Ask any academic question and get instant help',
    planTitle: isBn ? 'আপনার প্ল্যান' : 'Your Plan',
    planType: isBn ? 'বেসিক প্ল্যান' : 'Basic Plan',
    planUsage: isBn ? 'ব্যবহার' : 'Usage',
    questionsLeft: isBn ? 'প্রশ্ন বাকি' : 'questions left',
    upgrade: isBn ? 'আপগ্রেড করুন' : 'Upgrade',
    suggestedTitle: isBn ? 'সাজেস্টেড প্রম্পট' : 'Suggested Prompts',
    recentTitle: isBn ? 'সাম্প্রতিক চ্যাট' : 'Recent Chats',
    noRecent: isBn ? 'কোনো সাম্প্রতিক চ্যাট নেই' : 'No recent chats',
    startNew: isBn ? 'নতুন চ্যাট শুরু করুন' : 'Start a new chat',
    emergencySuccess: isBn ? 'জরুরি অনুরোধ জমা দেওয়া হয়েছে। বিশেষজ্ঞ ২০-৩০ মিনিটের মধ্যে সাড়া দেবেন।' : 'Emergency request submitted. Expert will respond in 20-30 min.',
  };

  const suggestedPrompts = [
    isBn ? 'পদার্থবিজ্ঞানের গতি সূত্র ব্যাখ্যা করুন' : 'Explain laws of motion in Physics',
    isBn ? 'জৈব রসায়নের বেসিক কনসেপ্ট' : 'Organic chemistry basics',
    isBn ? 'ক্যালকুলাস ডেরিভেটিভ সমস্যা' : 'Calculus derivative problems',
    isBn ? 'কোষ বিভাজন প্রক্রিয়া' : 'Cell division process',
    isBn ? 'ইংরেজি গ্রামার টিপস' : 'English grammar tips',
    isBn ? 'বাংলা সাহিত্য বিশ্লেষণ' : 'Bangla literature analysis',
  ];

  const recentChats = [
    {
      id: 1,
      title: isBn ? 'পদার্থবিজ্ঞান - নিউটনের সূত্র' : 'Physics - Newton\'s Laws',
      time: isBn ? '২ ঘন্টা আগে' : '2 hours ago',
      messages: 12,
    },
    {
      id: 2,
      title: isBn ? 'গণিত - ক্যালকুলাস সাহায্য' : 'Math - Calculus Help',
      time: isBn ? 'গতকাল' : 'Yesterday',
      messages: 8,
    },
    {
      id: 3,
      title: isBn ? 'রসায়ন - জৈব যৌগ' : 'Chemistry - Organic Compounds',
      time: isBn ? '২ দিন আগে' : '2 days ago',
      messages: 15,
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        content: isBn
          ? 'আমি আপনার প্রশ্ন বুঝতে পেরেছি। এখানে একটি বিস্তারিত ব্যাখ্যা রয়েছে যা আপনাকে কনসেপ্টটি বুঝতে সাহায্য করবে...'
          : 'I understand your question. Here\'s a detailed explanation that will help you understand the concept...',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const handleEmergencySubmit = (data: EmergencyData) => {
    console.log('Emergency request:', data);
    setIsEmergencyModalOpen(false);
    toast.success(text.emergencySuccess);
    // Navigate to emergency page after a delay
    setTimeout(() => {
      onNavigate?.('emergency');
    }, 2000);
  };

  // Get last few messages for prefill
  const getRecentContext = () => {
    if (messages.length === 0) return '';
    const lastMessages = messages.slice(-3);
    return lastMessages.map(m => `${m.type === 'user' ? 'Me' : 'AI'}: ${m.content}`).join('\n\n');
  };

  return (
    <main className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#1D4ED8]">
              <Zap className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#0F172A]">{text.title}</h1>
              <p className="text-sm text-[#64748B]">{text.subtitle}</p>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={() => setIsEmergencyModalOpen(true)}
            className="border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#FEF2F2]"
          >
            <AlertCircle className="w-4 h-4" strokeWidth={2} />
            {text.needHelp}
          </Button>
        </div>
      </motion.div>

      {/* Main Layout - L2 Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
        {/* Left - Chat Area */}
        <div className="space-y-6">
          <Card className="h-[600px] flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <EmptyState
                  icon={<Sparkles className="w-12 h-12 text-[#94A3B8]" strokeWidth={1.5} />}
                  title={text.emptyTitle}
                  description={text.emptyDesc}
                />
              ) : (
                <>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      {/* Avatar */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                        message.type === 'user' ? 'bg-[#1D4ED8]' : 'bg-[#059669]'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-5 h-5 text-white" strokeWidth={2} />
                        ) : (
                          <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block p-4 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-[#1D4ED8] text-white'
                            : 'bg-[#F9FAFB] text-[#0F172A] border border-[#E2E8F0]'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        <p className="text-xs text-[#94A3B8] mt-1 px-1">{message.timestamp}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#059669] flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <div className="p-4 bg-[#F9FAFB] rounded-2xl border border-[#E2E8F0]">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-[#E2E8F0] p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={text.placeholder}
                  className="flex-1 px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8] outline-none text-sm placeholder:text-[#94A3B8]"
                />
                <Button variant="primary" onClick={handleSend} disabled={!input.trim()}>
                  <Send className="w-4 h-4" strokeWidth={2} />
                  {text.send}
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right - Info Panel */}
        <div className="space-y-6">
          {/* Plan Usage Card */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1D4ED8]">
                  <TrendingUp className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0F172A]">{text.planTitle}</h3>
                  <Badge variant="info" size="sm">{text.planType}</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#64748B]">{text.planUsage}</span>
                  <span className="font-semibold text-[#0F172A]">45/100</span>
                </div>
                <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[#1D4ED8] rounded-full"
                  />
                </div>
                <p className="text-xs text-[#94A3B8] mt-2">55 {text.questionsLeft}</p>
              </div>

              <Button variant="secondary" size="sm" className="w-full">
                {text.upgrade}
              </Button>
            </div>
          </Card>

          {/* Suggested Prompts */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#1D4ED8]" strokeWidth={2} />
              <h3 className="text-base font-semibold text-[#0F172A]">{text.suggestedTitle}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-2 bg-[#F9FAFB] text-[#64748B] border border-[#E2E8F0] rounded-lg text-xs hover:bg-[#EEF4FF] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all duration-200"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </Card>

          {/* Recent Chats */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-[#1D4ED8]" strokeWidth={2} />
              <h3 className="text-base font-semibold text-[#0F172A]">{text.recentTitle}</h3>
            </div>

            {recentChats.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-sm text-[#64748B] mb-3">{text.noRecent}</p>
                <Button variant="secondary" size="sm">
                  {text.startNew}
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                {recentChats.map((chat) => (
                  <motion.button
                    key={chat.id}
                    whileHover={{ x: 4 }}
                    className="w-full p-3 bg-[#F9FAFB] rounded-xl hover:bg-[#EEF4FF] transition-all duration-200 text-left border border-[#E2E8F0]"
                  >
                    <h4 className="text-sm font-semibold text-[#0F172A] mb-1">{chat.title}</h4>
                    <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                      <span>{chat.messages} {isBn ? 'বার্তা' : 'messages'}</span>
                      <span>{chat.time}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Emergency Escalation Modal */}
      <EmergencyEscalationModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onSubmit={handleEmergencySubmit}
        lang={lang}
        prefillData={{
          board: '',
          subject: '',
          problemDetails: getRecentContext(),
          hasImage: false,
        }}
      />
    </main>
  );
}