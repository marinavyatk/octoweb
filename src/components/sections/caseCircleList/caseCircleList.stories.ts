import type { Meta, StoryObj } from "@storybook/react";
import { CaseCircleList } from "@/components/sections/caseCircleList/caseCircleList";

const circles = [
  { img: '/case-circle-botanica.png', caseId: "botanica", category: "Web" },
  { img: '/case-circle-plastic.png', caseId: "plastic", category: "Ads" },
  { img: '/case-circle-e-kvadrat.png', caseId: "ekvadrat", category: "Seo" },
  { img: '/case-circle-demarko.png', caseId: "demarko", category: "Web" },
  { img: '/case-circle-shortrid.png', caseId: "shortrid", category: "Ads" },
  { img: '/case-circle-goodwood.png', caseId: "goodwood", category: "Ads" },
  { img: '/case-circle-botanica.png', caseId: "botanica2", category: "Web" },
  { img: '/case-circle-plastic.png', caseId: "plastic2", category: "Ads" },
  { img: '/case-circle-e-kvadrat.png', caseId: "ekvadrat2", category: "Seo" },
];

const meta = {
  title: "Sections/CaseCircleList",
  component: CaseCircleList,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CaseCircleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    caseCircles: circles
  }
};
