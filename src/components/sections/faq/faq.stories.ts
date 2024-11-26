import type { Meta, StoryObj } from "@storybook/react";
import { FAQ } from "@/components/sections/faq/faq";
import { faqData } from "@/common/componentsData/faq";

const meta = {
  title: "Sections/FAQ",
  component: FAQ,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { faqData: faqData }
};
