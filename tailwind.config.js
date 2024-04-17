/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["Poppins"],
      cursive: ["Abril Fatface"],
      
    },
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
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
