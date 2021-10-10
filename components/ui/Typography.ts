import { css, styled } from "../../stitches.config";

const TextPrimitive = css({
  margin: 0,
  textRendering: "optimizeLegibility",
  fontSmooth: "always",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",

  maxWidth: "80ch",
  overflowWrap: "break-word",

  variants: {
    color: {
      primary: { color: "$textPrimary" },
      secondary: { color: "$textSecondary" },
    },
    noLineHeight: {
      true: { lineHeight: "100%" },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export const Paragraph = styled("p", TextPrimitive, {
  fontFamily: "$body",
  fontSize: "$body",
  fontWeight: "$medium",
  lineHeight: "$body",
  letterSpacing: "$body",
});

const HeadingPrimitive = css(TextPrimitive, {
  fontFamily: "$heading",
  fontWeight: "$bold",
  lineHeight: "$heading",
  letterSpacing: "$heading",
});

export const H1 = styled("h1", HeadingPrimitive, { fontSize: "$h1" });
export const H2 = styled("h2", HeadingPrimitive, { fontSize: "$h2" });
export const H3 = styled("h3", HeadingPrimitive, { fontSize: "$h3" });
export const H4 = styled("h4", HeadingPrimitive, { fontSize: "$h4" });
export const H5 = styled("h5", HeadingPrimitive, { fontSize: "$h5" });
export const H6 = styled("h6", HeadingPrimitive, { fontSize: "$h6" });

export const Small = styled("small", { fontSize: "$bodySmall" });
export const Strong = styled("strong", { fontWeight: "$bold" });
export const Emphasized = styled("em", { fontStyle: "oblique" });
