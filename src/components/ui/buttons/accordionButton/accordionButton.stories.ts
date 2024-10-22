import type { Meta, StoryObj } from "@storybook/react";
import { AccordionButton } from "./accordionButton";

const meta = {
  title: "UI/Buttons/AccordionButton",
  component: AccordionButton,
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Opened: Story = {
  args: {
    opened: true,
    setOpened: () => {},
  },
};

export const Closed: Story = {
  args: {
    opened: false,
    setOpened: () => {},
  },
};
