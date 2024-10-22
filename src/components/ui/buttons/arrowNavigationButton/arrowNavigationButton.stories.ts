import type { Meta, StoryObj } from "@storybook/react";
import { ArrowNavigationButton } from "./arrowNavigationButton";

const meta = {
  title: "UI/Buttons/ArrowNavigationButton",
  component: ArrowNavigationButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ArrowNavigationButton>;

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
