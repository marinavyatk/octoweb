import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./buttonWithStroke.module.scss";
import Stroke from "@/svg/stroke.svg";
import { routes } from '@/common/routes';
import ArrowIcon from "@/svg/arrow.svg";
import Link from 'next/link';

export type ButtonWithStrokeProps = {
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"div">;

export const ButtonWithStroke = (props: ButtonWithStrokeProps) => {
  const { variant = "primary", className, ...restProps } = props;
  const classNames = clsx(s.buttonContainer, className, {
    [s.primary]: variant === "primary",
    [s.secondary]: variant === "secondary",
  });

  return (
    <div {...restProps} className={classNames}>
      <Stroke className={s.stroke} />
      <Link href={routes.brief} className={s.arrowLink} rel={"nofollow"} target={"_blank"} aria-label="Заполнить бриф">
        <ArrowIcon />
      </Link>
    </div>
  );
};
