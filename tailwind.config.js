/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fitlog-bg": "#0a0a0a",
        "fitlog-surface": "#151515",
        "fitlog-border": "#262626",
        "fitlog-accent": "#ccff00",
        "fitlog-muted": "#9ca3af",
      },
      fontFamily: {
        display: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
