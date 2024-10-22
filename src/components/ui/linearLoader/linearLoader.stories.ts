import type { Meta, StoryObj } from "@storybook/react";
import { LinearLoader } from "./linearLoader";

const meta = {
    title: "UI/LinearLoader",
    component: LinearLoader,
    tags: ["autodocs"],
} satisfies Meta<typeof LinearLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

