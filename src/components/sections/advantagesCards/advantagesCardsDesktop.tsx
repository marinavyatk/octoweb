"use client";

import s from "./advantagesCards.module.scss";
import { animated, useSpring, config } from "@react-spring/web";
import { SquidIcon } from "@/components/layouts/squidIcon";
import { AdvantageCards } from "@/components/layouts/advantageCards/advantageCards";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);


export const AdvantagesCardsDesktop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 1265) return;
    const trigger = ScrollTrigger.create({
      trigger: ".container",
      start: "-70px top",
      pin: ".container",
      scrub: true,
      end: "+=200%",
      onUpdate: self => setScrollProgress(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const headerStyles = useSpring({
    transform: `translateY(${scrollProgress >= 0.1 ? 0 : 100}px)`,
    opacity: scrollProgress >= 0.1 ? 1 : 0,
    config: config.slow
  });
  const arrowStyles = useSpring({
    transform: `translateY(${scrollProgress >= 0.15 ? 0 : 100}px)`,
    opacity: scrollProgress >= 0.15 ? 1 : 0,
    config: config.slow
  });
  const squidStyles = useSpring({
    transform: `translateY(${scrollProgress >= 0.2 ? 0 : 100}px)`,
    opacity: scrollProgress >= 0.3 ? 1 : 0,
    config: config.slow
  });
  const squid2Styles = useSpring({
    transform: `translateY(${scrollProgress >= 0.4 ? 0 : 100}px)`,
    opacity: scrollProgress >= 0.5 ? 1 : 0,
    config: config.slow
  });

  return (
    <section className={clsx(s.advantages, "container")}>
      <animated.h2 style={headerStyles}>ПОЧЕМУ МЫ?</animated.h2>
      <animated.div className={s.arrow} style={arrowStyles}></animated.div>
      <animated.div className={s.backgroundSymbol} style={squidStyles}>
        <SquidIcon />
      </animated.div>
      <animated.div className={s.backgroundSymbol} style={squid2Styles}>
        <SquidIcon />
      </animated.div>
      <div className={s.advantagesCards}>
        <AdvantageCards scrollProgress={scrollProgress} />
      </div>
    </section>
  );
};