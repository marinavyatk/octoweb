import type { Meta, StoryObj } from "@storybook/react";
import { FooterWithForm } from "@/components/layouts/footerWithForm/footerWithForm";

const meta = {
  title: "Layouts/FooterWithForm",
  component: FooterWithForm,
  tags: ["autodocs"]
} satisfies Meta<typeof FooterWithForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};