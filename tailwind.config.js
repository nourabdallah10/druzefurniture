/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // Luxury neutral palette
        cream: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4dd',
          300: '#d4cdc2',
          400: '#b8afa0',
          500: '#9f9482',
          600: '#857a6a',
        },
        beige: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd1',
          300: '#d9cbb5',
          400: '#c7b394',
          500: '#b59d76',
          600: '#9d865e',
        },
        taupe: {
          50: '#f7f6f4',
          100: '#edeae5',
          200: '#d9d3c8',
          300: '#c1b7a6',
          400: '#a6967f',
          500: '#8b7a65',
          600: '#706151',
        },
        // Accent colors (subtle and elegant)
        accent: {
          gold: '#c9a961',
          bronze: '#a87c4f',
          sage: '#a8b5a0',
          charcoal: '#2d2d2d',
        },
      },
      fontFamily: {
        sans: [
          'Assistant',
          'Rubik',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: [
          'Playfair Display',
          'Lora',
          'Crimson Text',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        hebrew: ['Assistant', 'Rubik', 'Arial', 'sans-serif'],
      },
      spacing: {
        'touch': '44px',
        // 4px base spacing system
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        '34': '8.5rem', // 136px
        '38': '9.5rem', // 152px
        '42': '10.5rem', // 168px
      },
      fontSize: {
        // Luxury typography scale
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
