"use client";

import s from "./cases.module.scss";
import { CaseCircle, Category } from "@/components/layouts/caseCircle/caseCircle";
import { FilterButton } from "@/components/ui/buttons/filterButton/filterButton";
import { useState } from "react";
import { CaseCircleList } from "@/components/sections/caseCircleList/caseCircleList";
import { CaseCardFullWidth } from "@/components/layouts/caseCardFullWidth/caseCardFullWidth";
import { CaseCard, Size } from "@/components/layouts/caseCard/caseCard";
import { buttons, casesData, circles, sizes } from "@/common/componentsData/cases";
import { v4 as uuid } from "uuid";
import { ArrowButtonWithText } from "@/components/ui/buttons/ArrowButtonWithText/arrowButtonWithText";


export default function Cases() {
  const [currentFilter, setCurrentFilter] = useState<Category>("All projects");

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

    return (index + 1) % 5 !== 0 ? (
      <CaseCard
        category={card.category}
        tags={card.tags}
        img={card.img}
        size={size as Size}
        header={card.header}
        className={cardClassName}
        key={uuid()}
        caseId={card.caseId}
      />
    ) : (
      <div className={s.fullWidthContainer}>
        <CaseCardFullWidth
          category={card.category}
          tags={card.tags}
          img={card.img}
          header={card.header}
          key={uuid()}
          caseId={card.caseId}
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
      <div className={s.casesList}>{cases}</div>
      <ArrowButtonWithText text={"Показать ещё"} className={s.showMoreButton} />
    </div>
  );
};
