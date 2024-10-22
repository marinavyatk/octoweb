import type {Meta, StoryObj} from '@storybook/react';
import {BriefOffer} from '@/components/layouts/briefOffer/briefOffer';

const meta = {
    title: "Layouts/BriefOffer",
    component: BriefOffer,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof BriefOffer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
