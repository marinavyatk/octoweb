import type { Meta, StoryObj } from "@storybook/react";
import { CaseCircle } from "./caseCircle";

const meta = {
  title: "Layouts/CaseCircle",
  component: CaseCircle,
  tags: ["autodocs"],
} satisfies Meta<typeof CaseCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    img: '/case-circle-botanica.png',
    caseId: "botanica",
  },
};
