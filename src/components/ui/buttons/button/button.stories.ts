import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "UI/Buttons/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

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
