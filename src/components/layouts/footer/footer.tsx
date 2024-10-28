import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footer.module.scss";
import { ContactLinks } from "../contactLinks/contactLinks";
import { ButtonWithStroke } from "@/components/ui/buttons/buttonWithStroke/buttonWithStroke";
import { ArrowNavigationButton } from "@/components/ui/buttons/arrowNavigationButton/arrowNavigationButton";

export type FooterProps = ComponentPropsWithoutRef<"div">;

export const Footer = (props: FooterProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.footer, className);

  return (
    <div {...restProps} className={classNames}>
      <div className={s.container}>
        <ContactLinks />
        <ButtonWithStroke variant={"secondary"} />
        <div className={s.contacts}>
          <a href="mailto:info@octoweb.ru">info@octoweb.ru</a>
          <br />
          <a href="tel:+79054077832">+7 905 407-78-32</a>
          <address>
            <span>КРАСНОДАР </span>
            <br />
            <span>350062, ул. Атарбекова 7, Россия </span>
          </address>
        </div>
      </div>
      <div className={s.panelUp}>
        <div className={s.arrow}>
          <ArrowNavigationButton
            variant={"up"}
            as={'a'}
            href={'#top'}
          />
        </div>

        <div className={s.bottomCaption}>
          <span>Политика конфиденциальности</span>
          <span>© OctoWeb 2023 — Все права защищены</span>
        </div>
      </div>
    </div>
  );
};
