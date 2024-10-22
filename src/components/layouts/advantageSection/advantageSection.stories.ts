import type { Meta, StoryObj } from "@storybook/react";
import { AdvantageSection } from "@/components/layouts/advantageSection/advantageSection";

const meta = {
    title: "Layouts/AdvantageSection",
    component: AdvantageSection,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AdvantageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
