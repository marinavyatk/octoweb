import type { Meta, StoryObj } from "@storybook/react";
import { BurgerButton } from "@/components/ui/buttons/burgerButton/burgerButton";

const meta = {
  title: "UI/Buttons/BurgerButton",
  component: BurgerButton,
  tags: ["autodocs"],
} satisfies Meta<typeof BurgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
  },
};
export const Closed: Story = {
  args: {
    open: false,
  },
};
