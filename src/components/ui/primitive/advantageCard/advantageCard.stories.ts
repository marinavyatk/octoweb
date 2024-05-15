import type { Meta, StoryObj } from "@storybook/react";

import { AdvantageCard } from "./advantageCard.tsx";
import AdvantageIcon from "../../../../assets/simplicity.svg";

const meta = {
  title: "Components/AdvantageCard",
  component: AdvantageCard,
  tags: ["autodocs"],
} satisfies Meta<typeof AdvantageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: AdvantageIcon,
    header: "Просто о сложном",
    paragraph:
      'Переводим технические моменты на "человеческий язык", чтобы вы могли понимать окончательный результат.',
  },
};
