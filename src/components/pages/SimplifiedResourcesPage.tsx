import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';

interface SimplifiedResourcesPageProps {
  lang?: 'en' | 'bn';
}

export function SimplifiedResourcesPage({ lang = 'en' }: SimplifiedResourcesPageProps) {
  const isBn = lang === 'bn';

  const text = {
    title: isBn ? 'রিসোর্স' : 'Resources',
    subtitle: isBn ? 'ঢাকা বোর্ডের শিক্ষার্থীদের জন্য কিউরেটেড উপকরণ' : 'Curated materials for Dhaka Board students',
    forYourBoard: isBn ? 'আপনার বোর্ডের জন্য' : 'For Your Board',
    formulas: isBn ? 'সূত্র ও শর্টকাট' : 'Formulas & Shortcuts',
    pastPapers: isBn ? 'পুরাতন প্রশ্নপত্র' : 'Past Papers',
    preview: isBn ? 'প্রিভিউ' : 'Preview',
    download: isBn ? 'ডাউনলোড' : 'Download',
    pages: isBn ? 'পৃষ্ঠা' : 'pages',
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

  const sections = [
    {
      title: text.forYourBoard,
      resources: [
        { subject: 'Physics', title: 'HSC Physics Guide 2025', board: 'Dhaka Board', pages: 120 },
        { subject: 'Chemistry', title: 'Organic Chemistry Revision Notes', board: 'Dhaka Board', pages: 85 },
        { subject: 'Math', title: 'Higher Mathematics Complete Guide', board: 'Dhaka Board', pages: 200 },
        { subject: 'Biology', title: 'Cell Biology & Genetics', board: 'Dhaka Board', pages: 95 },
        { subject: 'ICT', title: 'Programming Fundamentals', board: 'Dhaka Board', pages: 65 },
      ],
    },
    {
      title: text.formulas,
      resources: [
        { subject: 'Physics', title: 'Physics Formula Sheet - Mechanics', board: 'All Boards', pages: 12 },
        { subject: 'Chemistry', title: 'Organic Reactions Quick Reference', board: 'All Boards', pages: 8 },
        { subject: 'Math', title: 'Calculus Formulas & Shortcuts', board: 'All Boards', pages: 15 },
        { subject: 'Biology', title: 'Human Physiology Quick Notes', board: 'All Boards', pages: 10 },
        { subject: 'Math', title: 'Trigonometry Identities', board: 'All Boards', pages: 6 },
      ],
    },
    {
      title: text.pastPapers,
      resources: [
        { subject: 'Physics', title: 'HSC Physics 2024 Question Paper', board: 'Dhaka Board', pages: 16 },
        { subject: 'Chemistry', title: 'HSC Chemistry 2024 Question Paper', board: 'Dhaka Board', pages: 16 },
        { subject: 'Math', title: 'HSC Higher Math 2024 Question Paper', board: 'Dhaka Board', pages: 20 },
        { subject: 'Biology', title: 'HSC Biology 2023 Question Paper', board: 'Dhaka Board', pages: 18 },
        { subject: 'Physics', title: 'HSC Physics 2023 Question Paper', board: 'Dhaka Board', pages: 16 },
      ],
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-[#0F172A] mb-2">{text.title}</h1>
        <p className="text-sm text-[#64748B]">{text.subtitle}</p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-[#1D4ED8]" strokeWidth={2} />
              <h2 className="text-lg font-semibold text-[#0F172A]">{section.title}</h2>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.resources.map((resource, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] hover:shadow-md hover:border-[#1D4ED8]/20 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${getSubjectColor(resource.subject)}20` }}
                    >
                      <FileText
                        className="w-6 h-6"
                        style={{ color: getSubjectColor(resource.subject) }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Subject Badge */}
                      <span
                        className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white mb-2"
                        style={{ backgroundColor: getSubjectColor(resource.subject) }}
                      >
                        {resource.subject}
                      </span>

                      {/* Title */}
                      <h3 className="text-sm font-semibold text-[#0F172A] mb-1 line-clamp-1">
                        {resource.title}
                      </h3>

                      {/* Meta */}
                      <p className="text-xs text-[#94A3B8] mb-3">
                        {resource.board} • {resource.pages} {text.pages}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button variant="secondary" size="sm" className="flex-1">
                          <Eye className="w-3 h-3" strokeWidth={2} />
                          {text.preview}
                        </Button>
                        <Button variant="primary" size="sm" className="flex-1">
                          <Download className="w-3 h-3" strokeWidth={2} />
                          {text.download}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
