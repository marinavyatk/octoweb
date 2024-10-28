'use client'

import s from "./headerMobile.module.scss";
import { Logo } from "@/components/ui/logo/logo";
import OpenMenuIcon from "@/svg/open-menu-icon.svg";
import clsx from "clsx";
import CloseIcon from "@/svg/close-icon.svg";
import { Navbar } from "@/components/ui/navbar/navbar";
import { ContactButton } from "@/components/ui/buttons/contactButton/contactButton";
import { useCallback, useEffect, useRef, useState } from "react";

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const closeSideMenu = () => {
    setOpen(false);
  };

  const outsideClickHandler = useCallback((event: MouseEvent) => {
    if (!sideMenuRef.current?.contains(event.target as Element)) {
      closeSideMenu();
    }
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => touchEnd.current = e.targetTouches[0].clientX, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      closeSideMenu();
    }
  }, []);

  useEffect(() => {
    if (open) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`; //need for avoid flickering when open
      document.addEventListener("click", outsideClickHandler);
      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    } else {
      document.body.style.overflowY = "unset";
      document.body.style.paddingRight = "0";
      document.removeEventListener("click", outsideClickHandler);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    }
  }, [open]);


  return <>
    <div className={s.mainHeader}>
      <Logo />
      <button >
        <OpenMenuIcon onClick={() => setOpen(true)} className={s.menuButton}/>
      </button>
    </div>
    <div className={clsx(s.sideMenu, !open && s.hidden)}>
      <div className={s.overlay}>
        <div className={s.content} ref={sideMenuRef}>
          <div>
            <div className={s.sideMenuHeader}>
              <Logo onClick={closeSideMenu} sideMenuLogo/>
              <button onClick={closeSideMenu}>
                <CloseIcon />
              </button>
            </div>
            <Navbar className={s.navbar} onEveryLinkClick={closeSideMenu} />
          </div>
          <ContactButton className={s.contactButton} onClick={closeSideMenu} />
        </div>
      </div>
    </div>
  </>;
};