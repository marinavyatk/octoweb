"use client";

import s from "./advantagesCards.module.scss";
import { animated, config, useSpring } from "@react-spring/web";
import { SquidIcon } from "@/components/layouts/squidIcon";
import { AdvantageCards } from "@/components/layouts/advantageCards/advantageCards";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const AdvantagesCardsDesktop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 1265) return;

    const trigger = ScrollTrigger.create({
      id: "advantagesCards",
      trigger: ".advantagesContainer",
      start: "-70px top",
      pin: ".advantagesContainer",
      scrub: true,
      end: "+=200%",
      onUpdate: self => setScrollProgress(self.progress),
      pinnedContainer: ".main",
      once: true,
      onLeave: (self) => {
        const start = self.start;
        self.scroll(start);
        self.kill();
        ScrollTrigger.refresh();
        window.scrollTo(0, start);
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  //need for correct anchor link behaviour on main page
  useEffect(() => {
    const contactButtons = document.querySelectorAll("#formAnchor");
    if (!contactButtons) return;

    const scrollToForm = (e: Event) => {
      e.preventDefault();
      setScrollProgress(1);
      const trigger = ScrollTrigger.getById("advantagesCards");
      trigger?.kill();
      const footerTrigger = ScrollTrigger.getById("footer");
      footerTrigger?.refresh();
      const form = document.getElementById("form");
      form?.scrollIntoView({ behavior: "smooth" });
    };

    contactButtons.forEach(button => {
      button.addEventListener("click", scrollToForm);
    });

    return () => contactButtons.forEach(button => {
      button.removeEventListener("click", scrollToForm);
    });
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
    <section className={s.advantages}>
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