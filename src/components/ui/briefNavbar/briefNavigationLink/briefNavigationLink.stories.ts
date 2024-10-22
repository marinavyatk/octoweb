import type {Meta, StoryObj} from '@storybook/react';
import {BriefNavigationLink} from '@/components/ui/briefNavbar/briefNavigationLink/briefNavigationLink';

const meta = {
    title: 'UI/BriefNavigationLink',
    component: BriefNavigationLink,
    tags: ['autodocs'],
} satisfies Meta<typeof BriefNavigationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Общая информация',
        completed: false,
        sectionId: 'commonInfo'
    },
};

export const Done: Story = {
    args: {
        text: 'Общая информация',
        completed: true,
        sectionId: 'commonInfo'
    },
};
