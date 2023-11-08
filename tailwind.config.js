/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black':'#00031D',
        'custom-blue' : '#082B78',
        'custom-golden' : '#C9BF23',
        'custom-grey' : '#f4f1f1',
      }
    },
  },
  plugins: [],
}

