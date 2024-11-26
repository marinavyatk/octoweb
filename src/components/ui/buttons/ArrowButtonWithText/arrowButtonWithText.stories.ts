import type { Meta, StoryObj } from "@storybook/react";
import { ArrowButtonWithText } from "./arrowButtonWithText";

const meta = {
  title: "UI/Buttons/ArrowButtonWithText",
  component: ArrowButtonWithText,
  tags: ["autodocs"]
} satisfies Meta<typeof ArrowButtonWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colored: Story = {
  args: {
    variant: "colored",
    text: "Больше кейсов"
  }
};
export const Dark: Story = {
  args: {
    variant: "dark",
    text: "Больше кейсов"
  }
};
export const ColoredLink: Story = {
  args: {
    variant: "colored",
    text: "Больше кейсов",
    as: 'a'
  }
};
