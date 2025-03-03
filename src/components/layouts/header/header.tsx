"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import clsx from "clsx";
import s from "./header.module.scss";
import { Logo } from "../../ui/logo/logo";
import { Navbar } from "../../ui/navbar/navbar";
import { ContactButton } from "@/components/ui/buttons/contactButton/contactButton";
import Headroom from "react-headroom";
import { HeaderMobile } from "@/components/layouts/header/headerMobile";
import { Social } from "@/common/types";

export type HeaderProps = {
  needContactButton?: boolean;
  socials: Social[];
} & ComponentPropsWithoutRef<"header">;

export const Header = (props: HeaderProps) => {
  const { socials, needContactButton = true, className, ...restProps } = props;
  const classNames = clsx(s.headerContainer, className);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      document.body.classList.add("ios");
    }
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`,
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <Headroom className={classNames}>
      <header {...restProps} className={s.header} ref={headerRef}>
        <div className={s.headerMobile}>
          <HeaderMobile
            needContactButton={needContactButton}
            socials={socials}
          />
        </div>
        <div className={s.headerDesktop}>
          <Logo />
          <div className={s.rightBlock}>
            <Navbar />
            {needContactButton && <ContactButton />}
          </div>
        </div>
      </header>
    </Headroom>
  );
};
