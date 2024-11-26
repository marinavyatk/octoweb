import type { Meta, StoryObj } from "@storybook/react";
import { ContactLinks } from "@/components/layouts/contactLinks/contactLinks";

const meta = {
  title: "Layouts/ContactLinks",
  component: ContactLinks,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
