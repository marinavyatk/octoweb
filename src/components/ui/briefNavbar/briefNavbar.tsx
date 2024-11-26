"use client";

import clsx from "clsx";
import s from "./briefNavbar.module.scss";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import {
  BriefNavigationLink,
  BriefNavigationLinkProps
} from "@/components/ui/briefNavbar/briefNavigationLink/briefNavigationLink";
import { BurgerButton } from "@/components/ui/buttons/burgerButton/burgerButton";
import { useClose } from "@/common/customHooks/useClose";

export type BriefNavbarProps = {
  navItems: BriefNavigationLinkProps[];
} & ComponentPropsWithoutRef<"nav">;

export const BriefNavbar = (props: BriefNavbarProps) => {
  const { navItems, className, ...restProps } = props;
  const [open, setOpen] = useState(false);
  const classNames = clsx(s.container, className, !open && s.hidden);
  const navRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
  };

  const navLinks = navItems.map((item) => {
    return <BriefNavigationLink key={item.text} {...item} onClick={close} />;
  });

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  useClose({close, elementRef: navRef, direction: "left", open});


  return (
    <div className={classNames} {...restProps} >
      <div className={s.overlay}></div>
      <nav {...restProps} className={s.briefNavbar} ref={navRef}>
        <div className={s.mobileControl}>
          <BurgerButton open={open} onClick={toggleOpen} type={"button"} />
        </div>
        {navLinks}
      </nav>
    </div>
  );
};
