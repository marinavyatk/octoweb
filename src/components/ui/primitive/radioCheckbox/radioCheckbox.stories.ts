import type {Meta, StoryObj} from '@storybook/react'
import {RadioCheckbox} from './radioCheckbox.tsx';

const meta = {
    title: 'Components/RadioCheckbox',
    component: RadioCheckbox,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RadioCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        text: 'Получение заявок на почту'
    }
}

