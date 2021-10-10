import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "./ui/Dialog";
import { TabsCompiled } from "./ui/Tabs";
import { Paragraph } from "./ui/Typography";

export default function AuthenticationDialog({ children: Trigger }) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader
          title="Authenticate"
          description="Please sign in using one of the provided methods to access the website. Please sign in using one of the provided methods to access the website."
        />
        <TabsCompiled
          defaultValue="1"
          items={[
            {
              value: "1",
              label: "Already User",
              content: <Paragraph>Brah.</Paragraph>,
            },
            {
              value: "2",
              label: "New to Shopaged?",
              content: <Paragraph>Brah 2.0</Paragraph>,
            },
          ]}
        />
      </DialogContent>
    </DialogRoot>
  );
}
