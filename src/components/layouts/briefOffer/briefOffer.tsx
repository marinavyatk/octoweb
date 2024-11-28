import s from "./briefOffer.module.scss";
import { BriefButton } from "@/components/ui/buttons/briefButton/briefButton";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type BriefOfferProps = ComponentPropsWithoutRef<"div">;
export const BriefOffer = (props: BriefOfferProps) => {
  const classNames = clsx(s.briefOffer, props.className);

  return (
    <div className={classNames}>
      <BriefButton aria-label="Заполнить бриф"/>
      <div className={s.offerText}>
        <span className={s.heading}>
          Получите скидку <span className={s.accent}>5000 рублей!</span>
        </span>
        <br />
        <span className={s.description}>Достаточно просто заполнить бриф</span>
      </div>
    </div>
  );
};
