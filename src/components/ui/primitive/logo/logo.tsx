import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./logo.module.scss";
import LogoImg from "../../../../assets/logoImg.svg?react";
import LogoText from "../../../../assets/logoText.svg?react";
import { Link } from "react-router-dom";
import { routes } from "../../../../common/routes.ts";

export type LogoProps = ComponentPropsWithoutRef<"a">;

export const Logo = (props: LogoProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.logo, className);
  return (
    <Link
      to={routes.main}
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
