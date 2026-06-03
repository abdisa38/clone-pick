import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          card: 'var(--color-bg-card)',
          glass: 'var(--color-bg-glass)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          glow: 'var(--color-border-glow)',
        },
        accent: {
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
          tertiary: 'var(--color-accent-tertiary)',
          emerald: 'var(--color-accent-emerald)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        headline: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        subheadline: ['"General Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        hero: 'var(--text-hero)',
        display: 'var(--text-display)',
        title: 'var(--text-title)',
        body: 'var(--text-body)',
        label: 'var(--text-label)',
      },
      spacing: {
        section: 'var(--section-padding)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      borderRadius: {
        card: 'var(--card-radius)',
        'card-sm': 'var(--card-radius-sm)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-text': 'var(--gradient-text)',
        'gradient-border': 'var(--gradient-border)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 25s ease-in-out infinite',
        'float-slow': 'float 30s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100px, -100px)' },
          '50%': { transform: 'translate(-50px, 100px)' },
          '75%': { transform: 'translate(-100px, -50px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
