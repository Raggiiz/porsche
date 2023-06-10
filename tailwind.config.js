module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'porsche': ['porscheregular']
      },
      backgroundImage: {
        'customize': "url('src/assets/custom-bg.png')",
      },
    },
  },
  plugins: [],
};
