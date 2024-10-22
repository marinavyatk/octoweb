import type { Meta, StoryObj } from "@storybook/react";
import { ContactButton } from "./contactButton";

const meta = {
  title: "UI/Buttons/ContactButton",
  component: ContactButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
