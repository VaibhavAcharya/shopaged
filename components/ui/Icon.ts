import { styled } from "../../stitches.config";

const Icon = styled("svg", {
  color: "$textPrimary",

  width: "$$size",
  height: "$$size",

  variants: {
    size: {
      small: { $$size: "$sizes$iconSmall" },
      medium: { $$size: "$sizes$iconMedium" },
      large: { $$size: "$sizes$iconLarge" },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});

export default Icon;
