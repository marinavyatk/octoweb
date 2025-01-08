"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import s from "./advantageCard.module.scss";
import Lottie from "lottie-react";
import { animated, config, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

export type AdvantagesCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: Record<string, any>;
  header: string;
  text: string;
  index: number;
  scrollProgress: number
} & ComponentPropsWithoutRef<"div">;

export const AdvantageCard = (props: AdvantagesCardProps) => {
  const { icon, header, text, className, index, scrollProgress, ...restProps } = props;
  const classNames = clsx(s.card, className);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.5, true);
  const isAnimationVisible = useIntersectionObserver(cardRef, 0.01);
  const [isTabletOrMobile, setTabletOrMobile] = useState(false);

  useEffect(() => {
    setTabletOrMobile(window.innerWidth <= 1265);
  }, []);

  const styles = useSpring({
    transform: isTabletOrMobile ? `translateY(${isVisible ? 0 : 3000}px)` : `translateY(${scrollProgress >= (index + 1) * 0.12 ? 0 : 3000}px)`, //not opacity because of drop-filter property doesn`t animate smoothly
    config: config.slow,
  });

  return (
    <div ref={cardRef}>
      <animated.div className={classNames} {...restProps} style={styles}>
        <div className={s.content}>
          {isAnimationVisible ?
            <Lottie
              className={s.imgContainer}
              animationData={icon}
              loop
              autoplay
            />
            :
            <div className={s.imgContainer}></div>
          }
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </animated.div>
    </div>
  );
};
