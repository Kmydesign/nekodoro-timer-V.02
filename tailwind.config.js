/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["retro", "synthwave", "night"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  plugins: [
    require('daisyui'),
  ],
};
