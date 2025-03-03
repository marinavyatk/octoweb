import type { Meta, StoryObj } from "@storybook/react";
import { StackList } from "@/components/sections/stackList/stackList";

const meta = {
  title: "Sections/StackList",
  component: StackList,
  tags: ["autodocs"],
} satisfies Meta<typeof StackList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
