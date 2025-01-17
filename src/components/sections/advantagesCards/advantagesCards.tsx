"use client";

import { useEffect, useState } from "react";
import { AdvantagesCardsMobile } from "@/components/sections/advantagesCards/avantagesCardsMobile";
import { AdvantagesCardsDesktop } from "@/components/sections/advantagesCards/advantagesCardsDesktop";


export const AdvantagesCards = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", setWidth);
    setWidth();
    return window.removeEventListener("resize", setWidth);
  }, []);

  return (
    <>
      <div style={{ display: screenWidth && screenWidth > 1265 ? "block" : "none" }}>
        <AdvantagesCardsDesktop />
      </div>
      <div style={{ display: screenWidth && screenWidth <= 1265 ? "block" : "none" }}>
        <AdvantagesCardsMobile />
      </div>
    </>
  );
};