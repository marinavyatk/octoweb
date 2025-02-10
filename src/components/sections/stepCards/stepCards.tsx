"use client";

import { StepCard } from "@/components/layouts/stepCard/stepCard";
import clsx from "clsx";
import s from "./stepCards.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import Lottie from "lottie-react";
// import StepsAnimation from "@/lotties/steps.json";
import StepsAnimation from "@/lotties/swipe.json";
import { Step } from "@/common/types";

export type StepCardsProps = {
  className?: string;
  stepCards: Step[]
};

export const StepCards = (props: StepCardsProps) => {
  const { stepCards, className } = props;
  const classNames = clsx(s.stepsSection, className);

  if(!stepCards || !stepCards.length) return null;

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

  return <section className={classNames}>
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
      <Lottie
        animationData={StepsAnimation}
        loop
        autoplay
        className={s.animation}
      />
      Листайте :)
    </div>
  </section>;
};
