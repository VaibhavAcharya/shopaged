import AuthenticationDialog from "../AuthenticationDialog";
import Anchor from "../ui/Anchor";
import Box from "../ui/Box";
import Button from "../ui/Button";
import { Paragraph } from "../ui/Typography";

export default function Navbar() {
  return (
    <Box
      as="nav"
      css={{
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "$small",
      }}
    >
      <Button>
        <AuthenticationDialog>
          <Paragraph noLineHeight>Get Started</Paragraph>
        </AuthenticationDialog>
      </Button>
      <Paragraph>
        <Anchor href="#">Terms & Conditions</Anchor>
      </Paragraph>
    </Box>
  );
}
