import type {Meta, StoryObj} from '@storybook/react'

import {ContactLink} from './contactLink.tsx';

const meta = {
    title: 'Components/ContactLink',
    component: ContactLink,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ContactLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Telegram'
    },
}