import type { Meta, StoryObj } from "@storybook/react";
import { PriceTable } from "@/components/layouts/priceTable/priceTable";

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
      { name: "Разработка логотипа", price: "5 000" },
      { name: "Создание брендбука", price: "5 000" },
      { name: "Копирайтинг", price: "350" },
      { name: "Вывод на маркетплейсы", price: "25 000" },
      { name: "Контекстная реклама", price: "20 000" },
      { name: "SEO-продвижение", price: "50 000" },
    ],
  },
};
