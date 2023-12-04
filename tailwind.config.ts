import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        main: "hsl(var(--color-main) / <alpha-value>)",
        pic: "hsl(var(--color-pic) / <alpha-value>)",
        third: "hsl(var(--color-third) / <alpha-value>)",
        blk: "hsl(var(--color-blk) / <alpha-value>)",
        wht: "hsl(var(--color-wht) / <alpha-value>)",
        card: "hsl(var(--color-card) / <alpha-value>)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}
export default config
