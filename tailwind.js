module.exports = {
  theme: {
    fontFamily: {
      base: ['TT Norms', 'sans-serif'],
      heading: ['bookmania', 'serif'],
    },
    container: {
      center: true,
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      },
    extend: {
      colors: {
        color1: "#869CC4", // Blue
        color2: "#8C9DC1", // Overlay Blue
        color3: "#2991d6", // Light Blue
    


        gray: {
          '100': '#f9f9f9',
          '200': '#F4F7FA', // Used in Comp
          '300': '#eeeeee',
          '400': '#d4d4d4',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#4D4D4D', // Comp Header & Footer
          '800': '#363636',
          '900': '#2B2B2B', // Used in Comp 'black'
        },
      },
      fontSize: {
        '6xl': '3.5rem',
      } 
    }
  },
  variants: {},
  plugins: []
}
