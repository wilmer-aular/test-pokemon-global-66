/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkCharcoal: "#353535",
      dimGray: "#5E5E5E",
      silver: "#BFBFBF",
      darkRed: "#C00E20",
      gainsboro: "#E8E8E8",
      goldenrod: "#ECA539",
      crimson: "#F22539",
      whiteSmoke: "#F5F5F5",
      snow: "#F9F9F9"
    },
    extend: {
      backgroundImage: {
       'image-title-modal': "url('./assets/backgroundModal.png')",
      }
    }
  },
  plugins: [],
}

