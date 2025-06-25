/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if your source files are in a different directory or have different extensions
  ],
  theme: {
    extend: {
      colors: {
        "border-input": "#e5e7eb",
      }
    },
  },
  plugins: [],
};