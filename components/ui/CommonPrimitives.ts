import { css } from "../../stitches.config";

export const ElevatedOverlayBlurBGPrimitive = css({
  backgroundColor: "$bgElevatedOverlay",
  backdropFilter: "blur(2px)",

  variants: {
    grayed: {
      true: {
        backgroundColor: "$bgElevatedOverlayGrayed",
      },
    },
  },
});
