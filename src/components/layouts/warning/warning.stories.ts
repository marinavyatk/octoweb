import type {Meta, StoryObj} from '@storybook/react';
import {Warning} from '@/components/layouts/warning/warning';

const meta = {
    title: "Layouts/Warning",
    component: Warning,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Warning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
