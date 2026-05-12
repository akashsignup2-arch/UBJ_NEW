import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f2f8f5',
          100: '#e1efe7',
          200: '#c5dfd2',
          300: '#9bc4b3',
          400: '#6ba38f',
          500: '#4c8773',
          600: '#3a6b5a', // River green
          700: '#305549',
          800: '#28463d', // Deep emerald
          900: '#213a33', // Dark forest
        },
        wood: {
          50: '#fbf8f3', // Ivory/off-white
          100: '#f5efe4',
          200: '#eadac0',
          300: '#ddc097', // Soft gold accent
          400: '#ce9f67',
          500: '#c28343',
          600: '#b46b35',
          700: '#96522e', // Warm wood brown
          800: '#7a442a',
          900: '#633925',
        },
        water: {
          50: '#f3f8f9',
          100: '#e0eff2',
          200: '#c3dee5',
          300: '#98c5d2',
          400: '#65a5b8', // Muted teal
          500: '#468aa0',
          600: '#3a7085',
          700: '#335b6d',
          800: '#2e4d5b',
          900: '#29414e',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'water-gradient': 'linear-gradient(to bottom, #28463d, #213a33)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slow-drift': 'drift 120s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(newUtilities);
    }
  ],
};
export default config;
