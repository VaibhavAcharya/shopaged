import * as DialogPrimitive from "@radix-ui/react-dialog";

import { styled } from "../../stitches.config";

import UnsetPrimitive from "./UnsetPrimitive";
import Box from "./Box";

import Button from "./Button";
import { H5, Paragraph } from "./Typography";

import { X } from "react-feather";
import Icon from "./Icon";
import VisuallyHidden from "./VisuallyHidden";
import { ElevatedOverlayBlurBGPrimitive } from "./CommonPrimitives";

export const DialogOverlay = styled(
  DialogPrimitive.Overlay,
  ElevatedOverlayBlurBGPrimitive,
  {
    position: "fixed",
    inset: 0,

    defaultVariants: {
      grayed: "true",
    },
  }
);

export const DialogContent = styled(DialogPrimitive.Content, UnsetPrimitive, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "min(100%, $pageWidth)",

  height: "fit-content",
  maxHeight: "80%",

  overflow: "auto",

  padding: "$medium",

  backgroundColor: "$bgElevated",
});

interface DialogRootProps extends DialogPrimitive.DialogProps {
  children: any;
}
export function DialogRoot({ children, ...props }: DialogRootProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogOverlay />

      {children}
    </DialogPrimitive.Root>
  );
}

export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

interface DialogHeaderProps {
  title: string;
  description?: string;
}
export function DialogHeader(props: DialogHeaderProps) {
  return (
    <Box
      css={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
        justifyContent: "flex-start",
        gap: "$small",
        paddingBottom: "$small",
      }}
    >
      <Box
        css={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "$small",
        }}
      >
        <DialogTitle asChild>
          <H5>{props.title}</H5>
        </DialogTitle>
        <DialogClose asChild>
          <Button
            css={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon as={X} />
            <VisuallyHidden>Close</VisuallyHidden>
          </Button>
        </DialogClose>
      </Box>
      {props.description ? (
        <DialogDescription asChild>
          <Paragraph color="secondary">{props.description}</Paragraph>
        </DialogDescription>
      ) : null}
    </Box>
  );
}
