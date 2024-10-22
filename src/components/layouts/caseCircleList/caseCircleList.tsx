'use client'

import clsx from "clsx";
import s from "./caseCircleList.module.scss";
import { CaseCircle } from "@/components/layouts/caseCircle/caseCircle";
import  ScrollContainer  from "react-indiana-drag-scroll";

export type CaseCircleProps = {
  caseCircles: CaseCircle[];
  className?: string;
};

export const CaseCircleList = (props: CaseCircleProps) => {
  const { caseCircles, className } = props;
  const classNames = clsx(s.circles, className);
  const CaseCircles = caseCircles.map((circle) => {
    return (
      <CaseCircle
        img={circle.img}
        caseId={circle.caseId}
        category={circle.category}
        key={circle.caseId}
      />
    );
  });

  return (
    <ScrollContainer className={classNames}>{CaseCircles}</ScrollContainer>
  );
};
