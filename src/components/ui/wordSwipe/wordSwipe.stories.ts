import type { Meta, StoryObj } from "@storybook/react";
import { WordSwipe } from "./wordSwipe";

const meta = {
  title: "UI/WordSwipe",
  component: WordSwipe,
  tags: ["autodocs"],
} satisfies Meta<typeof WordSwipe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};