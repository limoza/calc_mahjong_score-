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
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/*.sass',
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
