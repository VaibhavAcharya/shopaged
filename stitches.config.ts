import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      hue: "235deg",

      bgBase: "hsl(0deg 0% 0% / 100%)",

      bgElevated: "hsl(0deg 0% 0% / 100%)",
      bgElevatedOverlay: "hsl(0deg 0% 0% / 80%)",
      bgElevatedOverlayGrayed: "hsl(0deg 0% 20% / 60%)",

      bgInteractiveSurface: "hsl(0deg 0% 2.5% / 100%)",
      bgInteractiveSurfaceHover: "hsl(0deg 0% 5% / 100%)",

      bgInteractive: "hsl(0deg 0% 10% / 100%)",
      bgInteractiveHover: "hsl(0deg 0% 12.5% / 100%)",
      bgInteractiveActive: "hsl($hue 60% 25% / 100%)",

      textPrimary: "hsl(0deg 0% 100% / 100%)",
      textSecondary: "hsl(0deg 0% 75% / 100%)",

      focusRing: "hsl(0deg 0% 80% / 80%)",
    },
    space: {
      tiny: "8px",
      small: "12px",
      medium: "16px",
      large: "20px",
      huge: "24px",

      interactiveSmall: "6px",
      interactiveMedium: "10px",
      interactiveLarge: "14px",
    },
    fontSizes: {
      base: "18px",

      body: "1rem",
      bodySmall: "0.8rem",

      h6: "1.25rem",
      h5: "1.5rem",
      h4: "2rem",
      h3: "2.25rem",
      h2: "2.75rem",
      h1: "3rem",
    },
    fonts: {
      systemSans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      systemSerif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      systemMono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,

      body: `"Space Grotesk", $systemSans`,
      heading: "$systemSerif",
      code: "$systemMono",
    },
    fontWeights: {
      light: "200",
      medium: "400",
      bold: "600",
    },
    lineHeights: {
      body: "150%",
      heading: "100%",
      code: "125%",
    },
    letterSpacings: {
      body: "0px",
      heading: "0px",
      code: "0px",
    },
    sizes: {
      small: "32px",
      medium: "48px",
      large: "64px",

      iconSmall: "14px",
      iconMedium: "18px",
      iconLarge: "22px",

      pageWidth: "768px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {},
  utils: {},
  prefix: "",
  themeMap: {
    ...defaultThemeMap,
  },
});

export const globalReset = globalCss({
  "html, body": {
    height: "100%",
  },
  "#__next": {
    minHeight: "100%",
  },
  html: {
    boxSizing: "border-box",
    scrollBehavior: "smooth",

    fontSize: "$base",
  },
  body: {
    margin: 0,

    backgroundColor: "$bgBase",
  },
  "*, *::before, *::after": {
    boxSizing: "inherit", // border-box from html
  },
});
