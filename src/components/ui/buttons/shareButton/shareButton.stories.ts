import type { Meta, StoryObj } from "@storybook/react";
import { ShareButton } from "./shareButton";

const meta = {
  title: "UI/Buttons/ShareButton",
  component: ShareButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ShareButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

