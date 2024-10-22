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
      "Промо-сайт",
      "Лендинг",
      "Многостраничный сайт",
      "Сайт-каталог",
      "Интернет-магазин",
    ],
    href: "#",
    img: '/link-botanica.webp',
  },
};
