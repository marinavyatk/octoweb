import type { Meta, StoryObj } from "@storybook/react";
import OptimizationArticleCover from "../../../../assets/webp/blogImgOptimization.png";
import { BlogCardFullWidth } from "./blogCardFullWidth.tsx";

const meta = {
  title: "Components/BlogCardFullWidth",
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
    img: OptimizationArticleCover,
    articleId: "optimization",
  },
};
