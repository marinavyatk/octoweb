import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "@/components/layouts/form/form";

const meta = {
  title: "Layouts/Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
