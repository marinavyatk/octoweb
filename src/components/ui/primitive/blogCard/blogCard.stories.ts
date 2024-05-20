import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard } from "./blogCard.tsx";
import OptimizationArticleCover from "../../../../assets/webp/blogImgOptimization.png";

const meta = {
  title: "Components/BlogCard",
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
    img: OptimizationArticleCover,
  },
};

export const Medium: Story = {
  args: {
    header:
      "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
    tags: ["Seo", "Ads", "Web"],
    description:
      "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
    img: OptimizationArticleCover,
    size: "medium",
  },
};
