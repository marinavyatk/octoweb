import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./caseCircleList.module.scss";
import { CaseCircle } from "../../primitive/caseCircle/caseCircle.tsx";

export type CaseCircleProps = {
  caseCircles: CaseCircle[];
} & ComponentPropsWithoutRef<"div">;

export const CaseCircleList = (props: CaseCircleProps) => {
  const { caseCircles, className, ...restProps } = props;
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
    <div {...restProps} className={classNames}>
      {CaseCircles}
    </div>
  );
};
