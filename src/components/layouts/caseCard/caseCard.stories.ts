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
    caseId: "botanica",
    category: "LANDING PAGE",
    header: "ботаника-хилс.рф",
    services: ["DEVELOP", "UI/UX", "SEO"],
    img: "/case-botanica.webp",
    size: "small",
    index: 0,
  },
};

export const AsH3: Story = {
  args: {
    caseId: "botanica",
    category: "LANDING PAGE",
    header: "ботаника-хилс.рф",
    services: ["DEVELOP", "UI/UX", "SEO"],
    img: "/case-botanica.webp",
    size: "small",
    as: "h3",
    index: 0,
  },
};
