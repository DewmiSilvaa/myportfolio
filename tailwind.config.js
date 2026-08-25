/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        space: {
          50: '#e8eef7',
          100: '#c4d1e6',
          200: '#97add0',
          300: '#6a8bb8',
          400: '#4767a0',
          500: '#2f4d85',
          600: '#213a68',
          700: '#17294c',
          800: '#0e1b35',
          900: '#070f22',
          950: '#03060f',
        },
        nebula: {
          400: '#4dd0e1',
          500: '#26c6da',
          600: '#00acc1',
        },
        stardust: {
          400: '#ffd54f',
          500: '#ffca28',
          600: '#ffb300',
        },
        mars: {
          400: '#ff7043',
          500: '#ff5722',
          600: '#e64a19',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
