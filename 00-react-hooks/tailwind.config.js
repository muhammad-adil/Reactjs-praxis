/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#FFFFFF",
        flowText: "#475467",
        primary: "#F59C00",
        "primary-foreground": "#FFFFFF",
        "primary-hover": "#C57F04",
        "alice-blue": "#F1F3F5",
        "gray-blue": "#6A97A8",
      },
    },
  },
  plugins: [],
};
