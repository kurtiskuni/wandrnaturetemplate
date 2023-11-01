/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'secondary': ['Source San 3', 'ui-sans-serif'],
      'primary': ['Lora', 'ui-serif'],

    },
  },
  plugins: [],
}
