import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components/layouts/footer/footer";

const meta = {
  title: "Layouts/Footer",
  component: Footer,
  tags: ["autodocs"]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contactLinksProps: { socials: [
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
      ]}
  }
};

export const WithoutBriefLink: Story = {
  args: {
    needBriefLink: false,
    contactLinksProps: { socials: [
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
      ]}
  }
};
