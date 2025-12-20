import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  required?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  type = 'text',
  required = false,
  helperText,
  icon,
  className = '',
}: InputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-[#0F172A]">
          {label}
          {required && <span className="text-[#DC2626] ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
            icon ? 'pl-10' : ''
          } ${
            error
              ? 'border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]'
              : 'border-[#E2E8F0] focus:ring-2 focus:ring-[#1D4ED8]/20 focus:border-[#1D4ED8]'
          } ${
            disabled ? 'bg-[#F9FAFB] cursor-not-allowed opacity-60' : 'bg-white'
          } placeholder:text-[#94A3B8] text-[#0F172A] outline-none`}
        />
      </div>
      
      {(error || helperText) && (
        <p className={`text-xs ${error ? 'text-[#DC2626]' : 'text-[#64748B]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
