import type { Meta, StoryObj } from "@storybook/react";
import { TagLinkWithPrice } from "./tagLinkWithPrice";

const meta = {
  title: "UI/TagLinkWithPrice",
  component: TagLinkWithPrice,
  tags: ["autodocs"],
} satisfies Meta<typeof TagLinkWithPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tag: "Лендинг",
    price: "30000",
    serviceId: "landing",
    category: "web",
  },
};
