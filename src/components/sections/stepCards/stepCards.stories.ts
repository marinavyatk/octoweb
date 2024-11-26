import type { Meta, StoryObj } from "@storybook/react";
import { StepCards } from "@/components/sections/stepCards/stepCards";

const meta = {
  title: "Sections/StepCards",
  component: StepCards,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof StepCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
