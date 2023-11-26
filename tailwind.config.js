/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}

