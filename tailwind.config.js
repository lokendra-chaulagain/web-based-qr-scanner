/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6f7f8",
          100: "#eaf0f5",
          200: "#cfd9e7",
          300: "#b5c2d8",
          400: "#7f93ba",
          500: "#3056d3",
          600: "#294fbf",
          700: "#1d3e8f",
          800: "#142e60",
          900: "#0d2247",
        },
        secondary: {
          50: "#f2f4f5",
          100: "#e5e8eb",
          200: "#bfc8d0",
          300: "#99a3b4",
          400: "#4d6382",
          500: "#212b36",
          600: "#1d2730",
          700: "#161d23",
          800: "#0f1317",
          900: "#0a0d0f",
        },
        accent: {
          50: "#f4f6f7",
          100: "#e8edf0",
          200: "#c6d3d9",
          300: "#a4b9c1",
          400: "#617a93",
          500: "#637381",
          600: "#586c6a",
          700: "#45534f",
          800: "#2f3b35",
          900: "#223026",
        },
        "color-twitter": "#1d9af1",
        "color-facebook": "#1978f2",
      },
      //  breakpoints
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
