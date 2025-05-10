module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this matches your project's structure
  ],
  theme: {
    extend: {
      colors: {
        superred: '#ff1e1e',
        superdark: '#111',
        superblack: '#000',
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'], // Add the SF Pro Display font
      },
    },
  },
  plugins: [],
};
