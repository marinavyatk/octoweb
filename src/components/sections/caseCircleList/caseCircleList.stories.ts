import type { Meta, StoryObj } from "@storybook/react";
import { CaseCircleList } from "@/components/sections/caseCircleList/caseCircleList";
import { circles } from "@/common/componentsData/cases";

const meta = {
  title: "Sections/CaseCircleList",
  component: CaseCircleList,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CaseCircleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    caseCircles: circles
  }
};
