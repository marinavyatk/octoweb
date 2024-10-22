import type {Meta, StoryObj} from '@storybook/react';
import {PriceTable} from '@/components/layouts/priceTable/priceTable';

const meta = {
    title: "Layouts/PriceTable",
    component: PriceTable,
    tags: ["autodocs"],
} satisfies Meta<typeof PriceTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        priceItems: [
            { service: "Разработка логотипа", price: "5 000" },
            { service: "Создание брендбука", price: "5 000" },
            { service: "Копирайтинг", price: "350" },
            { service: "Вывод на маркетплейсы", price: "25 000" },
            { service: "Контекстная реклама", price: "20 000" },
            { service: "SEO-продвижение", price: "50 000" },
        ],
    }
};

