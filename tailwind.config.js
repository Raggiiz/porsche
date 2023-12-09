module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,svg}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'porsche': ['porscheregular']
      },
      backgroundImage: {
        'customize': "url('./src/assets/custom-bg.png')",
      },
      colors: {
        'yellow-primary': '#E2B558',
        'dark-primary': '#161616',
        'yellow-primary': '#E2B558'
      }
    },
  },
  plugins: [],
};
