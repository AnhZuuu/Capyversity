const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|date-picker|ripple|button|spinner|calendar|date-input|popover).js"
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-15deg)' },
        '50%': { transform: 'rotate(15deg)' },
      },
      heartBeat: {
        '0%': { transform: 'scale(1);' },
        '14%': { transform: 'scale(1.3);' },
        '28%': { transform: 'scale(1);' },
        '42%': { transform: 'scale(1.3);' },
        '70%': { transform: 'scale(1);' },
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      heartBeat: 'heartBeat 1s infinite',
    }
  },
  plugins: [nextui()],
};
