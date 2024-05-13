import type { Meta, StoryObj } from "@storybook/react";
import { StepCard } from "./stepCard.tsx";

const meta = {
  title: "Components/StepCard",
  component: StepCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    stepNumber: "01",
    title: "Первый контакт",
    description:
      "Знакомимся с вами, оцениваем цели и задачи проекта, составляем техническое задание",
  },
};
