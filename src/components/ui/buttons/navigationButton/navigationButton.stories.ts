import type { Meta, StoryObj } from "@storybook/react";
import { NavigationButton } from "./navigationButton";

const meta = {
  title: "UI/Buttons/NavigationButton",
  component: NavigationButton,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {
  args: {
    variant: "up",
  },
};
export const Next: Story = {
  args: {
    variant: "next",
  },
};
export const Previous: Story = {
  args: {
    variant: "previous",
  },
};
