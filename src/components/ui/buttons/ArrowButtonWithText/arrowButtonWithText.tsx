import clsx from "clsx";
import s from "./arrowButtonWithText.module.scss";
import { ComponentPropsWithoutRef, ElementType } from "react";
import ArrowIcon from "@/svg/arrow.svg";

export type ArrowButtonWithTextProps<T extends ElementType> = {
  as?: T
  variant?: "colored" | "dark";
  text: string;
} & ComponentPropsWithoutRef<T>;

export const ArrowButtonWithText = <T extends ElementType = "button">(props: ArrowButtonWithTextProps<T>) => {
  const { as: Component = "button", variant = "colored", text, className, ...restProps } = props;
  const classNames = clsx(
    s.arrowButtonWithText,
    className, s[variant],
  );

  return (
    <Component
      {...restProps}
      className={classNames}
      rel={"nofollow"}
    >
      <span>{text}</span>
      <div className={s.background}></div>
      <div className={s.arrow}>
        <ArrowIcon />
      </div>
    </Component>
  );
};
