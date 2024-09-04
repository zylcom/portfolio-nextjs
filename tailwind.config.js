/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "marquee-left": "marquee 15s linear infinite",
        "marquee-right": "marquee 15s linear infinite reverse",
      },
      colors: {
        "black-of-night": "#333739",
        "bleached-silk": "#f2f2f2",
        "dire-wolf": "#272727",
        "dynamic-black": "#1d1d1d",
        "eerie-black": "#1a1a1a",
        lighthouse: "#f4f4f4",
        nickel: "#929292",
        "piano-black": "#161819",
        "zhen-zhu-bai-pearl": "#f8f8f8",
      },
      fontFamily: {
        charter: ["charter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
