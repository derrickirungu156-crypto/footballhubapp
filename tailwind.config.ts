import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pitch: {
          950: "#0A0F0C",
          900: "#0D1512",
          800: "#141F1A",
          700: "#1C2A23",
          600: "#2A3D33"
        },
        floodlight: {
          400: "#F0C669",
          500: "#E8B23D",
          600: "#C6912A"
        },
        mist: {
          100: "#F2F5F1",
          300: "#C7D0C9",
          500: "#8B9992",
          700: "#5B6960"
        }
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-ibm-plex)", "sans-serif"]
      },
      maxWidth: {
        prose: "68ch"
      }
    }
  },
  plugins: []
};

export default config;
