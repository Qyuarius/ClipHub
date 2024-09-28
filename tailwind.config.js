/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jb: ['JetBrains Mono', 'monospace'],
        nsjp: ['Noto Sans JP', 'monospace'],
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(200px, 1fr))',
        'largeGallery': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}

