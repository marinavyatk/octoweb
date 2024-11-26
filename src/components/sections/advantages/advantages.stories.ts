import type { Meta, StoryObj } from "@storybook/react";
import { Advantages } from "@/components/sections/advantages/advantages";

const meta = {
    title: "Sections/Advantages",
    component: Advantages,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Advantages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
