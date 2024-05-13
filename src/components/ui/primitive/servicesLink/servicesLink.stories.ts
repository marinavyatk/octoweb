import type { Meta, StoryObj } from "@storybook/react";
import { ServicesLink } from "./servicesLink.tsx";
import Botanica from "../../../../assets/webp/link-botanica.webp";

const meta = {
  title: "Components/ServicesLink",
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
    img: Botanica,
  },
};
