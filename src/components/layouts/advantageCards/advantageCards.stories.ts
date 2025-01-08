import type {Meta, StoryObj} from '@storybook/react';
import {AdvantageCards} from '@/components/layouts/advantageCards/advantageCards';

const meta = {
    title: "Layouts/AdvantageCards",
    component: AdvantageCards,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AdvantageCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        scrollProgress: 1
    }
};
