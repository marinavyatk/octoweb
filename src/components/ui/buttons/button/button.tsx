"use client";

import clsx from "clsx";
import s from "./button.module.scss";
import { ComponentPropsWithoutRef, ElementType, useRef } from "react";
import ArrowIcon from "@/svg/arrow.svg";

export type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: "colored" | "dark";
  text: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T>,
) => {
  const {
    as: Component = "button",
    variant = "colored",
    text,
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.button, className, s[variant]);
  const textRef = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  const handleHover = () => {
    if (textRef.current && textContainerRef.current) {
      const textWidth = textRef.current.clientWidth;
      const textContainerWidth = textContainerRef.current.scrollWidth;
      const margin = (textContainerWidth - textWidth) / 2;
      textRef.current.style.margin = `0 ${margin}px`;
    }
  };

  const cancelHover = () => {
    if (textRef.current) textRef.current.style.margin = `0`;
  };

  return (
    <Component
      {...restProps}
      className={classNames}
      onMouseEnter={handleHover}
      onMouseLeave={cancelHover}
    >
      <div className={s.textContainer} ref={textContainerRef}>
        <div className={s.text} ref={textRef}>
          {text}
        </div>
      </div>
      <div className={s.background}></div>
      <div className={s.arrowContainer}>
        <ArrowIcon />
      </div>
    </Component>
  );
};
