import type { Meta, StoryObj } from "@storybook/react";
import { CaseCard } from "./caseCard.tsx";
import Botanica from "../../../../assets/webp/case-botanica.webp";

const meta = {
  title: "Components/CaseCard",
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
    img: Botanica,
    size: "small",
    header: "ботаника-хилс.рф",
  },
};
export const AsH3: Story = {
  args: {
    category: "LANDING PAGE",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Botanica,
    size: "small",
    header: "ботаника-хилс.рф",
    as: "h3",
  },
};
