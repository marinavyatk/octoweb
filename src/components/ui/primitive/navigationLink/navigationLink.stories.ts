import type {Meta, StoryObj} from '@storybook/react'
import {NavigationLink} from "./navigationLink.tsx";




const meta = {
    title: 'Components/NavigationLink',
    component: NavigationLink,
    tags: ['autodocs'],
    argTypes: {
        title:{}
    },
} satisfies Meta<typeof NavigationLink>

export default meta
type Story = StoryObj<typeof meta>

export const Colored: Story = {
    args: {
        title: 'colored',
        to: "#"
   },
}

