/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
          pink: "#F93270",
          lemon: "#8FBF1A",
          green: "#005C29",
          white: "#ffffff",
              },
    },
  },
  plugins: [],
};
