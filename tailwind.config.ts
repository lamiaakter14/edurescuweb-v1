import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--brand-blue)',
        'brand-blue': 'var(--brand-blue)',
        'brand-blue-dark': 'var(--brand-blue-dark)',
        'brand-blue-light': 'var(--brand-blue-light)',
        'emergency-red': 'var(--emergency-red)',
        'success-green': 'var(--success-green)',
        'warning-yellow': 'var(--warning-yellow)',
        'surface-bg': 'var(--surface-bg)',
        'card': 'var(--card-bg)',
        'neutral-border': 'var(--neutral-border)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
