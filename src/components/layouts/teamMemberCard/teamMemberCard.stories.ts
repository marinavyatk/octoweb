import type { Meta, StoryObj } from "@storybook/react";
import { TeamMemberCard } from "./teamMemberCard";

const meta = {
  title: "Layouts/TeamMemberCard",
  component: TeamMemberCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TeamMemberCard>;

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
