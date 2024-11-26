import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components/layouts/footer/footer";

const meta = {
  title: "Layouts/Footer",
  component: Footer,
  tags: ["autodocs"]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithoutBriefLink: Story = {
  args: { needBriefLink: false }
};
