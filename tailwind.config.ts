import type { Config } from 'tailwindcss'

// With Tailwind CSS v4, many options are now configured directly in your CSS.
// See https://tailwindcss.com/docs/configuration for more details.

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config