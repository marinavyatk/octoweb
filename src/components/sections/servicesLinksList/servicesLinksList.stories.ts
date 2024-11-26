import type { Meta, StoryObj } from "@storybook/react";
import { ServicesLinksList } from "@/components/sections/servicesLinksList/servicesLinksList";
import { linksData } from "@/common/componentsData/servicesLinks";

const meta = {
  title: "Sections/ServicesLinksList",
  component: ServicesLinksList,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ServicesLinksList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { linksData: linksData }
};
