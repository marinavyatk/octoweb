"use client";

import s from "./cases.module.scss";
import { CaseCircle, Category } from "@/components/layouts/caseCircle/caseCircle";
import { FilterButton } from "@/components/ui/buttons/filterButton/filterButton";
import { useEffect, useRef, useState } from "react";
import { CaseCircleList } from "@/components/sections/caseCircleList/caseCircleList";
import { CaseCardFullWidth } from "@/components/layouts/caseCardFullWidth/caseCardFullWidth";
import { CaseCard, Size } from "@/components/layouts/caseCard/caseCard";
import { buttons, casesData, circles, sizes } from "@/common/componentsData/cases";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/buttons/button/button";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);


export default function Cases() {
  const [currentFilter, setCurrentFilter] = useState<Category>("All projects");
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.set(".fullWidth", {
      y: 100,
      opacity: 0
    });
    gsap.set(".right", {
      x: 100,
      opacity: 0
    });
    gsap.set(".left", {
      x: -100,
      opacity: 0
    });

    ScrollTrigger.batch(".case", {
      interval: 0.4,
      onEnter: (batch) => {
        gsap.to(
          batch,
          { y: 0, x: 0, opacity: 1, stagger: 0.4, overwrite: true }
        );
      }
    });
  }, []);

  const filteredCases: CaseCircle[] =
    currentFilter === "All projects"
      ? circles
      : circles.filter((el) => el.category === currentFilter);

  const filterButtons = buttons.map((button) => {
    return (
      <FilterButton
        key={button}
        value={button}
        active={button === currentFilter}
        onClick={() => setCurrentFilter(button)}
      >
        {button}
      </FilterButton>
    );
  });

  const cases = casesData.map((card, index) => {
    const size = sizes[index % sizes.length];
    const cardClassName = s[size];
    const animationIndex = index < 5 ? index : index - Math.trunc(index / 5);

    return (index + 1) % 5 !== 0 ? (
      <CaseCard
        size={size as Size}
        className={cardClassName}
        key={uuid()}
        {...card}
        index={animationIndex}
      />
    ) : (
      <div className={clsx(s.fullWidthContainer, "case", "fullWidth")} key={uuid()}>
        <CaseCardFullWidth
          {...card}
        />
      </div>
      //container need for correct cards order on small screens
    );
  });

  return (
    <div className={s.casesPage}>
      <div className={"mainContainer"}>
        <div className={s.header}>
          <h1>КЕЙСЫ</h1>
          <div className={s.filterButtons}>{filterButtons}</div>
        </div>
      </div>
      <CaseCircleList
        caseCircles={filteredCases}
        className={s.caseCircleList}
      />
      <div className={s.smallBubbleCirclesContainer}>
        <SmallBubble className={s.smallBubbleCircles} />
      </div>
      <div className={s.casesList} ref={container}>{cases}
        <SmallBubble className={s.smallBubbleCases} />
      </div>
      <Button text={"Показать ещё"} className={s.showMoreButton} />
      <div className={s.bigBubbleEndContainer}>
        <BigBubble className={s.bigBubbleEnd} />
      </div>
    </div>
  );
};