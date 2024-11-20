"use client";

import clsx from "clsx";
import s from "./arrowButtonWithText.module.scss";
import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, useRef } from "react";
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
    className, s[variant]
  );
  const textRef = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef<ComponentPropsWithRef<T>["ref"]>(null);
  const isHover = useRef<boolean>(false);

  const handleHover = () => {
    if (isHover.current) {
      return;
    }
    isHover.current = true;
    if (textRef.current && textContainerRef.current) {
      const textWidth = textRef.current.clientWidth;
      const textContainerWidth = textContainerRef.current.scrollWidth;
      const margin = (textContainerWidth - textWidth) / 2;
      textRef.current.style.margin = `0 ${margin}px`;
    }
  };

  const cancelHover = () => {
    isHover.current = false;
    if (textRef.current)
      textRef.current.style.margin = `0`;
  };

  return (
    <Component
      {...restProps}
      className={classNames}
      rel={"nofollow"}
      ref={componentRef}
      onMouseOver={handleHover}
      onMouseLeave={cancelHover}
    >
      <div className={s.textContainer} ref={textContainerRef}>
        <div className={s.text} ref={textRef}>{text}</div>
      </div>
      <div className={s.background}></div>
      <div className={s.arrow}>
        <ArrowIcon />
      </div>
    </Component>
  );
};
