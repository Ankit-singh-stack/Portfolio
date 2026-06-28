export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.14)',
      },
      backgroundImage: {
        gradientHero: 'radial-gradient(circle at top, rgba(96,165,250,0.16), transparent 40%), radial-gradient(circle at bottom right, rgba(236,72,153,0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
};
