import type { Meta, StoryObj } from "@storybook/react";
import { AboutCard } from "@/components/sections/aboutCard/aboutCard";

const meta = {
  title: "Sections/AboutCard",
  component: AboutCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    teamPhoto: "/teamMainPhoto.webp",
  },
};
