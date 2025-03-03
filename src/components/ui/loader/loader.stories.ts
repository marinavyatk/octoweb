import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@/components/ui/loader/loader";

const meta = {
  title: "UI/Loader",
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
