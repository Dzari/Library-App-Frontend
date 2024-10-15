/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '2k': '160rem',
      },
      backgroundImage: {
        'close-icon': "url('./assets/close-icon.svg')",
        'edit-icon': "url('./assets/edit-icon.svg')",
        'home-icon': "url('./assets/home-icon.svg')",
        'hover-edit-icon': "url('./assets/hover-edit-icon.svg')",
        'hover-home-icon': "url('./assets/hover-home-icon.svg')",
      },
    },
  },
  plugins: [],
};
