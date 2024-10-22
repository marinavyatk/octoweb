import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageItem.module.scss";

export type AdvantageItemProps = {
  number: string;
  description: string;
} & ComponentPropsWithoutRef<"div">;

export const AdvantageItem = (props: AdvantageItemProps) => {
  const { number, description, className, ...restProps } = props;
  const classNames = clsx(s.item, className);

  return (
    <div {...restProps} className={classNames}>
      <span className={s.number}>{number}</span> <br />
      <span className={s.description}>{description}</span>
    </div>
  );
};
