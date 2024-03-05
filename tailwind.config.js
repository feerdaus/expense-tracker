/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#438883",
        "primary-50": "#EEF8F7",
      },
      screens: {
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },
      maxWidth: {
        1535: "1535px",
      },
      spacing: {
        58: "58px",
      },
    },
  },
  plugins: [],
};
