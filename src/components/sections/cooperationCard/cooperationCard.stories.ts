import type { Meta, StoryObj } from "@storybook/react";
import { CooperationCard } from "@/components/sections/cooperationCard/cooperationCard";

const meta = {
  title: "Sections/CooperationCard",
  component: CooperationCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CooperationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
