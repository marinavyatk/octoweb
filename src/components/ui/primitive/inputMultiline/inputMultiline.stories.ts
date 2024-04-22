import type {Meta, StoryObj} from '@storybook/react'
import {InputMultiline} from './inputMultiline.tsx';

const meta = {
    title: 'Components/InputMultiline',
    component: InputMultiline,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof InputMultiline>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Приоритетные товары и услуги',
        required: true,
        placeholder: 'Интерьерный дизайн',
        value: 'priorities',
        onChange: () => {
        }
    }
}

export const WithErrors: Story = {
    args: {
        label: 'Приоритетные товары и услуги',
        required: true,
        placeholder: 'Расскажите о своем проекте',
        value: 'priorities',
        onChange: () => {
        },
        errorMessage: 'Обязательное поле'
    }
}
