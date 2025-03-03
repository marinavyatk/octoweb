import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components/ui/navbar/navbar";

const meta = {
  title: "UI/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/blog",
      },
    },
  },
};
