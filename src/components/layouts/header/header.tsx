"use client";

import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./header.module.scss";
import { Logo } from "../../ui/logo/logo";
import { Navbar } from "../../ui/navbar/navbar";
import { ContactButton } from "@/components/ui/buttons/contactButton/contactButton";
import Headroom from "react-headroom";
import { useScreenWidth } from "@/common/customHooks/useScreenWidth";
import { HeaderMobile } from "@/components/layouts/header/headerMobile";

export type HeaderProps = ComponentPropsWithoutRef<"header">;

export const Header = (props: HeaderProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.headerContainer, className);
  const isTabletOrMobile = useScreenWidth(1279);

  return (
    <Headroom className={classNames}>
      <header {...restProps} className={s.header}>
        {isTabletOrMobile ?
          <HeaderMobile />
          :
          <>
            <Logo />
            <div className={s.rightBlock}>
              <Navbar />
              <ContactButton />
            </div>
          </>
        }
      </header>
    </Headroom>
  );
};
