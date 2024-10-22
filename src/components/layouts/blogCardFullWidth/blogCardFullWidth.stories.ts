import type { Meta, StoryObj } from "@storybook/react";
import { BlogCardFullWidth } from "./blogCardFullWidth";

const meta = {
  title: "Layouts/BlogCardFullWidth",
  component: BlogCardFullWidth,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BlogCardFullWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {
  args: {
    header:
      "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
    tags: ["Seo", "Ads", "Web"],
    description:
      "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
    img: '/blogImgOptimization.png',
    articleId: "optimization",
  },
};
