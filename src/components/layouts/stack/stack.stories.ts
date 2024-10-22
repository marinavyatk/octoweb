import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./stack";

const meta = {
  title: "Layouts/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    number: "01",
    header: "Backend",
    tags: ["PHP", "Laravel", "Node.js"],
  },
};
