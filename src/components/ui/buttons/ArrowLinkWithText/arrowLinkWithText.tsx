import clsx from "clsx";
import s from "./arrowLinkWithText.module.scss";
import { ComponentPropsWithoutRef } from "react";
import ArrowIcon from "@/svg/arrow.svg";
import Link from 'next/link';

export type ArrowLinkWithTextProps = {
  variant?: "colored" | "dark";
  text: string;
  to?: string;
} & ComponentPropsWithoutRef<"a">;

export const ArrowLinkWithText = (props: ArrowLinkWithTextProps) => {
  const { variant = "colored", text, to, className, ...restProps } = props;
  const classNames = clsx(
    s.arrowButtonWithText,
    className,
    { [s.colored]: variant === "colored" },
    { [s.dark]: variant === "dark" },
  );
  const Component = to ? Link : "a";

  return (
    <Component
      href={to ? to : "/"}
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
