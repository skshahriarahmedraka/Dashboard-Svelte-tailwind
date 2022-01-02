module.exports = {
  mode:"jit",
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {


    extend: {
      fontFamily : {
        sans : ['Barlow', 'sans-serif']
      },
      colors: {
        svelte: '#ff3e00',
        gray : {
          100 : '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          900: '#1F1D2B',
          800: '#252836',
        },
        primary : '#EB966A',
        accent : {
          blue: '#65B0F6',
          orange: '#FFB572',
          red: '#FF7CA3',
          green: '#50D1AA',
          purple : '#9290FE'
        }
      },
      boxShadow : {
        primary : '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top' : '4px 4px 0 #252836',
        'inverse-bottom' : '4px -4px 0 #252836'
      }
    },
  },
  plugins: [
        require('@tailwindcss/line-clamp'),
  ],
}
