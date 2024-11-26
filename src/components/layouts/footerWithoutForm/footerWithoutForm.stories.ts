import type { Meta, StoryObj } from "@storybook/react";
import { FooterWithoutForm } from "@/components/layouts/footerWithoutForm/footerWithoutForm";

const meta = {
  title: "Layouts/FooterWithoutForm",
  component: FooterWithoutForm,
  tags: ["autodocs"]
} satisfies Meta<typeof FooterWithoutForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};