import type { Meta, StoryObj } from "@storybook/react";
import RocketAnimation from "@/lotties/rocket.json";

import { AdvantageCard } from "./advantageCard";

const meta = {
  title: "Layouts/AdvantageCard",
  component: AdvantageCard,
  tags: ["autodocs"],
} satisfies Meta<typeof AdvantageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: RocketAnimation,
    header: "Просто о сложном",
    text: 'Переводим технические моменты на "человеческий язык", чтобы вы могли понимать окончательный результат.',
    index: 0,
    scrollProgress: 1,
  },
};
