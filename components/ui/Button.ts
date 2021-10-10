import { styled } from "../../stitches.config";
import { InteractivePrimitive } from "./Interactive";
import UnsetPrimitive from "./UnsetPrimitive";

const Button = styled("button", UnsetPrimitive, InteractivePrimitive, {
  "&:hover": {
    backgroundColor: "$bgInteractiveHover",
  },
  "&[data-state='active']": {
    backgroundColor: "$bgInteractiveActive",
  },

  variants: {
    size: {
      small: { padding: "$interactiveSmall" },
      medium: { padding: "$interactiveMedium" },
      large: { padding: "$interactiveLarge" },
    },
    appearance: {
      filled: {
        backgroundColor: "$bgInteractive",
      },
      ghost: {
        backgroundColor: "transparent",
      },
    },
  },

  defaultVariants: {
    size: "medium",
    appearance: "filled",
  },
});

export default Button;
