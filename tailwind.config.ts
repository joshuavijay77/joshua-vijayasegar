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
        bkg: "hsl(220, 14.3%, 95.3%)",
        main: "hsl(111, 58%, 17%)",
        third: "hsl(215, 27.9%, 16.9%",
        blk: "hsl(0, 0%, 0%)",
        wht: "hsl(0, 0%, 100%)",
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
