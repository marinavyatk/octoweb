import type { Meta, StoryObj } from "@storybook/react";
import { InputFile } from "./inputFile.tsx";

const meta = {
  title: "Components/InputFile",
  component: InputFile,
  tags: ["autodocs"],
  argTypes: {
    error: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
