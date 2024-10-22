import type {Meta, StoryObj} from '@storybook/react';
import {BriefNavbar} from '@/components/ui/briefNavbar/briefNavbar';

const meta = {
    title: 'UI/BriefNavbar',
    component: BriefNavbar,
    tags: ['autodocs'],
} satisfies Meta<typeof BriefNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        navItems: [
            {
                text: 'Контактная информация',
                completed: true,
                sectionId: 'contactInfo',
            },
            {
                text: 'О компании и продукте',
                completed: true,
                sectionId: 'about',
            },
            {
                text: 'Детализация задачи',
                completed: false,
                sectionId: 'details',
            },
            {
                text: 'Целевая аудитория',
                completed: false,
                sectionId: 'targetGroup',
            },
            {
                text: 'Материалы',
                completed: false,
                sectionId: 'materials',
            },
            {
                text: 'Доп. информация',
                completed: false,
                sectionId: 'additionalInfo',
            },
        ]
    },
};

