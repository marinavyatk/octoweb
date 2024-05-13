import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./radioButton.tsx";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Да",
  },
};
