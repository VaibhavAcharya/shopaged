import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

export default function VisuallyHidden({ children }) {
  return (
    <VisuallyHiddenPrimitive.Root>{children}</VisuallyHiddenPrimitive.Root>
  );
}
