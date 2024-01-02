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
      𝘴𝘤𝘳𝘦𝘦𝘯𝘴: {
        𝘴𝘮: "600𝘱𝘹",
        𝘮𝘥: "750𝘱𝘹",
        𝘭𝘨: "1000𝘱𝘹",
        𝘹𝘭: "1200𝘱𝘹",
        "2𝘹𝘭": "1500𝘱𝘹",
        "3𝘹𝘭": "1800𝘱𝘹",
        "4𝘹𝘭": "2100𝘱𝘹",
      },
    },
  },
  plugins: [],
};
