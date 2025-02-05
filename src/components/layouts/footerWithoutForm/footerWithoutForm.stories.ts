import type { Meta, StoryObj } from "@storybook/react";
import { FooterWithoutForm } from "@/components/layouts/footerWithoutForm/footerWithoutForm";

const meta = {
  title: "Layouts/FooterWithoutForm",
  component: FooterWithoutForm,
  tags: ["autodocs"]
} satisfies Meta<typeof FooterWithoutForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    socials: [
      {
        "name": "telegram",
        "url": "https://t.me/octoweb_work"
      },
      {
        "name": "vk",
        "url": "https://vk.com/octoweb"
      },
      {
        "name": "whatsapp",
        "url": "https://api.whatsapp.com/send?phone=79054077832"
      },
      {
        "name": "instagram",
        "url": "https://www.instagram.com/octoweb_krd"
      }
    ]
  }
};