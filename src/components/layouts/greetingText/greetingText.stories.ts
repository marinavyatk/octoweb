import type { Meta, StoryObj } from "@storybook/react";
import { GreetingText } from "@/components/layouts/greetingText/greetingText";

const meta = {
  title: "Layouts/GreetingText",
  component: GreetingText,
  tags: ["autodocs"],
} satisfies Meta<typeof GreetingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textContent: {
      firstLine: "МЫ РЕВОЛЮЦИОНЕРЫ",
      secondLine: "В СФЕРЕ",
      thirdLine: "ИЗ КРАСНОДАРА",
      wordSwipeProps: { words: ["web", "seo"] },
    },
  },
};
