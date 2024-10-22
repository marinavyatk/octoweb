import type { Meta, StoryObj } from "@storybook/react";
import { CaseCardFullWidth } from "./caseCardFullWidth";

const meta = {
  title: "Layouts/CaseCardFullWidth",
  component: CaseCardFullWidth,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CaseCardFullWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    category: "Корпоративный сайт",
    tags: ["Develop", "ux/ui", "seo"],
    img: 'caseCardFullWidth.png',
    header: "de-marko.ru",
    caseId: "demarko",
  },
};
