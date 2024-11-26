"use client";

import { MutableRefObject, useRef, useState } from "react";
import clsx from "clsx";
import s from "./teamMembersCards.module.scss";
import {
  TeamMember,
  TeamMemberCard
} from "@/components/layouts/teamMemberCard/teamMemberCard";
import { ArrowNavigationButton } from "@/components/ui/buttons/arrowNavigationButton/arrowNavigationButton";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

export type TeamMemberCardsProps = {
  teamMembers: TeamMember[];
  className: string;
};

export const TeamMemberCards = (props: TeamMemberCardsProps) => {
  const { teamMembers, className } = props;
  const swiperRef = useRef<SwiperClass>(null);
  const classNames = clsx(s.teamBlock, className);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const teamMemberList = teamMembers.map((member, index) => {
    return (
      <SwiperSlide
        virtualIndex={index}
        key={member.specialization}
        className={s.swiperSlide}
      >
        <TeamMemberCard
          workExperience={member.workExperience}
          name={member.name}
          specialization={member.specialization}
          description={member.description}
          img={member.img}
          className={s.cardItem}
        />
      </SwiperSlide>
    );
  });

  const handleSwiper = (swiper: SwiperClass, swiperRef: MutableRefObject<SwiperClass>) => {
    swiperRef.current = swiper;
  };
  const handleUpdateButtonsState = (swiper: SwiperClass) => {
    if (swiper.isBeginning) {
      setIsBeginning(true);
    } else if (swiper.isEnd) {
      setIsEnd(true);
    } else {
      setIsBeginning(false);
      setIsEnd(false);
    }
  };

  const handlePrevButtonClick = () => swiperRef.current?.slidePrev();
  const handleNextButtonClick = () => swiperRef.current?.slideNext();

  return (
    <div className={classNames} id={"team"}>
      <div className={s.header}>
        <h2>КОМАНДА</h2>
        <div className={s.buttons}>
          <ArrowNavigationButton
            variant={"previous"}
            onClick={handlePrevButtonClick}
            disabled={isBeginning}
            aria-label="Назад"
          />
          <ArrowNavigationButton
            variant={"next"}
            onClick={handleNextButtonClick}
            disabled={isEnd}
            aria-label="Вперёд"
          />
        </div>
      </div>
      <Swiper
        className={s.cards}
        slidesPerView={"auto"}
        spaceBetween={24}
        onSwiper={(swiper) => handleSwiper(swiper, swiperRef as MutableRefObject<SwiperClass>)}
        onProgress={handleUpdateButtonsState}
      >
        {teamMemberList}
      </Swiper>
    </div>
  );
};