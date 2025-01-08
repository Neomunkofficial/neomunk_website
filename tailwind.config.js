/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/.html", "./dist/.js"], // Add JavaScript files in the content array
  theme: {
    extend: {
      animation: {
        fadeInScale: 'fadeInScale 5s ease-out forwards', // Slow animation
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },      // Start at 0 scale
          '25%': { opacity: '0.25', transform: 'scale(0.9)' }, // 25% opacity and 25% scale
          '50%': { opacity: '0.5', transform: 'scale(1)' },   // 50% opacity and 50% scale
          '75%': { opacity: '0.75', transform: 'scale(1.05)' }, // 75% opacity and 75% scale
          '100%': { opacity: '1', transform: 'scale(1)' },      // Final full opacity and 100% scale
        },
      },
    },
  },
  plugins: [],
};