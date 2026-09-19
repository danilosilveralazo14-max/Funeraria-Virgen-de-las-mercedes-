/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        marfil: {
          DEFAULT: "#F7F1E4",
          soft: "#FBF7EE",
          deep: "#EFE4CC",
        },
        vino: {
          DEFAULT: "#5C1A2B",
          light: "#7A2839",
          dark: "#3E0F1C",
        },
        dorado: {
          DEFAULT: "#B8933D",
          light: "#D6B868",
          dark: "#8C6C26",
        },
        tinta: "#2B2620",
      },
      fontFamily: {
        display: ["\"Poppins\"", "sans-serif"],
        body: ["\"Work Sans\"", "sans-serif"],
      },
      letterSpacing: {
        widish: "0.04em",
      },
      boxShadow: {
        quiet: "0 1px 0 0 rgba(43, 38, 32, 0.08)",
      },
    },
  },
  plugins: [],
};
