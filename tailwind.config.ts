


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {

        abril: ['"Abril Fatface"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        andada: ['"Andada Pro"', "serif"],
        monster: ['"Monster"', 'sans-serif'],
      },
      screens: {
        lsm: "350px",
  
        esm: "400px",
  
        em: "480px",
  
        ew: "510px",
  
        vem: "560px",
  
        sm: "640px",
  
        md: "768px",

        emd: "999px",

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xlg: "1150px",

        xl: "1280px",
      }
    },
  },
  plugins: [
   
  ],
};
export default config;
