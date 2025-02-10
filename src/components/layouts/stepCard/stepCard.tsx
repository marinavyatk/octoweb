import { ComponentPropsWithoutRef } from "react";
import s from "./stepCard.module.scss";
import { clsx } from "clsx";
import { Step } from "@/common/types";

export type StepCardProps = Step & ComponentPropsWithoutRef<"div">;

export const StepCard = (props: StepCardProps) => {
  const { stepNumber, header, description, className, ...restProps } = props;
  const classNames = clsx(s.card, className);

  return (
    <div {...restProps} className={classNames}>
      <div className={s.cardHeader}>
        <span className={s.stepNumber}>{stepNumber}</span>
        <h2 className={s.header}>{header}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};
