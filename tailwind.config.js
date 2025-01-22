/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'], // Support Docusaurus dark mode
  corePlugins: {
    preflight: false, // Disable Tailwind's reset
  },
  blocklist: [
    'container' // Avoid conflicts with Docusaurus container
  ],
};