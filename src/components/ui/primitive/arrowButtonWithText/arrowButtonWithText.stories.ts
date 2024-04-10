import type {Meta, StoryObj} from '@storybook/react'
import {ArrowButtonWithText} from './arrowButtonWithText.tsx';

const meta = {
    title: 'Components/ArrowButtonWithText',
    component: ArrowButtonWithText,
    tags: ['autodocs'],
} satisfies Meta<typeof ArrowButtonWithText>

export default meta
type Story = StoryObj<typeof meta>

export const Colored: Story = {
    args: {
        variant: 'colored',
        text: 'Больше кейсов'
    },
}

export const Dark: Story = {
    args: {
        variant: 'dark',
        text: 'Заказать проект'
    },
}