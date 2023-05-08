/** @type {import('tailwindcss').Config} */

// add opactity to rgba colors
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  fontFamily: {
    mono: ["IBM Plex Mono", "monospace"],
  },
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text"),
          heading: withOpacity("--color-text-heading"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-background"),
          highlight: withOpacity("--color-highlight"),
          "highlight-hover": withOpacity("--color-highlight-hover"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-background"),
          inverted: withOpacity("--color-background-inverse"),
          card: withOpacity("--color-background-card"),
          highlight: withOpacity("--color-highlight"),
          "highlight-hover": withOpacity("--color-highlight-hover"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity("--color-border"),
          highlight: withOpacity("--color-highlight"),
          "highlight-hover": withOpacity("--color-highlight-hover"),
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
