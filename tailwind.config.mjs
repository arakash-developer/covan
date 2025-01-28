/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bannar': "url('/bannar1.jpg')",
        'bannar2': "url('/bannar2.jpg')",
        'bannar3': "url('/bannar3.jpg')",
        'cat1': "url('/cat1.jpg')",
        'cat2': "url('/cat2.jpg')",
        'cat3': "url('/cat3.jpg')",
      },
    },
  },
  plugins: [],
};
