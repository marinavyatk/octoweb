import type {Meta, StoryObj} from '@storybook/react'


import {Tag} from "./tag.tsx";

const meta = {
    title: 'Components/Tag',
    component: Tag,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['colored', 'monochrome-primary, monochrome-secondary'],
            control: {type: 'radio'},
        },
    },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Colored: Story = {
    args: {
        variant: 'colored',
        title: 'Colored',
    },
}

export const MonochromePrimary: Story = {
    args: {
        variant: 'monochrome-primary',
        title: 'Monochrome-primary',
    },
}

export const MonochromeSecondary: Story = {
    args: {
        variant: 'monochrome-secondary',
        title: 'Monochrome-secondary',
    },
}