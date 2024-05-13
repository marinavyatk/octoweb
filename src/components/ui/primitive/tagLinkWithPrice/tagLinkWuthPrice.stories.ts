import type { Meta, StoryObj } from "@storybook/react";
import { TagLinkWithPrice } from "./tagLinkWithPrice.tsx";

const meta = {
  title: "Components/TagLinkWithPrice",
  component: TagLinkWithPrice,
  tags: ["autodocs"],
} satisfies Meta<typeof TagLinkWithPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tag: "Лендинг",
    price: "30000",
    href: "#",
  },
};
