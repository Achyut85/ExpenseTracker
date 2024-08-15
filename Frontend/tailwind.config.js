/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222260',
        'primary-2': 'rgba(34, 34, 96, 1)',
        'primary-3': 'rgba(34, 34, 96, 0.4)',
        'color-green': '#42AD00',
        'color-grey': '#aaa',
        'color-accent': '#F56692',
        'color-delete': '#FF0000',
        'bg-color':'#FCF6F9',
      },
      fontFamily: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [ ],
}