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
        'topography': "url('./src/assets/topography-bg.svg')"
      },
      backgroundColor: {
        'dark-primary': '#161616',
        'yellow-primary': '#E2B558'
      },
      borderColor: {
        'yellow-primary': '#E2B558'
      }
    },
  },
  plugins: [],
};
