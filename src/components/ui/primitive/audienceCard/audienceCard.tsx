import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./audienceCard.module.scss";
import ArrowIcon from "../../../../assets/arrow.svg?react";

export type AudienceCardProps = {
  items: string[];
  header: string;
} & ComponentPropsWithoutRef<"div">;

export const AudienceCard = (props: AudienceCardProps) => {
  const { header, items, className, ...restProps } = props;
  const classNames = clsx(s.audienceCard, className);

  const itemsList = items.map((item) => {
    return (
      <li>
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
