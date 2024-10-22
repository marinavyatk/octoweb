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
          <span>info@octoweb.ru</span>
          <br />
          <span>+7 905 407-78-32</span>
          <address>
            <span>КРАСНОДАР </span>
            <br />
            <span>350062, ул. Атарбекова 7, Россия </span>
          </address>
        </div>
      </div>
      <div className={s.panelUp}>
        <ArrowNavigationButton
          variant={"up"}
          className={s.arrow}
            as={'a'}
          href={'#top'}
        />
        <div className={s.bottomCaption}>
          <span>Политика конфиденциальности</span>
          <span>© OctoWeb 2023 — Все права защищены</span>
        </div>
      </div>
    </div>
  );
};
