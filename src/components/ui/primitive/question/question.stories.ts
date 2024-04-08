import type {Meta, StoryObj} from '@storybook/react'
import {Question} from './question.tsx';

const meta = {
    title: 'Components/Question',
    component: Question,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Question>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        question: 'Сколько будет стоить создание интернет-магазина?',
        answer: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

    },
}
