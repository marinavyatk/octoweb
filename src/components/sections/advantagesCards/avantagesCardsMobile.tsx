"use client";

import s from "./advantagesCards.module.scss";
import { animated, useSpring, config } from "@react-spring/web";
import { SquidIcon } from "@/components/layouts/squidIcon";
import { AdvantageCards } from "@/components/layouts/advantageCards/advantageCards";
import { useState, useEffect, useRef } from "react";

export const AdvantagesCardsMobile = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth > 1265) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = Math.min(Math.max(0, viewportHeight - top) / (height + viewportHeight), 1);
      setScrollProgress(progress);

      if (progress >= 0.6) {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    opacity: scrollProgress >= 0.2 ? 1 : 0,
    config: config.slow
  });
  const squid2Styles = useSpring({
    transform: `translateY(${scrollProgress >= 0.4 ? 0 : 100}px)`,
    opacity: scrollProgress >= 0.4 ? 1 : 0,
    config: config.slow
  });

  return (
    <section className={s.advantages} ref={containerRef}>
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