import type { Meta, StoryObj } from "@storybook/react";
import { ArrowButtonWithText } from "./arrowButtonWithText.tsx";

const meta = {
  title: "Components/ArrowButtonWithText",
  component: ArrowButtonWithText,
  tags: ["autodocs"],
} satisfies Meta<typeof ArrowButtonWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Больше кейсов",
  },
};
