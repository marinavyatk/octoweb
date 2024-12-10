import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageCard.module.scss";
import { Picture } from "@/components/ui/picture/picture";

export type AdvantagesCardProps = {
  icon: string;
  header: string;
  text: string;
} & ComponentPropsWithoutRef<"div">;

export const AdvantageCard = (props: AdvantagesCardProps) => {
  const { icon, header, text, className, ...restProps } = props;
  const classNames = clsx(s.card, className);

  return (
    <div className={classNames} {...restProps}>
      <div className={s.content}>
      <Picture src={icon} alt=""
               fill
               sizes={"max-width: (767px) 67px, max-width: (1425px) 160px, 130px"}
               containerProps={{ className: s.imgContainer }}
      />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
    </div>
  );
};
