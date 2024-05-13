import type { Meta, StoryObj } from "@storybook/react";
import FrontendDev from "../../../../assets/webp/frontendDev.webp";
import { Team } from "./team.tsx";
import Temp from "../../../../assets/webp/temp.png";

const meta = {
  title: "Components/Team",
  component: Team,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    teamMembersInfo: [
      {
        id: "Руководитель проекта",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Руководитель проекта",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
      {
        id: "Проектировщик",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Проектировщик",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
      {
        id: "Дизайнер",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Дизайнер",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
      {
        id: "Front-end-программист",
        workExperience: "4+ года опыта",
        name: "Елисеев Николай",
        specialization: "Frontend-Гуру",
        description:
          'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.',
        img: FrontendDev,
      },
      {
        id: "Back-end-программист",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Back-end-программист",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
      {
        id: "Тестировщик",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Тестировщик",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
      {
        id: "Контент-менеджер",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "Контент-менеджер",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
      {
        id: "SEO-специалист",
        workExperience: "???",
        name: "Имя Фамилия",
        specialization: "SEO-специалист",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
        img: Temp,
      },
    ],
  },
};
