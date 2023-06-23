/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
      cursive: ["Abril Fatface"],
    },
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        dropDown: {
          "0%, 100%": { tranlateY: "0%" },
          "50%": { tranlateY: "50%" },
        },
        dropUp: {
          "0%, 100%": { tranlateY: "100%" },
          "50%": { tranlateY: "50%" },
        },
        slideLeft: {
          "0%, 100%": { tranlateX: "100%" },
          "50%": { tranlateX: "50%" },
        },
        slideRight: {
          "0%, 100%": { tranlateX: "-100%" },
          "50%": { tranlateX: "50%" },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.25s ease-in-out",
        zoomOut: "zoomOut 0.25s ease-in-out",
        dropDown: "dropDown 0.75s ease-in-out",
        dropUp: "dropUp 0.75s ease-in-out",
        slideLeft: "slideLeft 0.75s ease-in-out",
        slideRight: "slideRight 0.75s ease-in-out",
      },
    },
  },
  plugins: [],
};
