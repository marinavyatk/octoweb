import type { Meta, StoryObj } from "@storybook/react";
import { ContactButton } from "./contactButton.tsx";

const meta = {
  title: "Components/ContactButton",
  component: ContactButton,
} satisfies Meta<typeof ContactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
