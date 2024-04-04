import type {Meta, StoryObj} from '@storybook/react'
import {Stack} from "./stack.tsx";

const meta = {
    title: 'Components/Stack',
    component: Stack,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        number: "01",
        title: 'Backend',
        tags: ['PHP', 'Laravel', 'Node.js']
    },
}