import NextImage from "next/image";
import NextLink from "next/link";

import Box from "../ui/Box";
import Anchor from "../ui/Anchor";
import { Paragraph, Strong } from "../ui/Typography";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { ElevatedOverlayBlurBGPrimitive } from "../ui/CommonPrimitives";

export default function Wrapper({ children }) {
  return (
    <Box
      css={{
        width: "min(100%, $pageWidth)",
        margin: "0 auto",
        padding: "$medium",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
        justifyContent: "flex-start",
        gap: "$medium",
      }}
    >
      <Box
        as="header"
        className={ElevatedOverlayBlurBGPrimitive()}
        css={{
          position: "sticky",
          top: 0,

          padding: "$medium 0",

          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "$medium",
        }}
      >
        <NextLink href="/" passHref>
          <Anchor
            noUnderline
            css={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "$small",
            }}
          >
            <NextImage src="/logo.svg" alt="logo" width={38} height={38} />
            <Paragraph noLineHeight="true">
              <Strong>Shopaged</Strong>
            </Paragraph>
          </Anchor>
        </NextLink>

        <Navbar />
      </Box>

      <main>{children}</main>

      <Footer />
    </Box>
  );
}
