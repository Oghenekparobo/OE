/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenCustom: "#71A894",
      },
      backgroundColor: {
        greenCustom: "#71A894",
        goldCustom: "#F3F0EA",
      },
      borderColor: {
        custom: "#71A894",
      },
    },
  },
  plugins: [],
};
