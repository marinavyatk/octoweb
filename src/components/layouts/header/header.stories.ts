import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/layouts/header/header";

const meta = {
  title: "Layouts/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

