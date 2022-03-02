module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile-S-Laptop': {'min': '320px', 'max': '1024px'},
      // => @media (min-width: 320px and max-width: 1024px) { ... }
      
      'laptop-4k': {'min': '1024px', 'max': '2560px'},
        // => @media (min-width: 1024px and max-width: 2560px) { ... }       

      'mobile-S': {'min': '320px', 'max': '375px'},
       // => @media (min-width: 320px and max-width: 375px) { ... }

       'mobile-M': {'min': '375px', 'max': '425px'},
       // => @media (min-width: 375px and max-width: 425px) { ... }

       'mobile-L': {'min': '425px', 'max': '768px'},
       // => @media (min-width: 425px and max-width: 768px) { ... }

       'tablet': {'min': '768px', 'max': '1024px'},
       // => @media (min-width: 768px and max-width: 1024px) { ... }

       'laptop': {'min': '1024px', 'max': '1440px'},
       // => @media (min-width: 1024px and max-width: 1440px) { ... }

       'laptop-L': {'min': '1440px', 'max': '2560px'},
       // => @media (min-width: 1024px and max-width: 1440px) { ... }

       '4k': {'min': '2560px'},
       // => @media (min-width: 2560px) { ... }
    }
  },
  plugins: [],
}