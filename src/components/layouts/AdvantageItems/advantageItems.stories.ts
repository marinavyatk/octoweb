import type {Meta, StoryObj} from '@storybook/react';
import {AdvantageItems} from '@/components/layouts/AdvantageItems/AdvantageItems';

const meta = {
    title: "Layouts/AdvantageItems",
    component: AdvantageItems,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AdvantageItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
