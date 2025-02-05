import type { Meta, StoryObj } from "@storybook/react";
import { ServicesLink } from "./servicesLink";

const meta = {
  title: "Layouts/ServicesLink",
  component: ServicesLink,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ServicesLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    number: "01",
    header: "Первый контакт",
    tags: [
      {
        text: "Промо-сайт",
        subLink: "promo-site"
      },
      {
        text: "Лендинг",
        subLink: "landing"
      },
      {
        text: "Многостраничный сайт",
        subLink: "multi-page-website"
      },
      {
        text: "Сайт-каталог",
        subLink: "catalog-website"
      },
      {
        text: "Интернет-магазин",
        subLink: "online-store"
      }
    ],
    mainLink: "website-development",
    image: '/link-botanica.webp',
  },
};
