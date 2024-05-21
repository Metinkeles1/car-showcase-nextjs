/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      colors: {
        "light-white-100": "#F1F4F5",
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
          softer: "#849BFF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        danger: "#dc3545",
        info: "#17a2b8",
        warning: "#ffc107",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
        "reservation-bg":
          "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url('/reservation-bg.jpg')",
      },
    },
  },
  plugins: [],
};
