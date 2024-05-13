import type { Meta, StoryObj } from "@storybook/react";
import { AdvantageItem } from "./advantageItem.tsx";

const meta = {
  title: "Components/AdvantageItem",
  component: AdvantageItem,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AdvantageItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    number: "01",
    description:
      "Говорим с вами на одном языке, чтобы вы могли понимать конечный результат",
  },
};
