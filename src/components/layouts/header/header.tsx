'use client'

import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./header.module.scss";
import { Logo } from "../../ui/logo/logo";
import { Navbar } from "../../ui/navbar/navbar";
import { ContactButton } from "@/components/ui/buttons/contactButton/contactButton";
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
