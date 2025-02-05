import type { Meta, StoryObj } from "@storybook/react";
import { ContactLinks } from "@/components/layouts/contactLinks/contactLinks";

const meta = {
  title: "Layouts/ContactLinks",
  component: ContactLinks,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args:{
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
