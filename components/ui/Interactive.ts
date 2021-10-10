import { css } from "../../stitches.config";

export const InteractivePrimitive = css({
  "&:disabled": {
    opacity: "75%",
    cursor: "not-allowed",
  },
  "&:focus": { outline: "none" },
  "&:focus-visible": {
    outline: "dashed 2px $colors$focusRing",
    outlineOffset: "2px",
  },
});
