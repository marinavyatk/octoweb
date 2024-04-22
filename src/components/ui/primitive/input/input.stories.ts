import type {Meta, StoryObj} from '@storybook/react'
import {Input} from './input.tsx';

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Required: Story = {
    args: {
        label: 'Имя',
        required: true
    }
}

export const Optional: Story = {
    args: {
        label: 'Имя',
        required: false
    }
}