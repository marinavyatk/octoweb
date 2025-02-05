"use client";

import clsx from "clsx";
import s from "./caseCircleList.module.scss";
import { CaseCircle } from "@/components/layouts/caseCircle/caseCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { v4 as uuid } from "uuid";
import { memo } from "react";

export type CaseCircleProps = {
  caseCircles: CaseCircle[];
  className?: string;
};

export const CaseCircleList = memo((props: CaseCircleProps) => {
  const { caseCircles, className } = props;
  const classNames = clsx(s.circlesPlaceholder, className);
  const CaseCircles = caseCircles.map((circle) => {
    return (
      <SwiperSlide key={uuid()} className={s.slide}>
        <CaseCircle {...circle} />
      </SwiperSlide>
    );
  });

  return (
    <div className={classNames}>
      <div className={s.circlesContainer}>
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView={"auto"}
          grabCursor
          className={s.circles}
        >
          {CaseCircles}
        </Swiper>
      </div>
    </div>
  );
});

CaseCircleList.displayName = "CaseCircleList";