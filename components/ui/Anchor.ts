import { styled } from "../../stitches.config";
import { InteractivePrimitive } from "./Interactive";
import UnsetPrimitive from "./UnsetPrimitive";

const Anchor = styled("a", UnsetPrimitive, InteractivePrimitive, {
  cursor: "pointer",

  textDecoration: "underline",

  variants: {
    noUnderline: {
      true: { textDecoration: "none" },
    },
  },
});

export default Anchor;
