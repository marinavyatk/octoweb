"use client";

import s from "./advantagesCards.module.scss";
import { animated, useSpring } from "@react-spring/web";
import { SquidIcon } from "@/components/layouts/squidIcon";
import { AdvantageCards } from "@/components/layouts/advantageCards/advantageCards";
import { useInView } from "react-spring";

export const AdvantagesCards = () => {
  const [headerRef, isHeaderInView] = useInView({once: true});
  const [arrowRef, isArrowInView] = useInView({once: true});
  const [squidRef, isSquidInView] = useInView({once: true});
  const [squid2Ref, isSquid2InView] = useInView({once: true});

  const headerStyles = useSpring({
    transform: `translateY(${isHeaderInView ? 0 : 100}px)`,
    opacity: isHeaderInView ? 1 : 0
  });
  const arrowStyles = useSpring({
    transform: `translateY(${isArrowInView ? 0 : 100}px)`,
    opacity: isArrowInView ? 1 : 0,
    delay: 200
  });
  const squidStyles = useSpring({
    transform: `translateY(${isSquidInView ? 0 : 100}px)`,
    opacity: isSquidInView ? 1 : 0,
    delay: 300
  });
  const squid2Styles = useSpring({
    transform: `translateY(${isSquid2InView ? 0 : 100}px)`,
    opacity: isSquid2InView ? 1 : 0,
    delay: 400,
  });

  return <section className={s.advantages}>
    <animated.h2 ref={headerRef} style={headerStyles}>ПОЧЕМУ МЫ?</animated.h2>
    <animated.div className={s.arrow} ref={arrowRef} style={arrowStyles}></animated.div>
    <animated.div className={s.backgroundSymbol} ref={squidRef} style={squidStyles}>
      <SquidIcon />
    </animated.div>
    <animated.div className={s.backgroundSymbol} ref={squid2Ref} style={squid2Styles}>
      <SquidIcon />
    </animated.div>
    <div className={s.advantagesCards}>
      <AdvantageCards />
    </div>
  </section>;
};