"use client";

import { ComponentPropsWithoutRef, useRef } from "react";
import { clsx } from "clsx";
import s from "./advantageCard.module.scss";
import Lottie from "lottie-react";
import { animated, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

export type AdvantagesCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: Record<string, any>;
  header: string;
  text: string;
  index: number
} & ComponentPropsWithoutRef<"div">;

export const AdvantageCard = (props: AdvantagesCardProps) => {
  const { icon, header, text, className, index, ...restProps } = props;
  const classNames = clsx(s.card, className);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.5, true);
  const isAnimationVisible = useIntersectionObserver(cardRef, 0.5);

  const styles = useSpring({
    transform: `translateY(${isVisible ? 0 : 3000}px)`, //not opacity because of drop-filter property doesn`t animate smoothly
    delay: typeof window !== "undefined" && window.innerWidth <= 1265 ? 0 : 200 * (index + 1)
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
