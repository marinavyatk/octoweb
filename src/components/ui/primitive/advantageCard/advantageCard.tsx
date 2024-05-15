import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageCard.module.scss";

export type AdvantagesCardProps = {
  icon: string;
  header: string;
  paragraph: string;
} & ComponentPropsWithoutRef<"div">;
export const AdvantageCard = (props: AdvantagesCardProps) => {
  const { icon, header, paragraph, className, ...restProps } = props;

  const classNames = clsx(s.card, className);
  return (
    <div className={classNames} {...restProps}>
      <figure>
        <img src={icon} alt={header} />
        <figcaption>{header}</figcaption>
      </figure>
      <p>{paragraph}</p>
    </div>
  );
};
