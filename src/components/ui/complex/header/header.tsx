import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./header.module.scss";
import { Logo } from "../../primitive/logo/logo.tsx";
import { Navbar } from "../../primitive/navbar/navbar.tsx";
import { ContactButton } from "../../primitive/contactButton/contactButton.tsx";
import Headroom from "react-headroom";

export type HeaderProps = ComponentPropsWithoutRef<"header">;

export const Header = (props: HeaderProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.headerContainer, className);
  return (
    <Headroom className={classNames}>
      <header {...restProps} className={s.header}>
        <Logo />
        <div className={s.rightBlock}>
          <Navbar />
          <ContactButton />
        </div>
      </header>
    </Headroom>
  );
};
