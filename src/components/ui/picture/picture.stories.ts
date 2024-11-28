import type { Meta, StoryObj } from "@storybook/react";
import { Picture } from "@/components/ui/picture/picture";

const meta = {
  title: "UI/Picture",
  component: Picture,
  tags: ["autodocs"]
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "/case-botanica.webp",
    alt: "",
    fill: true,
    containerProps: {
      style: {
        width: "400px",
        height: "400px",
        borderRadius: "30px",
        overflow: "hidden"
      }
    }
  }
};
