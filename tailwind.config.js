/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/*.js"], // Add JavaScript files in the content array
  theme: {
    extend: {
      animation: {
        fadeInScale: 'fadeInScale 3s ease-out forwards', // Slow fade-in and scale-up animation
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },     // Start with small scale and no opacity
          '25%': { opacity: '0.25', transform: 'scale(0.9)' },  // 25% opacity and 90% scale
          '50%': { opacity: '0.5', transform: 'scale(1)' },     // 50% opacity and 100% scale
          '75%': { opacity: '0.75', transform: 'scale(1.05)' }, // 75% opacity and 105% scale
          '100%': { opacity: '1', transform: 'scale(1)' },      // Final full opacity and scale
        },
      },
    },
  },
  plugins: [],
};
