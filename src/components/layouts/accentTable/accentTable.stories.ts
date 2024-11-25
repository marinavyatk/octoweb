import type {Meta, StoryObj} from '@storybook/react';
import {AccentTable} from '@/components/layouts/accentTable/accentTable';

const meta = {
    title: 'Layouts/AccentTable',
    component: AccentTable,
    tags: ['autodocs'],
} satisfies Meta<typeof AccentTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: ['One', 'Two', 'Three', 'Four'],
        header: 'Numbers'
    },
};
