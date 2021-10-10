import Box from "../ui/Box";
import { Paragraph } from "../ui/Typography";

export default function Footer() {
  return (
    <Box
      as="footer"
      css={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "$medium",
      }}
    >
      <Paragraph>&copy; Vaibhav Acharya (2021)</Paragraph>
    </Box>
  );
}
