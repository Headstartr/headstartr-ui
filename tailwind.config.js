/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: '#343653',
        darkSlate: '#1D1E25',
        lightSlate: '#808D9E',
        lighterSlate: '#8E929D',
        brandBlue: '#325FFF',
        primaryHighlight: '#FFBC99',
        secondaryHiglight: '#B1E5FC',
        offWhite: '#F5F5F5',
        horizontalRuleColor: '#0000000D',
        // NOTE: In figma the color is shown as #201F22
        // However, when checked via inspect element it is below color
        footerHorizontalRuleColor: '#E3E5E9',
        footerSubtextColor: '#52525B',
        discordBlue: '#5865F2',
      },
    },
  },
  plugins: [],
};
