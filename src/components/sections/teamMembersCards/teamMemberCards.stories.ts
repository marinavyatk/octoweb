import type { Meta, StoryObj } from "@storybook/react";
import { TeamMemberCards } from "@/components/sections/teamMembersCards/teamMembersCards";
import { teamMembersInfo } from "@/common/componentsData/teamMembersInfo";

const meta = {
  title: "Sections/TeamMemberCards",
  component: TeamMemberCards,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof TeamMemberCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {teamMembers: teamMembersInfo}
};
