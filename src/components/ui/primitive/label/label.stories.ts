import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label.tsx";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Required: Story = {
  args: {
    text: "Email",
    isRequiredField: true,
  },
};

export const Optional: Story = {
  args: {
    text: "How are you",
    isRequiredField: false,
  },
};
