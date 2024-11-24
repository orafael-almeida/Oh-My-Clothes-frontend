import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        rosa: "#F35C7A",
        "gradient-start": "#3de85d",
        "gradient-middle": "#03f6f4",
        "gradient-end": "#937fff",
      },
      screens: {
        xm: "480px",
        xs: "375px",
        xxs: "320px",
      },
    },
  },
  plugins: [],
};
export default config;
