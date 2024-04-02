import {AdvantageCard, AdvantagesCardProps} from "../../components/ui/advantageCard/advantageCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from './advantageCards.module.scss'

export type AdvantageCardsProps = {
    cards: AdvantagesCardProps[]
} & ComponentPropsWithoutRef<'div'>
export const AdvantageCards = (props: AdvantageCardsProps) => {
    const {cards, ...restProps} = props
    const className = clsx(s.cards, restProps.className)
    const cardsList = cards.map(card => {
        return <AdvantageCard icon={card.icon} title={card.title} paragraph={card.paragraph} key={card.title}/>
    })
    return <div className={className}>
        {cardsList}
    </div>
}