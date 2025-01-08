import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard } from "./blogCard";

const meta = {
  title: "Layouts/BlogCard",
  component: BlogCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    header:
      "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
    tags: ["Seo", "Ads", "Web"],
    description:
      "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
    img: '/blogImgOptimization.png',
    articleId: "optimization",
    index: 0
  },
};

export const Medium: Story = {
  args: {
    header:
      "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
    tags: ["Seo", "Ads", "Web"],
    description:
      "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
    img: '/blogImgOptimization.png',
    size: "medium",
    articleId: "optimization",
    index: 0
  },
};

export const FullWidth: Story = {
  args: {
    header:
      "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
    tags: ["Seo", "Ads", "Web"],
    description:
      "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
    img: '/blogImgOptimization.png',
    size: "fullWidth",
    articleId: "optimization",
    index: 0
  },
};
