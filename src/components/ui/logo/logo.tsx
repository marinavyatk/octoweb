import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./logo.module.scss";
import LogoImg from "@/svg/logoImg.svg";
import LogoText from "@/svg/logoText.svg";
import { routes } from '@/common/routes';
import Link from 'next/link';

export type LogoProps = ComponentPropsWithoutRef<"a">;

export const Logo = (props: LogoProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.logo, className);
  return (
    <Link
      href={routes.main}
      {...restProps}
      className={classNames}
      rel={"nofollow"}
    >
      <span className={s.mainLogoContainer}>
        <span className={s.logoImgContainer}></span>
        <LogoImg className={s.logoImg} />
      </span>
      <LogoText className={s.logoText} />
    </Link>
  );
};
