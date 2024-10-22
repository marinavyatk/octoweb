import type {Meta, StoryObj} from '@storybook/react';
import {AboutCard} from '@/components/layouts/aboutCard/aboutCard';

const meta = {
    title: "Layouts/AboutCard",
    component: AboutCard,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
