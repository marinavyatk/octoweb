import type { Meta, StoryObj } from "@storybook/react";
import { CaseCircle } from "./caseCircle.tsx";
import CaseCircleBotanica from "../../../../assets/webp/case-circle-botanica.png";

const meta = {
  title: "Components/CaseCircle",
  component: CaseCircle,
  tags: ["autodocs"],
} satisfies Meta<typeof CaseCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    img: CaseCircleBotanica,
    caseId: "botanica",
    category: "Web",
  },
};
