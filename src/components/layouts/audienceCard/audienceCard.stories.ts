import type {Meta, StoryObj} from '@storybook/react';
import {AudienceCard} from '@/components/layouts/audienceCard/audienceCard';

const meta = {
    title: 'Layouts/AudienceCard',
    component: AudienceCard,
    tags: ['autodocs'],
} satisfies Meta<typeof AudienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: ['One', 'Two', 'Three', 'Four'],
        header: 'Numbers'
    },
};
