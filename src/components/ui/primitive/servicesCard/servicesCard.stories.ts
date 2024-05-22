import type { Meta, StoryObj } from "@storybook/react";
import { ServicesCard } from "./servicesCard.tsx";

const meta = {
  title: "Components/ServicesCard",
  component: ServicesCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ServicesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    number: "02",
    header: "Интернет-Маркетинг",
    tags: [
      { tag: "Промо-сайт", price: "40000", serviceId: "promo-site" },
      { tag: "Лендинг", price: "40000", serviceId: "landing" },
      {
        tag: "Многостраничный сайт",
        price: "40000",
        serviceId: "multipage-website",
      },
      { tag: "Сайт-каталог", price: "40000", serviceId: "catalog" },
      { tag: "Интернет-магазин", price: "40000", serviceId: "online-shop" },
    ],
    size: "medium",
  },
};

export const Big: Story = {
  args: {
    number: "01",
    header: "Разработка Веб-Сайтов",
    tags: [
      { tag: "Промо-сайт", price: "40000", serviceId: "promo-site" },
      { tag: "Лендинг", price: "40000", serviceId: "landing" },
      {
        tag: "Многостраничный сайт",
        price: "40000",
        serviceId: "multipage-website",
      },
      { tag: "Сайт-каталог", price: "40000", serviceId: "catalog" },
      { tag: "Интернет-магазин", price: "40000", serviceId: "online-shop" },
    ],
    size: "small",
  },
};
