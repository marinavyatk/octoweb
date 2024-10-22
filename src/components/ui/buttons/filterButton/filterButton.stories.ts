import type { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./filterButton";

const meta = {
  title: "UI/Buttons/FilterButton",
  component: FilterButton,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    active: false,
    children: "All projects",
  },
};
export const Active: Story = {
  args: {
    active: true,
    children: "Active",
  },
};
