import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./briefButton.module.scss";
import { routes } from "@/common/routes";
import ArrowIcon from "@/svg/arrow.svg";
import Link from "next/link";
import Image from "next/image";

export type BriefButtonProps = {
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"div">;

export const BriefButton = (props: BriefButtonProps) => {
  const { variant = "primary", className, ...restProps } = props;
  const classNames = clsx(s.buttonContainer, className, s[variant]);
  const getSizes = () => {
    if (variant === "primary") {
      return "(max-width: 1265px) 144px, (max-width: 1905px) 185px, 252px";
    } else {
      return "(max-width: 1265px) 91px, (max-width: 1905px) 185px, 252px";
    }
  };

  return (
    <div {...restProps} className={classNames}>
      <div className={s.stroke}>
        <Image src="/stroke.webp" alt="" fill sizes={getSizes()} priority />
      </div>
      <Link href={routes.brief} className={s.arrowContainer} rel={"nofollow"} target={"_blank"}
            aria-label="Заполнить бриф">
        <ArrowIcon />
      </Link>
    </div>
  );
};
