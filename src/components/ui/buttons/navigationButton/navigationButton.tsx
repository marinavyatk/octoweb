import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";
import s from "./navigationButton.module.scss";
import ArrowIcon from "@/svg/arrow.svg";

export type ArrowNavigationButtonProps<T extends ElementType> = {
  as?: T;
  variant?: "up" | "next" | "previous";
} & ComponentPropsWithoutRef<T>;

export const NavigationButton = <T extends ElementType = "button">(
  props: ArrowNavigationButtonProps<T>,
) => {
  const {
    as: Component = "button",
    variant = "primary",
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.navigationButton, className, "noRoutingLink");
  const arrowClassNames = clsx(s.buttonContainer, s[variant]);

  return (
    <Component {...restProps} className={classNames}>
      {variant === "up" && <span className={s.upCaption}>Наверх</span>}
      <div className={arrowClassNames}>
        <ArrowIcon />
      </div>
    </Component>
  );
};
