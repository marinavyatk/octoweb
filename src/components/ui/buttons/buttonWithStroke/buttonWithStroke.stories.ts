import type { Meta, StoryObj } from "@storybook/react";
import { ButtonWithStroke } from "./buttonWithStroke";

const meta = {
  title: "UI/Buttons/ButtonWithStroke",
  component: ButtonWithStroke,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonWithStroke>;

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
