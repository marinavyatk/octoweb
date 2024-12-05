"use client";

import { StepCard } from "@/components/layouts/stepCard/stepCard";
import clsx from "clsx";
import s from "./stepCards.module.scss";
import { stepCards } from "@/common/componentsData/stepCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

export type StepCardsProps = {
  className?: string;
};

export const StepCards = (props: StepCardsProps) => {
  const { className } = props;
  const classNames = clsx(s.stepsPlaceholder, className);

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

  return <div className={classNames}>
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
  </div>;
};
