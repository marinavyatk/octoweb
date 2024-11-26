import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./logo.module.scss";
import LogoImg from "@/svg/logoImg.svg";
import LogoText from "@/svg/logoText.svg";
import { routes } from "@/common/routes";
import Link from "next/link";

export type LogoProps = {
  sideMenuLogo?: boolean;
} & ComponentPropsWithoutRef<"a">;

export const Logo = (props: LogoProps) => {
  const { sideMenuLogo = false, className, ...restProps } = props;
  const classNames = clsx(s.logo, className, sideMenuLogo && s.sideMenuLogo, !sideMenuLogo && s.hoverable);
  return (
    <Link
      href={routes.main}
      {...restProps}
      className={classNames}
      rel={"nofollow"}
      aria-label="Перейти на главную страницу"
    >
      <div className={s.logoImgContainer}>
        <LogoImg className={s.logoImg} />
      </div>
      <LogoText className={s.logoText} />
    </Link>
  );
};
