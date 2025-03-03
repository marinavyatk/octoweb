import type { Meta, StoryObj } from "@storybook/react";
import { GreetingDescription } from "@/components/layouts/greetingDescription/greetingDescription";

const meta = {
  title: "Layouts/GreetingDescription",
  component: GreetingDescription,
  tags: ["autodocs"],
} satisfies Meta<typeof GreetingDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
