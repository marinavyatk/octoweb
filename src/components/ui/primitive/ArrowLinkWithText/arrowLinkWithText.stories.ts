import type { Meta, StoryObj } from "@storybook/react";
import { ArrowLinkWithText } from "./arrowLinkWithText.tsx";

const meta = {
  title: "Components/ArrowLinkWithText",
  component: ArrowLinkWithText,
  tags: ["autodocs"],
} satisfies Meta<typeof ArrowLinkWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colored: Story = {
  args: {
    variant: "colored",
    text: "Больше кейсов",
    to: "#",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    text: "Заказать проект",
    to: "#",
  },
};

export const DarkAsSimpleLink: Story = {
  args: {
    variant: "dark",
    text: "Заказать проект",
    href: "#",
  },
};
