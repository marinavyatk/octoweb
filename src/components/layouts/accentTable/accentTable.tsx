import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./accentTable.module.scss";
import ArrowIcon from "@/svg/arrow.svg";

export type AudienceCardProps = {
  items: string[];
  header: string;
} & ComponentPropsWithoutRef<"div">;

export const AccentTable = (props: AudienceCardProps) => {
  const { header, items, className, ...restProps } = props;
  const classNames = clsx(s.audienceCard, className);

  const itemsList = items.map((item) => {
    return (
      <li key={item}>
        <div className={s.arrow}>
          <ArrowIcon />
        </div>
        <h3>{item}</h3>
      </li>
    );
  });

  return (
    <div {...restProps} className={classNames}>
      <h2 className={s.header}>{header}</h2>
      <ul className={s.description}>{itemsList}</ul>
    </div>
  );
};
