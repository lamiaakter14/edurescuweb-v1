import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export function Select({
  label,
  value,
  onChange,
  options,
  error,
  disabled = false,
  required = false,
  placeholder,
  className = '',
}: SelectProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-[#0F172A]">
          {label}
          {required && <span className="text-[#DC2626] ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full px-4 py-3 pr-10 rounded-xl border transition-all duration-200 text-sm appearance-none cursor-pointer ${
            error
              ? 'border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]'
              : 'border-[#E2E8F0] focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8]'
          } ${
            disabled ? 'bg-[#F9FAFB] cursor-not-allowed opacity-60' : 'bg-white'
          } text-[#0F172A] outline-none`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" strokeWidth={2} />
      </div>
      
      {error && <p className="text-xs text-[#DC2626]">{error}</p>}
    </div>
  );
}
