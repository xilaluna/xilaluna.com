/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      dmmono: ['DM Mono', 'monospace'],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
