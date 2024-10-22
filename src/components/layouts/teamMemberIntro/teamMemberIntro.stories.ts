import type { Meta, StoryObj } from "@storybook/react";
import { TeamMemberIntro } from "./teamMemberIntro";

const meta = {
  title: "Layouts/TeamMemberIntro",
  component: TeamMemberIntro,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TeamMemberIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "Front-end-программист",
    workExperience: "4+ года опыта",
    name: "Елисеев Николай",
    specialization: "Frontend-Гуру",
    description:
      'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.',
    img: '/frontendDev.webp',
  },
};
