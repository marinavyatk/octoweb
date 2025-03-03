import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroupComponent } from "@/components/ui/radioGroup/radioGroup";

const meta = {
  title: "UI/RadioGroupComponent",
  component: RadioGroupComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mainLabel: "Тип сайта",
    isRequiredField: false,
    radioItems: [
      { label: "Лендинг", value: "landing" },
      { label: "Сайт-визитка", value: "siteCard" },
      { label: "Интернет-магазин", value: "onlineStore" },
      { label: "Информационный сайт", value: "informational" },
      { label: "Корпоративный сайт", value: "corporate" },
      { label: "Лонгрид", value: "longrid" },
      {
        label: "Нужна консультация",
        value: "NeedConsultation",
      },
    ],
  },
};

export const WithError: Story = {
  args: {
    mainLabel: "Тип сайта",
    isRequiredField: false,
    radioItems: [
      { label: "Лендинг", value: "landing" },
      { label: "Сайт-визитка", value: "siteCard" },
      { label: "Интернет-магазин", value: "onlineStore" },
      { label: "Информационный сайт", value: "informational" },
      { label: "Корпоративный сайт", value: "corporate" },
      { label: "Лонгрид", value: "longrid" },
      {
        label: "Нужна консультация",
        value: "NeedConsultation",
      },
    ],
    errorMessage: "Choose correct answer",
  },
};
