/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#",
        secondary: "#750310",
        bgSecond: "#171A1E",
        textColor: "#D9D9D9",
      },
    },
  },
  plugins: [require("daisyui")],
};
