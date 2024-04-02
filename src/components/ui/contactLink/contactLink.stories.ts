import type {Meta, StoryObj} from '@storybook/react'
import Telegram from '../../../assets/telegram.svg'

import {ContactLink} from "./contactLink.tsx";

const meta = {
    title: 'Components/ContactLink',
    component: ContactLink,
    tags: ['autodocs'],
    argTypes: {
        icon:{}, title:{}
    },
} satisfies Meta<typeof ContactLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        icon: Telegram,
        title: 'Telegram',
    },
}