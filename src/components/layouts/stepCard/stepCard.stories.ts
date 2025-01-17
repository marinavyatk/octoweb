import type { Meta, StoryObj } from "@storybook/react";
import { StepCard } from "./stepCard";

const meta = {
  title: "Layouts/StepCard",
  component: StepCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    stepNumber: "01",
    header: "Первый контакт",
    description:
      "Знакомимся с вами, оцениваем цели и задачи проекта, составляем техническое задание",
  },
};
