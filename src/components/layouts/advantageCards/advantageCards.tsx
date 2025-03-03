import { AdvantageCard } from "@/components/layouts/advantageCard/advantageCard";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageCards.module.scss";
import { cards } from "@/common/componentsData/advantageCards";

export type AdvantageCardsProps = {
  scrollProgress: number;
} & ComponentPropsWithoutRef<"div">;
export const AdvantageCards = (props: AdvantageCardsProps) => {
  const { className, scrollProgress, ...restProps } = props;
  const classNames = clsx(s.cards, className);

  const cardsList = cards.map((card, index) => {
    return (
      <AdvantageCard
        icon={card.icon}
        header={card.header}
        text={card.paragraph}
        key={card.header}
        index={index}
        scrollProgress={scrollProgress}
      />
    );
  });

  return (
    <div className={classNames} {...restProps}>
      {cardsList}
    </div>
  );
};
