/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      filter: {
        'saturate-0': 'saturate(0)',
        'saturate-100': 'saturate(1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

