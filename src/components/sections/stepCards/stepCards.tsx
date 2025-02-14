"use client";

import { StepCard } from "@/components/layouts/stepCard/stepCard";
import clsx from "clsx";
import s from "./stepCards.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import Lottie from "lottie-react";
import StepsAnimation from "@/lotties/swipe.json";
import { Step } from "@/common/types";
import { useRef } from "react";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

export type StepCardsProps = {
  className?: string;
  stepCards: Step[]
};

export const StepCards = (props: StepCardsProps) => {
  const { stepCards, className } = props;
  const classNames = clsx(s.stepsSection, className);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimationVisible = useIntersectionObserver(sectionRef, 0.1);
  if (!stepCards || !stepCards.length) return null;

  const cardsList = stepCards.map((card) => {
    return (
      <SwiperSlide key={card.stepNumber} className={s.slide}>
        <StepCard
          stepNumber={card.stepNumber}
          header={card.header}
          description={card.description}
        />
      </SwiperSlide>
    );
  });

  return <section className={classNames} ref={sectionRef}>
    <div className={s.stepsPlaceholder}>
      <div className={s.stepsContainer}>
        <Swiper
          modules={[FreeMode]}
          slidesPerView={"auto"}
          freeMode
          grabCursor
          className={s.cards}
        >
          {cardsList} </Swiper>;
      </div>
    </div>
    <div className={s.caption}>
      {isAnimationVisible ?
        <Lottie
          animationData={StepsAnimation}
          loop
          autoplay
          className={s.animation}
        />
        :
        <div className={s.animation}></div>
      }
      Листайте :)
    </div>
  </section>;
};
