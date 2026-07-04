/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        clinic: {
          ink: '#152232',
          muted: '#5B6B7B',
          mist: '#EAF5FA',
          wave: '#4FB3D9',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 110, 140, 0.18)',
        card: '0 4px 24px -6px rgba(21, 34, 50, 0.08)',
      },
      keyframes: {
        pulseline: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        pulseline: 'pulseline 2.8s linear forwards',
        floaty: 'floaty 5s ease-in-out infinite',
        ripple: 'ripple 2.4s ease-out infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        clinic: {
          primary: '#0F6E8C',
          'primary-content': '#FFFFFF',
          secondary: '#4FB3D9',
          accent: '#14B8A6',
          neutral: '#152232',
          'base-100': '#FFFFFF',
          'base-200': '#F3FAFC',
          'base-300': '#E3F1F6',
          info: '#4FB3D9',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
