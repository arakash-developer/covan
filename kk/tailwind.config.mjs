/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins','sans-serif'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'lg': '992px',
        '3xl':'1620px',
        '4xl':'1720px',
        '5xl':'1820px',
        '6xl':'1920px',
      },
    },
  },
  plugins: [],
  darkMode:"class",
};
