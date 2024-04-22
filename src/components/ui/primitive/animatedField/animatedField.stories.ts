import type {Meta, StoryObj} from '@storybook/react'
import {AnimatedField} from './animatedField.tsx';

const meta = {
    title: 'Components/AnimatedField',
    component: AnimatedField,
    tags: ['autodocs'],
} satisfies Meta<typeof AnimatedField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: '★ ★ ★ ★ ★'
    },
}

export const PrimaryWithAnimationRight: Story = {
    args: {
        variant: 'primary',
        children: '★ ★ ★ ★ ★',
        animation: 'right'
    },
}

export const PrimaryWithAnimationLeft: Story = {
    args: {
        variant: 'primary',
        children: '★ ★ ★ ★ ★',
        animation: 'left'
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: '★ ★ ★ ★ ★'
    },
}
export const SecondaryWithAnimationRight: Story = {
    args: {
        variant: 'secondary',
        children: '★ ★ ★ ★ ★',
        animation: 'right'
    },
}
export const SecondaryWithAnimationLeft: Story = {
    args: {
        variant: 'secondary',
        children: '★ ★ ★ ★ ★',
        animation: 'left'
    },
}

export const Dark: Story = {
    args: {
        variant: 'dark',
        children: '★ ★ ★ ★ ★'
    },
}

export const DarkWithAnimationRight: Story = {
    args: {
        variant: 'dark',
        children: '★ ★ ★ ★ ★',
        animation: 'right'
    },
}
export const DarkWithAnimationLeft: Story = {
    args: {
        variant: 'dark',
        children: '★ ★ ★ ★ ★',
        animation: 'left'
    },
}

export const Light: Story = {
    args: {
        variant: 'light',
        children: '★ ★ ★ ★ ★'
    },
}
export const LightWithAnimationRight: Story = {
    args: {
        variant: 'light',
        children: '★ ★ ★ ★ ★',
        animation: 'right'
    },
}
export const LightWithAnimationLeft: Story = {
    args: {
        variant: 'light',
        children: '★ ★ ★ ★ ★',
        animation: 'left'
    },
}