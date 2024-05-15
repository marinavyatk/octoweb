import { AdvantageCard } from "../../primitive/advantageCard/advantageCard.tsx";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageCards.module.scss";
import AdvantageIcon from "../../../../assets/simplicity.svg";
import CommunicationCard from "../../../../assets/communication.svg";
import EfficiencyIcon from "../../../../assets/efficiency.svg";
import PriceIcon from "../../../../assets/price.svg";

export type AdvantageCardsProps = ComponentPropsWithoutRef<"div">;
export const AdvantageCards = (props: AdvantageCardsProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.cards, className);
  const cards = [
    {
      icon: AdvantageIcon,
      header: "Просто о сложном",
      paragraph:
        'Переводим технические моменты на "человеческий язык", чтобы вы могли понимать окончательный результат.',
    },
    {
      icon: CommunicationCard,
      header: "Ясность коммуникаций",
      paragraph:
        "Вы всегда можете уточнить, как идет работа. В коммуникации учавствуют основные сотрудники нашей студии.",
    },
    {
      icon: EfficiencyIcon,
      header: "Полная эффективность",
      paragraph:
        "Быстро включаемся в решение задачи и также оператовно справляемся с ней без бюрократических задержек.",
    },
    {
      icon: PriceIcon,
      header: "Прозрачные цены",
      paragraph:
        "Ясное представление о составе расценок, цена фиксируется в договоре, без скрытых или неочевидных платежей",
    },
  ];
  const cardsList = cards.map((card) => {
    return (
      <AdvantageCard
        icon={card.icon}
        header={card.header}
        paragraph={card.paragraph}
        key={card.header}
      />
    );
  });
  return (
    <div className={classNames} {...restProps}>
      {cardsList}
    </div>
  );
};
