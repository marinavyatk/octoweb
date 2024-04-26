import type {Meta, StoryObj} from '@storybook/react'
import {ServicesCard} from './servicesCard.tsx';

const meta = {
    title: 'Components/ServicesCard',
    component: ServicesCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ServicesCard>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
    args: {
        number: '02',
        title: 'Интернет-Маркетинг',
        tags: ['Контентное продвижение', 'Контекстная реклама', 'Таргетированная реклама', 'SEO'],
        size: 'medium'
    },
}

export const Big: Story = {
    args: {
        number: '01',
        title: 'Разработка Веб-Сайтов',
        tags: ['Промо-сайт', 'Лендинг', 'Многостраничный сайт', 'Сайт-каталог', 'Интернет-магазин'],
        size: 'small'
    },
}