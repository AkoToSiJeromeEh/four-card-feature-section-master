export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "800px",
        Desktop: "1440px",
      },
      
      colors: {
        "primary-red": "hsl(0, 78%, 62%)",
        "primary-cyan": " hsl(180, 62%, 55%)",
        "primary-orange": "hsl(34, 97%, 64%)",
        "primary-blue": "hsl(212, 86%, 64%)",
        "neutral-dark-blue" : "hsl(234, 12%, 34%)",
        "neutral-grayish-blue" : "hsl(229, 6%, 66%)",
        "neutral-light-gray" : "hsl(0, 0%, 98%)",


      },
      backgroundImage : {
        "hero-pattern" : "url('/blob-scene-haikei(1).svg')",
      }
    },
  },
  plugins: [],
};