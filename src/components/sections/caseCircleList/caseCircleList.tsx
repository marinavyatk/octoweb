"use client";

import clsx from "clsx";
import s from "./caseCircleList.module.scss";
import { CaseCircle } from "@/components/layouts/caseCircle/caseCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

export type CaseCircleProps = {
  caseCircles: CaseCircle[];
  className?: string;
};

export const CaseCircleList = (props: CaseCircleProps) => {
  const { caseCircles, className } = props;
  const classNames = clsx(s.circles, className);
  const CaseCircles = caseCircles.map((circle) => {
    return (
      <SwiperSlide key={circle.caseId} className={s.slide}>
        <CaseCircle {...circle} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[FreeMode]}
      freeMode
      slidesPerView={"auto"}
      grabCursor
      className={classNames}
    >
      {CaseCircles}
    </Swiper>
  );
};
