/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        darkBlue: "#0026C2",
        lightBlue: "#4E96E1",
        veryDarkBlue: "#010C48",
        normalBlue: "#251AE0",
        veryLightBlue: "#F3F5FE",
        blur: "#DDE8FF",
      },
      spacing: { "300px": "300px", "500px": "500px" },
    },
  },
  plugins: [],
};
