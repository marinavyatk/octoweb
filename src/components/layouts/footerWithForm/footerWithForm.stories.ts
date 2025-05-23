import type { Meta, StoryObj } from "@storybook/react";
import { FooterWithForm } from "@/components/layouts/footerWithForm/footerWithForm";

const meta = {
  title: "Layouts/FooterWithForm",
  component: FooterWithForm,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterWithForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    socials: [
      {
        name: "telegram",
        url: "https://t.me/octoweb_work",
      },
      {
        name: "vk",
        url: "https://vk.com/octoweb",
      },
      {
        name: "whatsapp",
        url: "https://api.whatsapp.com/send?phone=79054077832",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/octoweb_krd",
      },
    ],
  },
};
