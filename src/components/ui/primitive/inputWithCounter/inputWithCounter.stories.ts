import type { Meta, StoryObj } from "@storybook/react";
import { InputWithCounter } from "./inputWithCounter.tsx";

const meta = {
  title: "Components/InputWithCounter",
  component: InputWithCounter,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputWithCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "О проекте",
    isRequiredField: true,
    placeholder: "Расскажите о своем проекте",
    value: "aboutProject",
    onChange: () => {},
  },
};

export const WithErrors: Story = {
  args: {
    label: "О проекте",
    isRequiredField: true,
    placeholder: "Расскажите о своем проекте",
    value: "aboutProject",
    onChange: () => {},
    errorMessage: ["Обязательное поле", "Размер файла не более 5мб"],
  },
};
