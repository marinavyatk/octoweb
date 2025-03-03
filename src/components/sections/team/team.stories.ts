import type { Meta, StoryObj } from "@storybook/react";
import { Team } from "./team";

const meta = {
  title: "Sections/Team",
  component: Team,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intro:
      "Разработка интернет-магазина — это командная работа, где каждый вносит свой профессиональный вклад для успешной реализации проекта.",
    teamMembersInfo: [
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "Руководитель проекта",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "Проектировщик",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "Дизайнер",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
      {
        experience: "4+ года опыта",
        name: "Елисеев Николай",
        position: "Frontend-Гуру",
        description:
          'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.',
        image: "/frontendDev.webp",
      },
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "Back-end-программист",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "Тестировщик",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "Контент-менеджер",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
      {
        experience: "???",
        name: "Имя Фамилия",
        position: "SEO-специалист",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        image: "/temp.png",
      },
    ],
  },
};
