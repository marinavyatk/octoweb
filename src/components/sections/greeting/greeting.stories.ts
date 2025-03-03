import type { Meta, StoryObj } from "@storybook/react";
import { Greeting } from "@/components/sections/greeting/greeting";

const meta = {
  title: "Sections/Greeting",
  component: Greeting,
  tags: ["autodocs"],
} satisfies Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    greetingTextProps: {
      textContent: {
        firstLine: "МЫ РЕВОЛЮЦИОНЕРЫ",
        secondLine: "В СФЕРЕ",
        thirdLine: "ИЗ КРАСНОДАРА",
        wordSwipeProps: { words: ["web", "seo"] },
      },
    },
  },
};
