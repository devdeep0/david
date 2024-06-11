/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom1: '#1f1e1f',
        custom2: '#154414',
        custom3: '#183217',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #1f1e1f, #154414, #183217)',
      },
    },
  },
  plugins: [],
};
