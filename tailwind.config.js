/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '2k': '160rem',
      },
      backgroundImage: {
        'close-icon': "url('./assets/close-icon.svg')"
      }
    },
  },
  plugins: [],
};
