/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1152d4',
          dark: '#0e41a8',
          light: '#4175de',
        },
        darkBg: '#0a0a0c',
        darkSurface: '#16161a',
        surface: '#121212', // From servicios
        accent: '#1e3a8a',  // From servicios
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'theme': '8px',
        'custom': '8px' // Maintain compatibility with both templates
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s infinite ease-in-out'
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(17, 82, 212, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(17, 82, 212, 0.4)' }
        }
      }
    }
  },
  plugins: [],
}
