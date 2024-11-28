import type { Meta, StoryObj } from "@storybook/react";
import { RadioCheckboxGroup } from "@/components/ui/radioCheckboxGroup/radioCheckboxGroup";

const meta = {
  title: "UI/RadioCheckboxGroup",
  component: RadioCheckboxGroup,
  tags: ["autodocs"]
} satisfies Meta<typeof RadioCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mainLabel: "Способ связи",
    isRequiredField: true,
    checkboxItems: [
      {
        label: "Telegram",
        value: "telegram",
        checked: true
      },
      {
        label: "Skype",
        value: "skype",
        checked: false
      },
      {
        label: "WhatsApp",
        value: "whatsApp",
        checked: true
      },
      {
        label: "Email",
        value: "email",
        checked: false
      },
      {
        label: "Звонок",
        value: "call",
        checked: false
      }
    ]
  }
};

