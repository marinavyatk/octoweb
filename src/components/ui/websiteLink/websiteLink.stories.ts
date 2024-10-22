import type { Meta, StoryObj } from "@storybook/react";
import { WebsiteLink } from "./websiteLink";

const meta = {
  title: "UI/WebsiteLink",
  component: WebsiteLink,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WebsiteLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    webSiteName: "ekvadrat23.ru",
    href: "https://ekvadrat23.ru/",
  },
};
