import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./briefButton.module.scss";
import Stroke from "@/svg/stroke.svg";
import { routes } from '@/common/routes';
import ArrowIcon from "@/svg/arrow.svg";
import Link from 'next/link';

export type BriefButtonProps = {
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"div">;

export const BriefButton = (props: BriefButtonProps) => {
  const { variant = "primary", className, ...restProps } = props;
  const classNames = clsx(s.buttonContainer, className, s[variant]);

  return (
    <div {...restProps} className={classNames}>
      <Stroke className={s.stroke} />
      <Link href={routes.brief} className={s.arrowContainer} rel={"nofollow"} target={"_blank"} aria-label="Заполнить бриф">
        <ArrowIcon />
      </Link>
    </div>
  );
};
