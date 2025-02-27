import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./logo.module.scss";
import LogoImg from "@/svg/logoImg.svg";
import { routes } from "@/common/routes";
import Link from "next/link";
import Image from "next/image";

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
      aria-label="Перейти на главную страницу"
    >
      <div className={s.logoImgContainer}>
        <LogoImg className={s.logoImg} />
      </div>
      <div className={s.logoText}>
        <Image src={"/logoText.webp"}
               alt="Octoweb веб-студия"
               fill
               sizes="(max-width: 767px) 95px, (max-width: 1279px) 201px, (max-width: 1425px) 95px, (max-width: 1905px) 115px, 158px"
        />
      </div>
    </Link>
  );
};
