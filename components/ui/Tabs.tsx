import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled } from "../../stitches.config";
import Button from "./Button";
import { InteractivePrimitive } from "./Interactive";
import { Paragraph } from "./Typography";
import UnsetPrimitive from "./UnsetPrimitive";

export const TabsRoot = styled(TabsPrimitive.Root, {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: "$medium",
});

export const TabsList = styled(TabsPrimitive.List, {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "stretch",
  gap: "$small",
});

export const TabsTrigger = TabsPrimitive.Trigger;

export const TabsContent = styled(TabsPrimitive.Content, InteractivePrimitive);

interface TabsCompiledItemProps {
  value: string;
  label: string;
  content: any;
}
interface TabsCompiledProps extends TabsPrimitive.TabsProps {
  items: TabsCompiledItemProps[];
}

export function TabsCompiled({ items, ...props }: TabsCompiledProps) {
  return (
    <TabsRoot {...props}>
      <TabsList>
        {items.map(function (item) {
          return (
            <TabsTrigger key={item.value} value={item.value} asChild>
              <Button
                css={{
                  // Fill the space
                  flexBasis: "100%",

                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paragraph noLineHeight>{item.label}</Paragraph>
              </Button>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {items.map(function (item) {
        return (
          <TabsContent key={item.value} value={item.value}>
            {item.content}
          </TabsContent>
        );
      })}
    </TabsRoot>
  );
}
