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
        "primary-100": "#67bdb7",
        faint: "rgba(255, 255, 255, 0.1)",
      },
      screens: {
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },
      fontSize: {
        "6xl": "60px",
      },
      maxWidth: {
        1300: "1300px",
        1535: "1535px",
      },
      spacing: {
        58: "58px",
        15: "4rem",
        20: "5rem",
        22: "6rem",
        "80vh": "80vh",
        "100vh": "100vh",
      },
      borderRadius: {
        24: "24px",
        40: "40px",
      },
      height: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
