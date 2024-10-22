import type { Meta, StoryObj } from "@storybook/react";
import { CaseCard } from "./caseCard";

const meta = {
  title: "Layouts/CaseCard",
  component: CaseCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsH2: Story = {
  args: {
    category: "LANDING PAGE",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: '/case-botanica.webp',
    size: "small",
    header: "ботаника-хилс.рф",
    caseId: "botanica",
  },
};
export const AsH3: Story = {
  args: {
    category: "LANDING PAGE",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: '/case-botanica.webp',
    size: "small",
    header: "ботаника-хилс.рф",
    as: "h3",
    caseId: "botanica",
  },
};
