import { clsx } from "clsx";
import s from "./arrowButton.module.scss";
import { ComponentPropsWithoutRef, ElementType } from "react";

import ArrowIcon from "@/svg/arrow.svg";

export type ArrowButtonProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;
export const ArrowButton = <T extends ElementType>(
  props: ArrowButtonProps<T>,
) => {
  const { as: Component = "a", className, ...restProps } = props;
  const classNames = clsx(s.arrowButton, className);

  return (
    <Component {...restProps} className={classNames} rel={"nofollow"}>
      <ArrowIcon />
    </Component>
  );
};
