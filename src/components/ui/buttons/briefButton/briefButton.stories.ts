import type { Meta, StoryObj } from "@storybook/react";
import { BriefButton } from "./briefButton";

const meta = {
  title: "UI/Buttons/BriefButton",
  component: BriefButton,
  tags: ["autodocs"],
} satisfies Meta<typeof BriefButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
