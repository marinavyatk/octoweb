import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Хочу получать информационные и рекламные письма от OctoWeb",
  },
  parameters: {
    docs: {
      description: {
        story: 'Does not work outside the react-hook-form.'
      },
    },
  },
};
