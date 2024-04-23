import type {Meta, StoryObj} from '@storybook/react'
import {ArrowButton} from './arrowButton.tsx';


const meta = {
    title: 'Components/ArrowButton',
    component: ArrowButton,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArrowButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}

