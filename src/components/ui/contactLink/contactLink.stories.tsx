import type { Meta, StoryObj } from "@storybook/react";

import { ContactLink } from "./contactLink";
import TelegramIcon from "@/svg/socials/telegram.svg";

const meta = {
  title: "UI/ContactLink",
  component: ContactLink,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ContactLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <TelegramIcon /> Telegram
      </>
    ),
  },
};
