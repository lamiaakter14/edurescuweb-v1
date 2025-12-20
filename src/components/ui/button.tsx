import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

// Export buttonVariants for shadcn components
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'default' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'default' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
  icon,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#1D4ED8] text-white hover:bg-[#1E40AF] shadow-sm hover:shadow-md active:scale-[0.98]',
    secondary: 'bg-white text-[#1D4ED8] border-[0.5px] border-[#E2E8F0] hover:bg-[#EEF4FF] active:scale-[0.98]',
    ghost: 'bg-transparent text-[#64748B] hover:bg-[#F9FAFB] hover:text-[#0F172A] active:scale-[0.98]',
    danger: 'bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-sm hover:shadow-md active:scale-[0.98]',
    outline: 'bg-white text-[#1D4ED8] border-[1px] border-[#E2E8F0] hover:bg-[#EEF4FF] active:scale-[0.98]',
    default: 'bg-[#1D4ED8] text-white hover:bg-[#1E40AF] shadow-sm hover:shadow-md active:scale-[0.98]',
    destructive: 'bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-sm hover:shadow-md active:scale-[0.98]',
    link: 'bg-transparent text-[#1D4ED8] hover:underline active:scale-[0.98]',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    default: 'px-4 py-2.5 text-sm',
    icon: 'w-9 h-9 p-0',
  };

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>{children}</span>
        </>
      ) : (
        <>
          {icon && icon}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
}
