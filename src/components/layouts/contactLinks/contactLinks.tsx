import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./contactLinks.module.scss";
import { ContactLink } from "../../ui/contactLink/contactLink";
import TelegramIcon from "@/svg/socials/telegram.svg";
import InstagramIcon from "@/svg/socials/instagram.svg";
import WhatsAppIcon from "@/svg/socials/whatsUp.svg";
import VKIcon from "@/svg/socials/vk.svg";

export type ContactLinksProps = ComponentPropsWithoutRef<"div">;

export const ContactLinks = (props: ContactLinksProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.contactLinks, className);

  return (
    <div {...restProps} className={classNames}>
      <ContactLink href={"https://web.telegram.org/a/"} aria-label="Telegram">
        <TelegramIcon /> <span>Telegram</span>
      </ContactLink>
      <ContactLink href={"#"} aria-label="Instagram">
        <InstagramIcon /> <span>Instagram</span>
      </ContactLink>
      <ContactLink href={"#"} aria-label="WhatsApp">
        <WhatsAppIcon /> <span>WhatsApp</span>
      </ContactLink>
      <ContactLink href={"#"} aria-label="VK group">
        <VKIcon /> <span>VK group</span>
      </ContactLink>
    </div>
  );
};
