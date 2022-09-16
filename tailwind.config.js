/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  // purge: {
  //   content: [
  //     './src/pages/**/*.{js,ts,jsx,tsx}',
  //     './src/components/**/*.{js,ts,jsx,tsx}',
  //   ],
  //   options: {
  //     // https://purgecss.com/safelisting.html#patterns
  //     safelist: {
  //       standard: [/^bg-/, /^text-/],
  //     },
  //   },
  // },
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/*.sass',
  ],
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}',
  // ],
  theme: {
    extend: {},
  },
  plugins: [],
}
