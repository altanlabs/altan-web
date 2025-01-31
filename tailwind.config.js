/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./translations/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
        '5xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.017em' }],
        '6xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        'endless': 'endless 20s linear infinite',
        'shine': 'shine 5s linear 500ms infinite',
        'float': 'float 2s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'endless': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-245px)' }
        },
        'shine': {
          '0%': { top: '0', transform: 'translateY(-100%) scaleY(10)', opacity: '0' },
          '2%': { opacity: '.5' },
          '40%': { top: '100%', transform: 'translateY(0) scaleY(200)', opacity: '0' },
          '100%': { top: '100%', transform: 'translateY(0) scaleY(1)', opacity: '0' },
        },
        'float': {
          '0%': { transform: 'translateY(3%)' },
          '50%': { transform: 'translateY(-3%)' },
          '100%': { transform: 'translateY(3%)' }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },

    // extend: {
    //   colors: {
    //     current: "currentColor",
    //     transparent: "transparent",
    //     stroke: "#EEEEEE",
    //     strokedark: "#2D2F40",
    //     hoverdark: "#252A42",
    //     titlebg: "#ADFFF8",
    //     titlebg2: "#FFEAC2",
    //     titlebgdark: "#46495A",
    //     btndark: "#292E45",
    //     white: "#FFFFFF",
    //     black: "#181C31",
    //     blackho: "#2C3149",
    //     blacksection: "#1C2136",
    //     primary: "#006BFF",
    //     primaryho: "#0063EC",
    //     meta: "#20C5A8",
    //     waterloo: "#757693",
    //     manatee: "#999AA1",
    //     alabaster: "#FBFBFB",
    //     zumthor: "#EDF5FF",
    //     socialicon: "#D1D8E0",
    //   },
    //   fontSize: {
    //     metatitle: ["12px", "20px"],
    //     sectiontitle: ["14px", "22px"],
    //     regular: ["16px", "26px"],
    //     metatitle3: ["18px", "26px"],
    //     metatitle2: ["20px", "32px"],
    //     para2: ["22px", "35px"],
    //     itemtitle: ["26px", "32px"],
    //     itemtitle2: ["24px", "32px"],
    //     hero: ["44px", "58px"],
    //     sectiontitle3: ["44px", "55px"],
    //     sectiontitle2: ["40px", "52px"],
    //     sectiontitle4: ["34px", "48px"],
    //   },
    //   spacing: {
    //     4.5: "1.125rem",
    //     5.5: "1.375rem",
    //     6.5: "1.625rem",
    //     7.5: "1.875rem",
    //     8.5: "2.125rem",
    //     10.5: "2.625rem",
    //     11.5: "2.875rem",
    //     12.5: "3.125rem",
    //     13: "3.25rem",
    //     13.5: "3.375rem",
    //     14.5: "3.625rem",
    //     15: "3.75rem",
    //     15.5: "3.875rem",
    //     16: "4rem",
    //     17: "4.25rem",
    //     17.5: "4.375rem",
    //     18: "4.5rem",
    //     18.5: "4.625rem",
    //     19: "4.75rem",
    //     21: "5.25rem",
    //     21.5: "5.375rem",
    //     22: "5.5rem",
    //     22.5: "5.625rem",
    //     25: "6.25rem",
    //     27: "6.75rem",
    //     27.5: "6.875rem",
    //     29: "7.25rem",
    //     29.5: "7.375rem",
    //     30: "7.5rem",
    //     32.5: "8.125rem",
    //     35: "8.75rem",
    //     37.5: "9.375rem",
    //     40: "10rem",
    //     42.5: "10.625rem",
    //     45: "11.25rem",
    //     46: "11.5rem",
    //     47.5: "11.875rem",
    //     50: "12.5rem",
    //     55: "13.75rem",
    //     60: "15rem",
    //     65: "16.25rem",
    //     67: "16.75rem",
    //     67.5: "16.875rem",
    //     90: "22.5rem",
    //   },
    //   maxWidth: {
    //     "c-1390": "86.875rem",
    //     "c-1315": "82.188rem",
    //     "c-1280": "80rem",
    //     "c-1235": "77.188rem",
    //     "c-1154": "72.125rem",
    //     "c-1016": "63.5rem",
    //   },
    //   zIndex: {
    //     99999: "99999",
    //     999: "999",
    //     1: "1",
    //   },
    //   opacity: {
    //     65: ".65",
    //   },
    //   transitionProperty: { width: "width" },
    //   boxShadow: {
    //     "solid-l": "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
    //     "solid-2": "0px 2px 10px rgba(122, 135, 167, 0.05)",
    //     "solid-3": "0px 6px 90px rgba(8, 14, 40, 0.04)",
    //     "solid-4": "0px 6px 90px rgba(8, 14, 40, 0.1)",
    //     "solid-5": "0px 8px 24px rgba(45, 74, 170, 0.08)",
    //     "solid-6": "0px 8px 24px rgba(10, 16, 35, 0.08)",
    //     "solid-7": "0px 30px 50px rgba(45, 74, 170, 0.1)",
    //     "solid-8": "0px 12px 120px rgba(45, 74, 170, 0.06)",
    //     "solid-9": "0px 12px 30px rgba(45, 74, 170, 0.06)",
    //     "solid-10": "0px 8px 30px rgba(45, 74, 170, 0.06)",
    //     "solid-11": "0px 6px 20px rgba(45, 74, 170, 0.05)",
    //     "solid-12": "0px 2px 10px rgba(0, 0, 0, 0.05)",
    //     "solid-13": "0px 2px 19px rgba(0, 0, 0, 0.05)",
    //   },
    //   keyframes: {
    //     scroll: {
    //       to: {
    //         transform: "translate(calc(-50% - 0.5rem))",
    //       },
    //     },
    //     line: {
    //       "0%, 100%": { transform: "translateY(100%)" },
    //       "50%": { transform: "translateY(0)" },
    //     },
    //     aurora: {
    //       from: {
    //         backgroundPosition: "50% 50%, 50% 50%",
    //       },
    //       to: {
    //         backgroundPosition: "350% 50%, 350% 50%",
    //       },
    //     },
    //     moveHorizontal: {
    //       "0%": {
    //         transform: "translateX(-50%) translateY(-10%)",
    //       },
    //       "50%": {
    //         transform: "translateX(50%) translateY(10%)",
    //       },
    //       "100%": {
    //         transform: "translateX(-50%) translateY(-10%)",
    //       },
    //     },
    //     moveInCircle: {
    //       "0%": {
    //         transform: "rotate(0deg)",
    //       },
    //       "50%": {
    //         transform: "rotate(180deg)",
    //       },
    //       "100%": {
    //         transform: "rotate(360deg)",
    //       },
    //     },
    //     moveVertical: {
    //       "0%": {
    //         transform: "translateY(-50%)",
    //       },
    //       "50%": {
    //         transform: "translateY(50%)",
    //       },
    //       "100%": {
    //         transform: "translateY(-50%)",
    //       },
    //     },
    //     meteor: {
    //       "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
    //       "70%": { opacity: "1" },
    //       "100%": {
    //         transform: "rotate(215deg) translateX(-500px)",
    //         opacity: "0",
    //       },
    //     },
    //   },
    //   animation: {
    //     line1: "line 3s linear infinite",
    //     line2: "line 6s linear infinite",
    //     line3: "line 9s linear infinite",
    //     aurora: "aurora 60s linear infinite",
    //     first: "moveVertical 30s ease infinite",
    //     second: "moveInCircle 20s reverse infinite",
    //     third: "moveInCircle 40s linear infinite",
    //     fourth: "moveHorizontal 40s ease infinite",
    //     fifth: "moveInCircle 20s ease infinite",
    //     scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    //     "meteor-effect": "meteor 5s linear infinite",
    //   },
    // },

  },
  plugins: [
    nextui(),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

