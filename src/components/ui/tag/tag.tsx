import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";
import s from "./tag.module.scss";

export type TagProps<T extends ElementType> = {
  variant?: "colored" | "monochrome-primary" | "monochrome-secondary";
  as?: T;
} & ComponentPropsWithoutRef<T>;
export const Tag = <T extends ElementType>(props: TagProps<T>) => {
  const {
    variant = "colored",
    as: Component = "span",
    className,
    ...restProps
  } = props;
  const classNames = clsx(
    s.tag,
    {
      [s.color]: variant === "colored",
      [s.monochromePrimary]: variant === "monochrome-primary",
      [s.monochromeSecondary]: variant === "monochrome-secondary",
    },
    className,
  );
  return <Component {...restProps} className={classNames} rel={"nofollow"} />;
};
