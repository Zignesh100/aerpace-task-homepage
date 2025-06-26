/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-out forwards', // ✅ Removed extra comma
        // If you want to add fadeInUp separately:
        // 'fadeInUp': 'fadeInUp 1.2s ease-out forwards'
      },
    },
  },
  plugins: [],
};
