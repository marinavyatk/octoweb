"use client";

import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageCard.module.scss";
import Lottie from "lottie-react";

export type AdvantagesCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: Record<string, any>;
  header: string;
  text: string;
} & ComponentPropsWithoutRef<"div">;

export const AdvantageCard = (props: AdvantagesCardProps) => {
  const { icon, header, text, className, ...restProps } = props;
  const classNames = clsx(s.card, className);

  return (
    <div className={classNames} {...restProps}>
      <div className={s.content}>
        <Lottie
          className={s.imgContainer}
          animationData={icon}
          loop
          autoplay
        />
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
