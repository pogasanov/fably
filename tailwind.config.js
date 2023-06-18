/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-plus-jakarta-sans)'],
    },
    fontSize: {
      bs: ['12px', {lineHeight: '18px', letterSpacing: '0.15px'}],
      bm: ['14px', {lineHeight: '20px', letterSpacing: '0.15px'}],
      bl: ['16px', {lineHeight: '24px', letterSpacing: '0.15px'}],
      bxl: ['18px', {lineHeight: '28px', letterSpacing: '0.15px'}],

      hxs: ['20px', {lineHeight: '28px'}],
      hs: ['24px', {lineHeight: '32px'}],
      hm: ['28px', {lineHeight: '36px'}],
      hl: ['32px', {lineHeight: '40px'}],
      hxl: ['36px', {lineHeight: '44px'}],
    },
    colors: {
      nobleblack: {
        '100': '#E8E9E9',
        '200': '#CDCECF',
        '300': '#9B9C9E',
        '400': '#686B6E',
        '500': '#363A3D',
        '600': '#1A1D21',
        '700': '#131619',
        '800': '#0D0F10',
        '900': '#060708'
      },
      dayblue: {
        '100': '#EBEDFC',
        '200': '#D2D8F9',
        '300': '#A6B0F2',
        '400': '#7989EC',
        '500': '#4D62E5',
        '600': '#3045C9',
        '700': '#243497',
        '800': '#182364',
        '900': '#0C1132'
      },
      purpleblue: {
        '100': '#F0E8FD',
        '200': '#DECCFB',
        '300': '#BD9AF8',
        '400': '#9C67F4',
        '500': '#7C35F1',
        '600': '#5F18D4',
        '700': '#47129F',
        '800': '#300C6A',
        '900': '#180635'
      },
      sunglow: {
        '100': '#FFFAEA',
        '200': '#FFF3D1',
        '300': '#FFE8A3',
        '400': '#FFDC75',
        '500': '#FFD147',
        '600': '#E2B42B',
        '700': '#AA8720',
        '800': '#715A15',
        '900': '#392D0B'
      },
      stemgreen: {
        '100': '#F7FDF4',
        '200': '#EDFBE6',
        '300': '#DBF7CD',
        '400': '#C8F4B4',
        '500': '#B6F09C',
        '600': '#9AD37F',
        '700': '#739F5F',
        '800': '#4D6A3F',
        '900': '#263520'
      },
      heisenbergblue: {
        '100': '#F1FBFE',
        '200': '#E0F6FD',
        '300': '#C0EDFB',
        '400': '#A1E4F9',
        '500': '#82DBF7',
        '600': '#65BEDA',
        '700': '#4C8FA4',
        '800': '#335F6D',
        '900': '#193037'
      },
      happyorange: {
        '100': '#FFF2E9',
        '600': '#E26F20',
        '900': '#391C08'
      },
      electricgreen: {
        '100': '#F3FBF7',
        '600': '#4AC97E',
        '900': '#122B1D'
      },
      redpower: {
        '100': '#FBECEC',
        '600': '#D0302F',
        '900': '#2F0F0E'
      },
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {height: 0},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: 0},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "outline-nobleblack": '0px 0px 0px 4px rgba(54, 58, 61, 0.24)',
        "outline-heisenbergblue": '0px 0px 0px 4px rgba(132, 220, 245, 0.24)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}