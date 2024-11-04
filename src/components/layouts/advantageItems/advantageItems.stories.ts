import type {Meta, StoryObj} from '@storybook/react';
import {AdvantageItems} from '@/components/layouts/advantageItems/advantageItems';

const meta = {
    title: "Layouts/advantageItems",
    component: AdvantageItems,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AdvantageItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
