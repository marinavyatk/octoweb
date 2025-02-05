import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./caseCircle.module.scss";
import Link from "next/link";
import { Picture } from "@/components/ui/picture/picture";


export type CaseCircle = {
  img: string;
  caseId: string;
};

export type CaseCircleProps = CaseCircle & ComponentPropsWithoutRef<"a">;

export const CaseCircle = (props: CaseCircleProps) => {
  const { img, caseId, className, ...restProps } = props;
  const classNames = clsx(s.caseCircle, className);

  if (!img || !caseId) {
    return null;
  }

  return (
    <Link
      href={`/cases/${caseId}`}
      {...restProps}
      className={classNames}
      rel={"nofollow"}
      draggable={false}
      onDragStart={(event) => {
        event.preventDefault();
      }}
    >
      {img &&
        <Picture src={img}
                 alt={caseId}
                 draggable={false}
                 fill
                 sizes={"(max-width: 767px) 110px,(max-width: 1905px) 170px, 232px"} />
      }
    </Link>
  );
};
