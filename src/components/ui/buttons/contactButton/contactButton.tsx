import clsx from "clsx";
import s from "./contactButton.module.scss";
import { ComponentPropsWithoutRef } from "react";
import ArrowIcon from "@/svg/arrow.svg";

export type ContactButtonProps = {
  text?: string;
} & ComponentPropsWithoutRef<"a">;

export const ContactButton = (props: ContactButtonProps) => {
  const { text = "ОБСУДИТЬ ПРОЕКТ", className, ...restProps } = props;
  const classNames = clsx(s.contactButton, className, "noRoutingLink");
  return (
    <a
      className={classNames}
      rel={"nofollow"}
      href={"#form"}
      {...restProps}
      id="formAnchor"
    >
      <span className={s.text}>{text}</span>
      <div className={s.background}></div>
      <div className={s.arrowContainer}>
        <ArrowIcon />
      </div>
    </a>
  );
};
