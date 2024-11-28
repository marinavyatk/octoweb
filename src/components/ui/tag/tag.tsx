import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";
import s from "./tag.module.scss";

export type TagProps<T extends ElementType> = {
  variant?: "colored" | "monochromePrimary" | "monochromeSecondary";
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Tag = <T extends ElementType>(props: TagProps<T>) => {
  const {
    variant = "colored",
    as: Component = "div",
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.tag, s[variant], className);

  return <Component {...restProps} className={classNames} rel={"nofollow"} />;
};
