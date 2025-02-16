/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
import defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.html",
    "./src/**/**/*.html",
    "./node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#66B741",
        secondary: "#FEB534",
        shade: "#8f8b67",
        light: "#C1F2B0",
      },
    },
    backgroundImage:{
      // gradient: "linear-gradient(90deg, rgba(139,213,105,1) 0%, rgba(255,255,255,1) 100%)"
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin"), require("preline/plugin")],
};
