import type { Meta, StoryObj } from "@storybook/react";
import {NavigationLink} from '@/components/ui/navigationLink/navigationLink';

const meta = {
    title: "UI/NavigationLink",
    component: NavigationLink,
    tags: ["autodocs"],

} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        href: '/',
        children: 'Блог'
    },
};

export const NotActive: Story = {
    args: {
        href: '/about',
        children: 'О компании'
    },
};