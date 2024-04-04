import type {Meta, StoryObj} from '@storybook/react'
import {ArrowButton} from "./arrowButton.tsx";


const meta = {
    title: 'Components/ArrowButton',
    component: ArrowButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'violet', 'black'],
            control: {type: 'radio'},
        },
        size: {
            options: ['small', 'medium', 'big'],
            control: {type: 'radio'},
        },
        outline: {
            options: ['outline-colored', 'outline-monochrome'],
            control: {type: 'radio'},
        },
    },
} satisfies Meta<typeof ArrowButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
}

export const Violet: Story = {
    args: {
        variant: 'violet',
    },
}
export const Black: Story = {
    args: {
        variant: 'black',
    },
}
export const Small: Story = {
    args: {
        size: "small"
    },
}
export const Medium: Story = {
    args: {
        size: "medium"
    },
}
export const Big: Story = {
    args: {
        size: "large"
    },
}
export const OutlineColored: Story = {
    args: {
        outline: "outline-colored"
    },
}
export const OutlineMonochrome: Story = {
    args: {
        outline: "outline-monochrome"
    },
}