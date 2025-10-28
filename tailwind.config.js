
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./{,src,components,hooks,pages,sections}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        dark: '#0a0a0a',
        light: '#f5f5f5',
        primary: {
          light: '#6366f1',
          dark: '#818cf8',
        },
        secondary: {
            light: '#10b981',
            dark: '#34d399',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'swirl': 'swirl 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
            '0%': { transform: 'translateY(50px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        swirl: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
