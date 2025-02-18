import type { Meta, StoryObj } from "@storybook/react";
import { TeamMemberCards } from "@/components/sections/teamMembersCards/teamMembersCards";


const teamMembersInfo = [
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "Руководитель проекта",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  },
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "Проектировщик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  },
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "Дизайнер",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  },
  {
    experience: "4+ года опыта",
    name: "Елисеев Николай",
    position: "Frontend-Гуру",
    description:
      "Николай \"HTML-Rockstar\" Елисеев, фронтенд-гуру с исключительным талантом.",
    imageFull: "/frontendDev.webp"
  },
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "Back-end-программист",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  },
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "Тестировщик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  },
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "Контент-менеджер",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  },
  {
    experience: "???",
    name: "Имя Фамилия",
    position: "SEO-специалист",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    imageFull: "/temp.png"
  }
];

const meta = {
  title: "Sections/TeamMemberCards",
  component: TeamMemberCards,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof TeamMemberCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { teamMembers: teamMembersInfo }
};
