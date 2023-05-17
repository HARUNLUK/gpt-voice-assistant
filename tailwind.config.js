/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        primary: {
          light: '#f1f5f9',
          dark: '#f1f5f9',
        },
        secondary: {
          light: '#60a5fa',
          dark: '#172554',
        },
      },
      keyframes: {
        opacityToNormal: {
          '0%': { opacity: '0', transform: "scale(.9)" },
          '100%': { transform: '1', transform: "scale(1)" },
        }
      },

      animation: {
        awake: 'opacityToNormal 1s ease-out',
      },
      fontFamily: {
        'banner-font': ['Bebas Neue', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        "ink-white-blue": "url('/assets/ink-blue-white.jpg')",
        "ink-pink-grey": "url('/assets/ink-pink-grey.jpg')",
        "chat-gpt-ad": "url('/assets/chat-gpt-ad.jpg')"

        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      dropShadow: {
        'text': '0 5px 5px rgba(0, 0, 0, 1)',
        'text-white': '0 5px 5px rgb(255, 255, 255)',
        'text-blue': '0 5px 5px rgb(96 165 250)',


        '3xl': '0 35px 35px rgba(0, 0, 0, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.5)',
          '0 45px 65px rgba(0, 0, 0, 1)'
        ]
      }
    },
  },
  plugins: [],
}