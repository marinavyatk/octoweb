import type { Meta, StoryObj } from "@storybook/react";
import { FormNotification } from "./formNotification";

const meta = {
  title: "Layouts/FormNotification",
  component: FormNotification,
  tags: ["autodocs"],
} satisfies Meta<typeof FormNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
