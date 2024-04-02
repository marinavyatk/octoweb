import {AdvantageCards} from "./advantageCards.tsx";
import AdvantageIcon from "../../assets/simplicity.svg";
import CommunicationCard from "../../assets/communication.svg";
import EfficiencyIcon from "../../assets/efficiency.svg";
import PriceIcon from "../../assets/price.svg";
import {ComponentPropsWithoutRef} from "react";

export type AdvantagesCardsBlockProps = ComponentPropsWithoutRef<'div'>
export const AdvantagesCardsBlock = (props: AdvantagesCardsBlockProps) => {
    const {...restProps} = props;
    const cards = [
        {icon: AdvantageIcon, title: 'Просто о сложном', paragraph: 'Переводим технические моменты на "человеческий язык", чтобы вы могли понимать окончательный результат.'},
        {icon: CommunicationCard, title: 'Ясность коммуникаций', paragraph: 'Вы всегда можете уточнить, как идет работа. В коммуникации учавствуют основные сотрудники нашей студии.'},
        {icon: EfficiencyIcon, title: 'Полная эффективность', paragraph: 'Быстро включаемся в решение задачи и также оператовно справляемся с ней без бюрократических задержек.'},
        {icon: PriceIcon, title: 'Прозрачные цены', paragraph: 'Ясное представление о составе расценок, цена фиксируется в договоре, без скрытых или неочевидных платежей'}
    ]

    return <AdvantageCards cards={cards} {...restProps}/>
}