import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./animatedField.module.scss";

export type AnimatedFieldProps = {
  variant?: "primary" | "secondary" | "dark" | "light";
  animation?: "right" | "left";
} & ComponentPropsWithoutRef<"div">;

export const AnimatedField = (props: AnimatedFieldProps) => {
  const { variant = "primary", animation, className, ...restProps } = props;
  const classNames = clsx(s.animatedField, className, {
    [s.primary]: variant === "primary",
    [s.secondary]: variant === "secondary",
    [s.dark]: variant === "dark",
    [s.light]: variant === "light",
    [s.right]: animation === "right",
    [s.left]: animation === "left",
  });
  return <div {...restProps} className={classNames}></div>;
};
