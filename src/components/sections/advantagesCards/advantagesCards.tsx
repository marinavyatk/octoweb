"use client";

import { useEffect, useState } from "react";
import { AdvantagesCardsMobile } from "@/components/sections/advantagesCards/avantagesCardsMobile";
import { AdvantagesCardsDesktop } from "@/components/sections/advantagesCards/advantagesCardsDesktop";
import s from "./advantagesCards.module.scss";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";


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
    <div className={'advantagesContainer'}>
      <div className={s.advantagesBubbles}>
        <BigBubble className={s.bigBubbleAdvantages} />
        <SmallBubble className={s.smallBubbleAdvantages} />
      </div>
      {screenWidth && screenWidth > 1265 ?
        <AdvantagesCardsDesktop /> :
        <AdvantagesCardsMobile />
      }
    </div>
  );
};