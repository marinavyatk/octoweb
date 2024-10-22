import clsx from "clsx";
import s from "./arrowButtonWithText.module.scss";
import { ComponentPropsWithoutRef } from "react";
import ArrowIcon from "@/svg/arrow.svg";

export type ArrowButtonWithTextProps = {
  text: string;
} & ComponentPropsWithoutRef<"button">;

export const ArrowButtonWithText = (props: ArrowButtonWithTextProps) => {
  const { text, className, ...restProps } = props;
  const classNames = clsx(s.arrowButtonWithText, className);

  return (
    <button {...restProps} className={classNames}>
      <span>{text}</span>
      <div className={s.background}></div>
      <div className={s.arrow}>
        <ArrowIcon />
      </div>
    </button>
  );
};
