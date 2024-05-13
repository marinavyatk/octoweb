import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./caseCircle.module.scss";
import { Link } from "react-router-dom";

export type Category = "All projects" | "Web" | "Seo" | "Ads";
export type CaseCircle = {
  img: string;
  caseId: string;
  category: Category;
};
export type CaseCircleProps = CaseCircle & ComponentPropsWithoutRef<"a">;

export const CaseCircle = (props: CaseCircleProps) => {
  const { img, caseId, className, ...restProps } = props;
  const classNames = clsx(s.caseCircle, className);
  return (
    <Link
      to={`/cases/${caseId}`}
      {...restProps}
      className={classNames}
      rel={"nofollow"}
    >
      <img src={img} alt="caseId" />
    </Link>
  );
};
