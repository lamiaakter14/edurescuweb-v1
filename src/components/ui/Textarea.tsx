import React from 'react';

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  rows?: number;
  className?: string;
}

export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  helperText,
  rows = 4,
  className = '',
}: TextareaProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-[#0F172A]">
          {label}
          {required && <span className="text-[#DC2626] ml-1">*</span>}
        </label>
      )}
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 text-sm resize-none ${
          error
            ? 'border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]'
            : 'border-[#E2E8F0] focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8]'
        } ${
          disabled ? 'bg-[#F9FAFB] cursor-not-allowed opacity-60' : 'bg-white'
        } placeholder:text-[#94A3B8] text-[#0F172A] outline-none`}
      />
      
      {(error || helperText) && (
        <p className={`text-xs ${error ? 'text-[#DC2626]' : 'text-[#64748B]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
