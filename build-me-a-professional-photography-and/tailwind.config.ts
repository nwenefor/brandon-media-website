import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06070a",
        charcoal: "#11141a",
        ivory: "#f7f1e7",
        bone: "#f5f1e8",
        brass: "#c6a15b",
        gold: "#C8A96A",
        wine: "#8f263a",
        cyan: "#59d3d8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(89, 211, 216, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
