/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aztecPurple: '#7741FB',
        iceberg: '#E3EFFA',
        feta: '#EFFBF2',
        pastelPink: '#F8D4C8',
      },
    },
  },
  plugins: [],
} 