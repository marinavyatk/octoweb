import clsx from "clsx";
import s from "./contactButton.module.scss";
import { ComponentPropsWithoutRef } from "react";
import ArrowIcon from "../../../../assets/arrow.svg?react";

export type ContactButtonProps = ComponentPropsWithoutRef<"a">;

export const ContactButton = (props: ContactButtonProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.contactButton, className);
  return (
    <a {...restProps} className={classNames} rel={"nofollow"} href={"#form"}>
      <span>ОБСУДИТЬ ПРОЕКТ</span>
      <div className={s.background}></div>
      <div className={s.arrow}>
        <ArrowIcon />
      </div>
    </a>
  );
};
