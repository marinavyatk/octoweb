import type { Meta, StoryObj } from "@storybook/react";
import { Team } from "./team";

const meta = {
  title: "Layouts/Team",
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
        id: "Руководитель проекта",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Руководитель проекта",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
      {
        id: "Проектировщик",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Проектировщик",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
      {
        id: "Дизайнер",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Дизайнер",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
      {
        id: "Front-end-программист",
        workExperience: "4+ года опыта",
        name: "Елисеев Николай",
        specialization: "Frontend-Гуру",
        description:
          'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.',
        img: '/frontendDev.webp'
      },
      {
        id: "Back-end-программист",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Back-end-программист",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
      {
        id: "Тестировщик",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Тестировщик",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
      {
        id: "Контент-менеджер",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Контент-менеджер",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
      {
        id: "SEO-специалист",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "SEO-специалист",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: '/temp.png',
      },
    ],
  },
};
