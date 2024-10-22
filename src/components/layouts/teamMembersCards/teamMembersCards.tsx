"use client"

import { useRef } from "react";
import clsx from "clsx";
import s from "./teamMembersCards.module.scss";
import {
  TeamMember,
  TeamMemberCard,
} from "@/components/layouts/teamMemberCard/teamMemberCard";
import { ArrowNavigationButton } from "@/components/ui/buttons/arrowNavigationButton/arrowNavigationButton";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export type TeamMemberCardsProps = {
  teamMembers: TeamMember[];
  className: string;
};

export const TeamMemberCards = (props: TeamMemberCardsProps) => {
  const { teamMembers, className } = props;
  const swiperRef = useRef<SwiperClass>(null);
  const classNames = clsx(s.teamBlock, className);
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

  const handleSwiper = (swiper: SwiperClass) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    swiperRef.current = swiper;
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
          />
          <ArrowNavigationButton
            variant={"next"}
            onClick={handleNextButtonClick}
          />
        </div>
      </div>
      <Swiper
        className={s.cards}
        slidesPerView={"auto"}
        spaceBetween={24}
        onSwiper={handleSwiper}
      >
        {teamMemberList}
      </Swiper>
    </div>
  );
};
