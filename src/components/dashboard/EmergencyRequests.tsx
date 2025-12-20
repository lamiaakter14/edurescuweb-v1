import React, { useState } from 'react';
import { AlertCircle, Upload, Clock, CreditCard } from 'lucide-react';

export function EmergencyRequests() {
  const [selectedPayment, setSelectedPayment] = useState('bkash');
  
  const requests = [
    { 
      subject: 'Integration by Parts',
      subjectBn: 'অংশ দ্বারা সমাকলন', 
      status: 'Pending',
      statusBn: 'অপেক্ষমাণ',
      difficulty: 'MEDIUM',
      color: '#FFCC62'
    },
    { 
      subject: 'Calculus',
      subjectBn: 'ক্যালকুলাস', 
      status: 'Pending',
      statusBn: 'অপেক্ষমাণ',
      difficulty: 'LOW',
      color: '#32D583'
    },
  ];

  const difficultyColors: Record<string, string> = {
    LOW: '#059669',
    MEDIUM: '#FBBF24',
    HIGH: '#DC2626',
    CRITICAL: '#DC2626'
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-[#E2E8F0]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#DC2626]/10">
            <AlertCircle className="w-5 h-5 text-[#DC2626]" />
          </div>
          <div>
            <h3 className="text-[#0F172A]">Emergency Requests</h3>
            <p className="text-sm text-[#64748B]">জরুরি সহায়তা অনুরোধ</p>
          </div>
        </div>
        
        <button className="text-sm text-[#1D4ED8] font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Request List */}
      {requests.length > 0 && (
        <div className="space-y-3 mb-4">
          {requests.map((request, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-[#FEF3C7] rounded-xl border border-[#FBBF24]/30">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FBBF24]" />
                <div>
                  <p className="font-medium text-[#0F172A] text-sm">{request.subject}</p>
                  <p className="text-xs text-[#64748B]">{request.subjectBn}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span 
                  className="px-2 py-1 rounded-md text-xs font-medium text-white"
                  style={{ backgroundColor: difficultyColors[request.difficulty] }}
                >
                  {request.difficulty}
                </span>
                <span className="text-xs font-medium text-[#FBBF24]">{request.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          Upload Problem / সমস্যা আপলোড করুন
        </label>
        <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-6 text-center hover:border-[#1D4ED8] hover:bg-[#F9FAFB] transition-all duration-200 cursor-pointer shadow-sm">
          <Upload className="w-8 h-8 text-[#1D4ED8] mx-auto mb-2" />
          <p className="text-sm text-[#64748B] mb-1">Drop file or click to upload</p>
          <p className="text-xs text-[#94A3B8]">PNG, JPG, PDF up to 10MB</p>
        </div>
      </div>

      {/* Difficulty Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          Difficulty Level / অসুবিধার স্তর
        </label>
        <div className="grid grid-cols-4 gap-2">
          {['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((level) => (
            <button
              key={level}
              className="py-2 px-3 rounded-lg text-xs font-medium border-2 transition-all duration-200 hover:shadow-sm"
              style={{
                borderColor: difficultyColors[level],
                backgroundColor: `${difficultyColors[level]}15`,
                color: difficultyColors[level]
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          Payment Method / পেমেন্ট পদ্ধতি
        </label>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 border-2 border-[#E2E8F0] rounded-xl cursor-pointer hover:bg-[#F9FAFB] transition-all duration-200">
            <input 
              type="radio" 
              name="payment" 
              value="bkash"
              checked={selectedPayment === 'bkash'}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-4 h-4 text-[#1D4ED8]"
            />
            <CreditCard className="w-5 h-5 text-[#1D4ED8]" />
            <span className="font-medium text-[#0F172A]">bKash</span>
          </label>
          
          <label className="flex items-center gap-3 p-3 border-2 border-[#E2E8F0] rounded-xl cursor-pointer hover:bg-[#F9FAFB] transition-all duration-200">
            <input 
              type="radio" 
              name="payment" 
              value="nagad"
              checked={selectedPayment === 'nagad'}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-4 h-4 text-[#1D4ED8]"
            />
            <CreditCard className="w-5 h-5 text-[#FBBF24]" />
            <span className="font-medium text-[#0F172A]">Nagad</span>
          </label>
        </div>
      </div>

      {/* Tutor ETA */}
      <div className="mb-4 p-3 bg-[#DCFCE7] rounded-xl border border-[#059669]/30">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#059669]" />
          <div>
            <p className="text-sm font-medium text-[#0F172A]">Estimated Response Time</p>
            <p className="text-xs text-[#64748B]">প্রত্যাশিত সময়: <span className="font-semibold">৬-১০ মিনিট</span></p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full py-3 bg-[#DC2626] text-white rounded-xl font-medium shadow-md hover:bg-[#B91C1C] hover:shadow-lg transition-all duration-200 btn-press">
        Submit Emergency Request
      </button>
    </div>
  );
}