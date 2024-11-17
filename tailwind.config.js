/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4AFAB",
        secondary: "#680b5b",
        accent: "#d9a5c8",
      },
    },
  },
  plugins: [require("daisyui")],
};
